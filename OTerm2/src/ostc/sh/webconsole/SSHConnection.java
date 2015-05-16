package ostc.sh.webconsole;

import com.jcraft.jsch.ChannelShell;
import com.jcraft.jsch.JSch;
import com.jcraft.jsch.JSchException;
import com.jcraft.jsch.Session;
import com.jcraft.jsch.UserInfo;

public class SSHConnection {

	IdentityInfo identityInfo;
	private Session session;
	private ChannelShell channel;

	public SSHConnection(IdentityInfo identityInfo) {
		this.identityInfo = identityInfo;
	}

	public ChannelShell GetChannelShell() throws JSchException {
		if (channel == null) {
			channel = (ChannelShell) session.openChannel("shell");
			channel.setPtyType("xterm");
			channel.connect();
		}
		return channel;
	}

	public void Connect() throws JSchException {
		try {
			JSch jsch = new JSch();
			Boolean haveKeyFile = false;

			haveKeyFile = identityInfo.KeyPath != null
					&& !identityInfo.KeyPath.isEmpty();
			if (haveKeyFile) {
				jsch.addIdentity(identityInfo.KeyPath, identityInfo.Password);
			}

			String host = identityInfo.HostName;
			String user = identityInfo.UserName;
			session = jsch.getSession(user, host, 22);

			if (!haveKeyFile) {
				String passwd = identityInfo.Password;
				session.setPassword(passwd);
			}

			UserInfo ui = new MyUserInfo() {
				public void showMessage(String message) {
					// JOptionPane.showMessageDialog(null, message);
				}

				public boolean promptYesNo(String message) {
					return true;
					/*
					 * Object[] options = { "yes", "no" }; int foo =
					 * JOptionPane.showOptionDialog(null, message, "Warning",
					 * JOptionPane.DEFAULT_OPTION, JOptionPane.WARNING_MESSAGE,
					 * null, options, options[0]); return foo == 0;
					 */
				}
			};

			session.setUserInfo(ui);

			session.connect(30000); // making a connection with timeout.
			session.setServerAliveInterval(60000);

		} catch (JSchException e) {
			throw e;
		}
	}
}
