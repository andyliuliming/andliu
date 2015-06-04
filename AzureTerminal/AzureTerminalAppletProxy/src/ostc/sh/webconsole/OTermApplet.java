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
		commandExecuter.getCommandQueue().add(
				new Command(id, action, parameters));
		return id;
	}

	@Override
	public Command TakeFrontCommand() {
		Command commandForFront = OTermEnvironment.Instance()
				.getCommandPusher().getCommandQueue().poll();
		return commandForFront;
	}

	@Override
	public CommandResult TakeCommandResult() {
		CommandResult commandForFront = OTermEnvironment.Instance()
				.getCommandPusher().getCommandResultQueue().poll();
		return commandForFront;
	}

	@Override
	public String TakeOutput() {
		return OTermEnvironment.Instance().GetOutput();
	}
}
