package ostc.sh.webconsole;

import javax.swing.JApplet;

import ostc.sh.webconsole.command.Command;
import ostc.sh.webconsole.command.CommandExecuter;
import ostc.sh.webconsole.ssh.OutputFlusher;

public class OTermApplet extends JApplet implements WebFacade {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	/**
	 * Create the applet.
	 */

	private CommandExecuter commandExecuter;

	public OTermApplet() {
		commandExecuter = new CommandExecuter();
		Thread commandExecuterThread = new Thread(commandExecuter);
		commandExecuterThread.start();

		OutputFlusher outputFlusher = new OutputFlusher();
		Thread outputFlusherThread = new Thread(outputFlusher);
		outputFlusherThread.start();
	}

	@Override
	public void SetAction(String action, String parameter) {
		commandExecuter.getCommandQueue().add(new Command(action, parameter));
	}

	@Override
	public String TakeFrontCommand() {
		Command commandForFront = OTermEnvironment.Instance()
				.getCommandPusher().getCommandQueue().poll();
		if (commandForFront != null) {
			return commandForFront.getId() + ":" + commandForFront.getAction()
					+ ":" + commandForFront.getParameter();
		}
		return null;
	}

	@Override
	public void SetFrontCommandResult(String id, String result) {
		if (!OTermEnvironment.Instance().getCommandPusher()
				.getFrontExecutionResult().containsKey(id)) {
			OTermEnvironment.Instance().getCommandPusher()
					.getFrontExecutionResult().put(id, result);
		} else {
			OTermEnvironment.Instance().getCommandPusher()
					.getFrontExecutionResult().replace(id, result);
		}
	}

	@Override
	public String TakeOutput() {
		// TODO Auto-generated method stub
		return OTermEnvironment.Instance().GetOutput();
	}

}
