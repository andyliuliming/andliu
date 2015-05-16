package ostc.sh.webconsole;

import java.util.Queue;
import java.util.concurrent.ArrayBlockingQueue;

import com.jcraft.jsch.JSchException;

public class CommandExecuter implements Runnable {

	private Queue<Command> commandQueue;

	public CommandExecuter() {

		setCommandQueue(new ArrayBlockingQueue<Command>(1000));
	}

	@Override
	public void run() {
		// TODO Auto-generated method stub
		while (true) {
			try {
				Command current = commandQueue.poll();
				if (current != null) {
					switch (current.getAction()) {
					case Actions.Login:
						OTermEnvironment.Instance().getSshConnection()
								.Connect();
						break;
					case Actions.SetUserName:
						OTermEnvironment.Instance().getIdentityInfo().UserName = current
								.getParameter();
						break;
					case Actions.SetPassword:
						OTermEnvironment.Instance().getIdentityInfo().Password = current
								.getParameter();
						break;
					}
				}
				Thread.sleep(1000);
			} catch (InterruptedException | JSchException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}

	public Queue<Command> getCommandQueue() {
		return commandQueue;
	}

	public void setCommandQueue(Queue<Command> commandQueue) {
		this.commandQueue = commandQueue;
	}

}
