package ostc.sh.webconsole;

import java.util.UUID;

import javax.swing.JApplet;

import ostc.sh.webconsole.command.Command;
import ostc.sh.webconsole.command.CommandExecuter;
import ostc.sh.webconsole.command.CommandResult;

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
	}

	@Override
	public String SetAction(String action, String[] parameters) {
		String id = UUID.randomUUID().toString();

		if (parameters.length == 0) {
			return id;
		}
		if (parameters.length == 1) {

			commandExecuter.getCommandQueue().add(
					new Command(id, action, parameters[0]));
		}
		if (parameters.length == 2) {
			commandExecuter.getCommandQueue().add(
					new Command(id, action, parameters[0], parameters[1]));
		}
		if (parameters.length == 3) {
			commandExecuter.getCommandQueue().add(
					new Command(id, action, parameters[0], parameters[1], parameters[2]));
		}
		return id;
	}

	@Override
	public Command TakeFrontCommand() {
		System.err.println("TakeFrontCommand");
		Command commandForFront = OTermEnvironment.Instance()
				.getCommandPusher().getCommandQueue().poll();
		System.err.println("TakeFrontCommand2");
		return commandForFront;
	}

	@Override
	public CommandResult TakeCommandResult() {
		System.err.println("TakeCommandResult");
		CommandResult commandForFront = OTermEnvironment.Instance()
				.getCommandPusher().getCommandResultQueue().poll();
		System.err.println("TakeCommandResult2");
		return commandForFront;
	}

	@Override
	public String TakeOutput() {
		return OTermEnvironment.Instance().GetOutput();
	}
}
