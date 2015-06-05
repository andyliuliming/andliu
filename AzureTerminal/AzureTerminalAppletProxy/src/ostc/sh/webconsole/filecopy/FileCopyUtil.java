package ostc.sh.webconsole.filecopy;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.List;

import ostc.sh.webconsole.OTermEnvironment;
import ostc.sh.webconsole.util.Logger;

import com.jcraft.jsch.Channel;
import com.jcraft.jsch.ChannelExec;
import com.jcraft.jsch.JSchException;
import com.jcraft.jsch.Session;

/**
 * 
 * @author andliu
 *
 */
public class FileCopyUtil {

	public static List<String> ListLocalFolder(String currentFolder) {
		ArrayList<String> result = new ArrayList<String>();
		if (currentFolder == null || currentFolder.isEmpty()) {
			File[] children = File.listRoots();
			for (File f : children) {
				result.add(f.getPath());
			}
		} else {
			Logger.Log("current folder not empty ");
			File folderSelected = new File(currentFolder);
			File[] children = folderSelected.listFiles();
			if (children != null) {
				for (File f : children) {
					result.add(f.getName());
				}
			}
		}
		return result;
	}

	public static List<String> ListRemoteFolder(String currentFolder) {
		ArrayList<String> result = new ArrayList<String>();
		ChannelExec channel = null;
		try {
			channel = (ChannelExec) OTermEnvironment.Instance()
					.getSshConnection().getSession().openChannel("exec");

			String command = "ls " + currentFolder;
			channel.setInputStream(null);

			channel.setCommand(command);
			InputStream in = channel.getInputStream();
			channel.connect();
			BufferedReader br = new BufferedReader(new InputStreamReader(in));
			String line = null;
			while ((line = br.readLine()) != null) {
				// Logger.Log(line);
				result.add(line);
			}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JSchException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return result;
	}

	/**
	 * 
	 * @param session
	 * @param remoteFile
	 * @param filePath
	 */
	public static void CopyFrom(Session session, String remoteFile,
			String filePath) {
		String prefix = null;
		FileOutputStream fos = null;
		try {
			if (new File(filePath).isDirectory()) {
				prefix = filePath + File.separator;
			}

			// exec 'scp -f rfile' remotely
			String command = "scp -f " + remoteFile;
			Channel channel = session.openChannel("exec");
			((ChannelExec) channel).setCommand(command);

			// get I/O streams for remote scp
			OutputStream out = channel.getOutputStream();
			InputStream in = channel.getInputStream();

			channel.connect();

			byte[] buf = new byte[1024];

			// send '\0'
			buf[0] = 0;
			out.write(buf, 0, 1);
			out.flush();

			while (true) {
				int c = checkAck(in);
				if (c != 'C') {
					break;
				}

				// read '0644 '
				in.read(buf, 0, 5);

				long filesize = 0L;
				while (true) {
					if (in.read(buf, 0, 1) < 0) {
						// error
						break;
					}
					if (buf[0] == ' ')
						break;
					filesize = filesize * 10L + (long) (buf[0] - '0');
				}

				String file = null;
				for (int i = 0;; i++) {
					in.read(buf, i, 1);
					if (buf[i] == (byte) 0x0a) {
						file = new String(buf, 0, i);
						break;
					}
				}

				// Logger.Log("filesize="+filesize+", file="+file);

				// send '\0'
				buf[0] = 0;
				out.write(buf, 0, 1);
				out.flush();

				// read a content of lfile
				fos = new FileOutputStream(prefix == null ? filePath : prefix
						+ file);
				int foo;
				while (true) {
					if (buf.length < filesize)
						foo = buf.length;
					else
						foo = (int) filesize;
					foo = in.read(buf, 0, foo);
					if (foo < 0) {
						// error
						break;
					}
					fos.write(buf, 0, foo);
					filesize -= foo;
					if (filesize == 0L)
						break;
				}
				fos.close();
				fos = null;

				if (checkAck(in) != 0) {
					Logger.Log("checkAck failed.");
				}

				// send '\0'
				buf[0] = 0;
				out.write(buf, 0, 1);
				out.flush();
			}
			out.close();

			channel.disconnect();
		} catch (IOException e) {
			e.printStackTrace();
		} catch (JSchException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	public static void CopyTo(Session session, String filePath,
			String remoteFile) {
		boolean ptimestamp = true;
		String command = "scp " + (ptimestamp ? "-p" : "") + " -t "
				+ remoteFile;
		Channel channel = null;
		try {
			channel = session.openChannel("exec");
			((ChannelExec) channel).setCommand(command);

			// get I/O streams for remote scp
			OutputStream out = channel.getOutputStream();
			InputStream in = channel.getInputStream();

			channel.connect();

			if (checkAck(in) != 0) {
				System.exit(0);
			}

			File _lfile = new File(filePath);

			if (ptimestamp) {
				command = "T" + (_lfile.lastModified() / 1000) + " 0";
				// The access time should be sent here,
				// but it is not accessible with JavaAPI ;-<
				command += (" " + (_lfile.lastModified() / 1000) + " 0\n");
				out.write(command.getBytes());
				out.flush();
				if (checkAck(in) != 0) {
					Logger.Log("checkAck failed.");
				}
			}

			// send "C0644 filesize filename", where filename should not include
			// '/'
			long filesize = _lfile.length();
			command = "C0644 " + filesize + " ";
			if (filePath.lastIndexOf('/') > 0) {
				command += filePath.substring(filePath.lastIndexOf('/') + 1);
			} else {
				command += filePath;
			}
			command += "\n";

			Logger.Log("command to execute:" + command);
			out.write(command.getBytes());
			out.flush();
			if (checkAck(in) != 0) {
				Logger.Log("checkAck failed.");
			}

			// send a content of lfile
			FileInputStream fis = new FileInputStream(_lfile);
			byte[] buf = new byte[1024];
			while (true) {
				int len = fis.read(buf, 0, buf.length);
				if (len <= 0)
					break;
				out.write(buf, 0, len); // out.flush();
			}
			fis.close();
			fis = null;
			// send '\0'
			buf[0] = 0;
			out.write(buf, 0, 1);
			out.flush();
			if (checkAck(in) != 0) {
				Logger.Log("checkAck failed.");
				// System.exit(0);
			}
			out.close();

			channel.disconnect();
			// session.disconnect();

		} catch (JSchException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	static int checkAck(InputStream in) throws IOException {
		int b = in.read();
		// b may be 0 for success,
		// 1 for error,
		// 2 for fatal error,
		// -1
		if (b == 0)
			return b;
		if (b == -1)
			return b;

		if (b == 1 || b == 2) {
			StringBuffer sb = new StringBuffer();
			int c;
			do {
				c = in.read();
				sb.append((char) c);
			} while (c != '\n');
			if (b == 1) { // error
				System.err.print(sb.toString());
			}
			if (b == 2) { // fatal error
				System.err.print(sb.toString());
			}
		}
		return b;
	}
}
