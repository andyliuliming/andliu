package ostc.sh.webconsole;

import java.awt.event.WindowEvent;
import java.awt.event.WindowListener;
import java.io.BufferedWriter;
import java.io.IOException;
import java.net.URL;
import java.util.Queue;
import java.util.concurrent.ArrayBlockingQueue;

import javax.swing.ImageIcon;
import javax.swing.WindowConstants;

import ostc.sh.webconsole.filecopy.SCPDialog;
import ostc.sh.webconsole.keypair.KeyGenerator;
import ostc.sh.webconsole.keypair.KeyPairDialog;

import com.jcraft.jsch.JSchException;

public class CommandExecuter implements Runnable {

	private ArrayBlockingQueue<Command> commandQueue;

	public CommandExecuter() {

		setCommandQueue(new ArrayBlockingQueue<Command>(1000));
	}

	@Override
	public void run() {
		// TODO Auto-generated method stub
		while (true) {
			try {
				Command current = commandQueue.take();
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
							BufferedWriter writer = OTermEnvironment.Instance()
									.getShellOutputStream();
							writer.write(current.getParameter());
							writer.flush();
						} catch (IOException e) {
							// TODO Auto-generated catch block
							e.printStackTrace();
						}
						break;

					case Actions.SetIdentityFilePath:
						OTermEnvironment.Instance().getIdentityInfo().KeyPath = current
						.getParameter();
						break;
					case Actions.SetSize:
						String[] widthAndHeight=current.getParameter().split(":");
						int width=Integer.valueOf(widthAndHeight[0]);
						int height=Integer.valueOf(widthAndHeight[1]);
						OTermEnvironment.Instance().getSshConnection().GetChannelShell().setPtySize(height, width, 0, 0);
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
						keyPairDialog.addWindowListener(new WindowListener() {

							@Override
							public void windowOpened(WindowEvent e) {
								// TODO Auto-generated method stub

							}

							@Override
							public void windowClosing(WindowEvent e) {
								// TODO Auto-generated method stub
								char[] passphrase = keyPairDialog
										.getPassphrase();
								byte[] passphraseByteArray = new String(
										passphrase).getBytes();
								KeyGenerator generator = new KeyGenerator();
								generator.Generator(
										keyPairDialog.getPrivateKeyFile(),
										keyPairDialog.getPublicKeyFile(),
										passphraseByteArray);
							}

							@Override
							public void windowClosed(WindowEvent e) {
								// TODO Auto-generated method stub
							}

							@Override
							public void windowIconified(WindowEvent e) {
								// TODO Auto-generated method stub

							}

							@Override
							public void windowDeiconified(WindowEvent e) {
								// TODO Auto-generated method stub

							}

							@Override
							public void windowActivated(WindowEvent e) {
								// TODO Auto-generated method stub

							}

							@Override
							public void windowDeactivated(WindowEvent e) {
								// TODO Auto-generated method stub

							}

						});
						break;
					}
				}
			} catch (InterruptedException | JSchException e) {
				// TODO Auto-generated catch block
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
