package ostc.sh.webconsole.ssh;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

import javax.swing.JOptionPane;

import ostc.sh.webconsole.IConnection;
import ostc.sh.webconsole.MyUserInfo;

import com.jcraft.jsch.Channel;
import com.jcraft.jsch.JSch;
import com.jcraft.jsch.JSchException;
import com.jcraft.jsch.Session;
import com.jcraft.jsch.UserInfo;

/**
 * 
 * @author andliu
 *
 */
public class WebConsoleConnection implements IConnection {

	private InputStream inputStream = null;
	private OutputStream outputStream = null;

	@Override
	public InputStream getInputStream() {
		return inputStream;
	}

	@Override
	public OutputStream getOutputStream() {
		return outputStream;
	}

	@Override
	public void Connect() {
		// TODO Auto-generated method stub

		try {
			JSch jsch = new JSch();

			// jsch.setKnownHosts("/home/foo/.ssh/known_hosts");

			String host = null;
			host = JOptionPane.showInputDialog("Enter username@hostname",
					"andy@10.156.57.169");

			String user = host.substring(0, host.indexOf('@'));
			host = host.substring(host.indexOf('@') + 1);

			/*
			 * String user = "andy"; host = "10.156.57.169";
			 */

			Session session = null;
			session = jsch.getSession(user, host, 22);

			String passwd = JOptionPane.showInputDialog("Enter password","andy");
			session.setPassword(passwd);

			UserInfo ui = new MyUserInfo() {
				public void showMessage(String message) {
					// JOptionPane.showMessageDialog(null, message);
				}

				public boolean promptYesNo(String message) {
					Object[] options = { "yes", "no" };
					int foo = JOptionPane.showOptionDialog(null, message,
							"Warning", JOptionPane.DEFAULT_OPTION,
							JOptionPane.WARNING_MESSAGE, null, options,
							options[0]);
					return foo == 0;
				}
			};

			session.setUserInfo(ui);

			session.connect(3000); // making a connection with timeout.
			session.setServerAliveInterval(60000);
			
			Channel channel = session.openChannel("shell");

			inputStream = channel.getInputStream();
			outputStream = channel.getOutputStream();
			channel.connect();
			
		} catch (JSchException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	@Override
	public void Disconnect() {
		// TODO Auto-generated method stub

	}

}
