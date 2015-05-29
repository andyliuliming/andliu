package ostc.sh.webconsole.command;

import java.io.BufferedWriter;
import java.io.IOException;
import java.net.ConnectException;
import java.net.URL;
import java.net.UnknownHostException;
import java.util.Queue;
import java.util.concurrent.ArrayBlockingQueue;

import javax.swing.ImageIcon;
import javax.swing.WindowConstants;

import ostc.sh.webconsole.OTermEnvironment;
import ostc.sh.webconsole.filecopy.SCPDialog;
import ostc.sh.webconsole.keypair.KeyPairDialog;
import ostc.sh.webconsole.ssh.OutputFlusher;
import ostc.sh.webconsole.util.Logger;

import com.jcraft.jsch.JSchException;

public class CommandExecuter implements Runnable {

	private ArrayBlockingQueue<Command> commandQueue = null;

	public CommandExecuter() {
		commandQueue = new ArrayBlockingQueue<Command>(1000);
	}

	@Override
	public void run() {
		while (true) {
			try {
				Command current = commandQueue.take();
				if (current != null) {
					switch (current.getAction()) {
					case Actions.Login:
						try {
							Command command = new Command("LoginStatusChange",
									"ongoing");
							OTermEnvironment.Instance().getCommandPusher()
									.getCommandQueue().add(command);
							Logger.Log("trying to connect");
							OTermEnvironment.Instance().getSshConnection()
									.Connect();
							
							OutputFlusher outputFlusher = new OutputFlusher();
							Thread outputFlusherThread = new Thread(outputFlusher);
							outputFlusherThread.start();
							
							Command command2 = new Command("LoginStatusChange",
									"success");
							OTermEnvironment.Instance().getCommandPusher()
									.getCommandQueue().add(command2);
						} catch (JSchException e) {
							Command command = new Command("LoginStatusChange",
									"");
							if (e.getCause() instanceof UnknownHostException)
								command.setParameter("unknownhost");
							else if (e.getCause() instanceof ConnectException) {
								command.setParameter("connectfailed");
							} else {
								command.setParameter("wrongusername");
							}
							OTermEnvironment.Instance().getCommandPusher()
									.getCommandQueue().add(command);
						}
						break;
					case Actions.SignOut:
						OTermEnvironment.Instance().getSshConnection()
								.DisConnect();
						OTermEnvironment.Instance().getIdentityInfo().CleanUp();
						break;
					case Actions.SetPort:
						OTermEnvironment.Instance().getIdentityInfo().Port = current
								.getParameter();
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
							BufferedWriter writer = OTermEnvironment.Instance()
									.getSshConnection().getShellOutputStream();
							writer.write(current.getParameter());
							writer.flush();
						} catch (IOException e) {
							e.printStackTrace();
						}
						break;
					case Actions.SetPrivateKey:
						OTermEnvironment.Instance().getIdentityInfo().PrivateKey = current
								.getParameter();
						break;
					case Actions.SetSize:
						String[] widthAndHeight = current.getParameter().split(
								":");
						int width = Integer.valueOf(widthAndHeight[0]);
						int height = Integer.valueOf(widthAndHeight[1]);
						OTermEnvironment.Instance().setWidth(width);
						OTermEnvironment.Instance().setHeight(height);

						Logger.Log("set size again " + width + " " + height);
						if (OTermEnvironment.Instance().getSshConnection()
								.isConnected()) {
							OTermEnvironment.Instance().getSshConnection()
									.GetChannelShell()
									.setPtySize(width, height, 0, 0);
						}
						break;
					case Actions.CopyFile:
						SCPDialog dialog = new SCPDialog();
						dialog.setLocationRelativeTo(null);
						dialog.setVisible(true);
						break;
					case Actions.CertPair:
						final KeyPairDialog keyPairDialog = new KeyPairDialog();

						URL url = CommandExecuter.class
								.getResource("/ostc/sh/webconsole/images/Action.png");
						ImageIcon img = new ImageIcon(url);
						keyPairDialog
								.setDefaultCloseOperation(WindowConstants.DISPOSE_ON_CLOSE);
						keyPairDialog.setIconImage(img.getImage());
						keyPairDialog.setSize(500, 255);
						keyPairDialog.setLocationRelativeTo(null);
						keyPairDialog.setVisible(true);

						break;
					}
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}

	public Queue<Command> getCommandQueue() {
		return commandQueue;
	}

}
