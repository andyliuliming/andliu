package ostc.sh.webconsole;

import java.io.BufferedWriter;
import java.io.IOException;
import java.util.Queue;
import java.util.concurrent.ArrayBlockingQueue;

import ostc.sh.webconsole.filecopy.SCPDialog;

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
						OTermEnvironment.Instance().setSignedIn(true);
						break;
					case Actions.SetUserName:
						OTermEnvironment.Instance().getIdentityInfo().UserName = current
								.getParameter();
						break;
					case Actions.SetPassword:
						OTermEnvironment.Instance().getIdentityInfo().Password = current
								.getParameter();
						break;
					case Actions.SetHostName:
						OTermEnvironment.Instance().getIdentityInfo().HostName = current
								.getParameter();
						break;
					case Actions.Input:
						try {
							BufferedWriter writer = OTermEnvironment.Instance().getShellOutputStream();
							writer.write(current.getParameter());
							writer.flush();
						} catch (IOException e) {
							// TODO Auto-generated catch block
							e.printStackTrace();
						}
						break;
					case Actions.CopyFile:
						SCPDialog dialog = new SCPDialog();
						dialog.setLocationRelativeTo(null);
						dialog.setVisible(true);
						break;
					}
				}
				Thread.sleep(50);
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
