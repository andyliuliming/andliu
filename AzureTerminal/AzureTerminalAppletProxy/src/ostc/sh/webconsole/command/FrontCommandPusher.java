package ostc.sh.webconsole.command;

import java.util.HashMap;
import java.util.Queue;
import java.util.concurrent.ArrayBlockingQueue;

public class FrontCommandPusher {
	private ArrayBlockingQueue<Command> commandQueue = null;

	private HashMap<String, String> frontExecutionResult = null;

	public FrontCommandPusher() {
		commandQueue = new ArrayBlockingQueue<Command>(1000);
		frontExecutionResult = new HashMap<String, String>();
	}

	public Queue<Command> getCommandQueue() {
		return commandQueue;
	}

	public HashMap<String, String> getFrontExecutionResult() {
		return frontExecutionResult;
	}
}
