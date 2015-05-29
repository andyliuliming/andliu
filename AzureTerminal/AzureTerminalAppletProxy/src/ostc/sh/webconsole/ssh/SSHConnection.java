package ostc.sh.webconsole.ssh;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.util.UUID;

import ostc.sh.webconsole.OTermEnvironment;
import ostc.sh.webconsole.command.Command;
import ostc.sh.webconsole.util.Logger;

import com.jcraft.jsch.ChannelShell;
import com.jcraft.jsch.ContentIdentity;
import com.jcraft.jsch.JSch;
import com.jcraft.jsch.JSchException;
import com.jcraft.jsch.Session;
import com.jcraft.jsch.UserInfo;

public class SSHConnection {

	IdentityInfo identityInfo;
	private Session session;
	private boolean isConnected=false;
	public Session getSession() {
		return session;
	}

	public void setSession(Session session) {
		this.session = session;
	}

	public boolean isConnected(){
		return isConnected;
	}
	
	private ChannelShell channel;

	public SSHConnection(IdentityInfo identityInfo) {
		this.identityInfo = identityInfo;
	}

	public ChannelShell GetChannelShell() throws JSchException {
		if (channel == null) {
			channel = (ChannelShell) session.openChannel("shell");
			channel.setPtyType("xterm");

			Logger.Log("now we are connect using  "
					+ OTermEnvironment.Instance().getWidth() + " "
					+ OTermEnvironment.Instance().getHeight());
			channel.setPtySize(OTermEnvironment.Instance().getWidth(),
					OTermEnvironment.Instance().getHeight(), 0, 0);
			channel.connect();
		}
		return channel;
	}

	private BufferedWriter isw = null;

	public BufferedWriter getShellOutputStream() {
		if (isw == null) {
			try {
				int fileSize = 1024 * 1024;
				OutputStream inputStream = GetChannelShell().getOutputStream();
				isw = new BufferedWriter(new OutputStreamWriter(inputStream,
						"UTF-8"), fileSize);
			} catch (IOException | JSchException e) {
				e.printStackTrace();
			}
		}
		return isw;
	}

	private BufferedReader isr = null;

	public BufferedReader getShellInputStream() {
		if (isr == null) {
			try {
				int fileSize = 1024 * 1024;
				InputStream inputStream = OTermEnvironment.Instance()
						.getSshConnection().GetChannelShell().getInputStream();

				isr = new BufferedReader(new InputStreamReader(inputStream,
						"UTF-8"), fileSize);
			} catch (IOException | JSchException e) {
				e.printStackTrace();
			}
		}
		return isr;
	}

	public void DisConnect() {
		Logger.Log("clear up...");
		isConnected=false;
		this.isr = null;
		this.isw = null;
		if (this.channel != null) {
			try {
				this.channel.disconnect();
			} catch (Exception e) {
				e.printStackTrace();
			}
			this.channel = null;
		}
		if (session != null) {

			try {
				session.disconnect();
			} catch (Exception e) {
				e.printStackTrace();
			}
			session = null;
		}
	}

	public void Connect() throws Exception {
		try {
			DisConnect();
			
			JSch jsch = new JSch();
			Boolean haveKeyFile = false;

			haveKeyFile = identityInfo.PrivateKey != null
					&& !identityInfo.PrivateKey.isEmpty();
			if (haveKeyFile) {
				Logger.Log(OTermEnvironment.Instance()
						.getIdentityInfo().PrivateKey);
				
				ContentIdentity contentIdentity = new ContentIdentity(
						jsch,
						"ssh_private_key",
						OTermEnvironment.Instance().getIdentityInfo().PrivateKey
								.getBytes("UTF-8"), null);
				jsch.addIdentity(contentIdentity,
						identityInfo.Password.getBytes("UTF-8"));
			}

			String host = identityInfo.HostName;
			String user = identityInfo.UserName;
			String port = identityInfo.Port;
			session = jsch.getSession(user, host, Integer.valueOf(port));

			if (!haveKeyFile) {
				String passwd = identityInfo.Password;
				session.setPassword(passwd);
			}

			UserInfo ui = new MyUserInfo() {
				public void showMessage(String message) {
					UUID promptId = UUID.randomUUID();
					Command command = new Command(promptId.toString(), "Prompt", message);
					OTermEnvironment.Instance().getCommandPusher().getCommandQueue().add(command);
				}

				public boolean promptYesNo(String message) {
					UUID promptId = UUID.randomUUID();
					Command command = new Command(promptId.toString(), "Prompt", message);
					OTermEnvironment.Instance().getCommandPusher().getCommandQueue().add(command);
					return true;
				}
			};

			session.setUserInfo(ui);

			session.connect(30000); // making a connection with timeout.
			session.setServerAliveInterval(60000);
			isConnected=true;
		} catch (Exception e) {
			throw e;
		}
	}
}
