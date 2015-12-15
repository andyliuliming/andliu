package ostc.sh.webconsole;

import ostc.sh.webconsole.command.Command;
import ostc.sh.webconsole.command.CommandResult;

public interface WebFacade {
	public Command TakeFrontCommand();

	public CommandResult TakeCommandResult();
	
	public String TakeOutput();

	String SetAction(String action, String[] parameter);
}
