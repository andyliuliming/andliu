package ostc.sh.webconsole.command;

import java.io.BufferedWriter;
import java.io.IOException;
import java.net.URL;
import java.util.Queue;
import java.util.concurrent.ArrayBlockingQueue;

import javax.swing.ImageIcon;
import javax.swing.WindowConstants;

import ostc.sh.webconsole.OTermEnvironment;
import ostc.sh.webconsole.filecopy.SCPDialog;
import ostc.sh.webconsole.keypair.KeyDialogWindowLisener;
import ostc.sh.webconsole.keypair.KeyPairDialog;

public class CommandExecuter implements Runnable {

	private ArrayBlockingQueue<Command> commandQueue = null;

	public CommandExecuter() {
		setCommandQueue(new ArrayBlockingQueue<Command>(1000));
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
							OTermEnvironment.Instance().setSignedInStatus(
									"ongoing");
							OTermEnvironment.Instance().getSshConnection()
									.Connect();
							OTermEnvironment.Instance().setSignedInStatus(
									"success");
						} catch (Exception e) {
							OTermEnvironment.Instance().setSignedInStatus(
									"failed");
						}
						break;
					case Actions.SignOut:
						OTermEnvironment.Instance().getSshConnection().ClearUp();
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
						if (OTermEnvironment.Instance().getSignedInStatus() != null
								&& OTermEnvironment.Instance()
										.getSignedInStatus().equals("success")) {
							System.err.println("set size again " + width + " "
									+ height);
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
						keyPairDialog.setSize(500, 300);
						keyPairDialog.setLocationRelativeTo(null);
						keyPairDialog.setVisible(true);
						keyPairDialog.addWindowListener(new KeyDialogWindowLisener(keyPairDialog));
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

	public void setCommandQueue(ArrayBlockingQueue<Command> commandQueue) {
		this.commandQueue = commandQueue;
	}

}
