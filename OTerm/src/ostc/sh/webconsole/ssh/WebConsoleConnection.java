package ostc.sh.webconsole.ssh;

import ostc.sh.webconsole.config.GlobalConfig;
import ostc.sh.webconsole.error.NetworkException;

import com.jcraft.jsch.ChannelShell;
import com.jcraft.jsch.JSch;
import com.jcraft.jsch.JSchException;
import com.jcraft.jsch.Session;
import com.jcraft.jsch.UserInfo;

/**
 * 
 * @author andliu
 *
 */
public class WebConsoleConnection implements AutoCloseable {

	private IdentityInfo identityInfo = null;

	private Session session = null;

	public WebConsoleConnection(IdentityInfo identityInfo) {
		this.identityInfo = identityInfo;
	}

	public TerminalShellChannel GetShellChannel() {
		ChannelShell channel;
		try {
			channel = (ChannelShell) session.openChannel("shell");
			channel.setPtyType(GlobalConfig.Instance().getCurrentPtyType());
			// channel.setEnv(name, value);
			TerminalShellChannel terminalShellChannel = new TerminalShellChannel(channel);

			terminalShellChannel.Connect();
			return terminalShellChannel;
		} catch (JSchException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
	public Session GetSession(){
		return session;
	}

	public void Connect() throws NetworkException {
		// TODO Auto-generated method stub

		try {
			JSch jsch = new JSch();
			Boolean haveKeyFile = false;

			haveKeyFile = identityInfo.KeyPath != null
					&& !identityInfo.KeyPath.isEmpty();
			if (haveKeyFile) {
				jsch.addIdentity(identityInfo.KeyPath,identityInfo.Password);
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
			throw new NetworkException("",e);
		}
	}

	@Override
	public void close() throws Exception {
		// TODO Auto-generated method stub
		if(session!=null){
			session.disconnect();
		}
	}

}
