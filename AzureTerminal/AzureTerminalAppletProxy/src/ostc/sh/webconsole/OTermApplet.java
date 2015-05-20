package ostc.sh.webconsole;

import javax.swing.JApplet;
import ostc.sh.webconsole.command.Command;
import ostc.sh.webconsole.command.CommandExecuter;
import ostc.sh.webconsole.ssh.OutputFlusher;
import com.jcraft.jsch.JSchException;
import com.jcraft.jsch.Session;

public class OTermApplet extends JApplet implements WebFacade {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	/**
	 * Create the applet.
	 */
	public OTermApplet() {
		commandExecuter = new CommandExecuter();
		Thread commandExecuterThread = new Thread(commandExecuter);
		commandExecuterThread.start();

		OutputFlusher outputFlusher = new OutputFlusher();
		Thread outputFlusherThread = new Thread(outputFlusher);
		outputFlusherThread.start();
	}
	
	
	public StringBuilder sb;
	private CommandExecuter commandExecuter;

	@Override
	public void SetAction(String action, String parameter) {
		commandExecuter.getCommandQueue().add(new Command(action, parameter));
	}

	@Override
	public String GetOutput() {
		return OTermEnvironment.Instance().GetOutput();
	}

	@Override
	public String getSignedInStatus() {
		return OTermEnvironment.Instance().getSignedInStatus();
	}

	@Override
	public boolean IsConnected() {
		Session session = OTermEnvironment.Instance().getSshConnection()
				.getSession();
		if (session != null) {
			try {
				return OTermEnvironment.Instance().getSshConnection()
						.GetChannelShell().isConnected();
			} catch (JSchException e) {
				e.printStackTrace();
				return false;
			}
		}
		return false;
	}

}
