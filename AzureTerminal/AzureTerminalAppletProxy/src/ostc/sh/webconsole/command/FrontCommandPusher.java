package ostc.sh.webconsole.command;

import java.util.Queue;
import java.util.concurrent.ArrayBlockingQueue;

public class FrontCommandPusher {
	private ArrayBlockingQueue<Command> commandQueue = null;

	private ArrayBlockingQueue<CommandResult> commandResultQueue = null;

	public FrontCommandPusher() {
		commandQueue = new ArrayBlockingQueue<Command>(1000);
		commandResultQueue = new ArrayBlockingQueue<CommandResult>(1000);
	}

	public Queue<Command> getCommandQueue() {
		return commandQueue;
	}

	public ArrayBlockingQueue<CommandResult> getCommandResultQueue() {
		return commandResultQueue;
	}

}
