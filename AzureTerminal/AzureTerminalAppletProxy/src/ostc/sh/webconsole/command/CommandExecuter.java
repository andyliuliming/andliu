package ostc.sh.webconsole.command;

import java.io.BufferedWriter;
import java.io.IOException;
import java.io.OutputStream;
import java.net.ConnectException;
import java.net.URL;
import java.net.UnknownHostException;
import java.util.Queue;
import java.util.concurrent.ArrayBlockingQueue;

import javax.swing.ImageIcon;
import javax.swing.WindowConstants;

import ostc.sh.webconsole.OTermEnvironment;
import ostc.sh.webconsole.filecopy.SCPDialog;
import ostc.sh.webconsole.keypair.KeyGenerator;
import ostc.sh.webconsole.keypair.KeyPairDialog;
import ostc.sh.webconsole.ssh.OutputFlusher;
import ostc.sh.webconsole.util.ClipBoardUtil;
import ostc.sh.webconsole.util.Logger;

import com.jcraft.jsch.JSchException;
import com.jcraft.jsch.KeyPair;

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
									new String[]{"ongoing"});
							OTermEnvironment.Instance().getCommandPusher()
									.getCommandQueue().add(command);
							Logger.Log("trying to connect");
							
							Logger.Log(OTermEnvironment.Instance().getIdentityInfo());
							OTermEnvironment.Instance().getSshConnection()
									.Connect();
							
							OutputFlusher outputFlusher = new OutputFlusher();
							Thread outputFlusherThread = new Thread(outputFlusher);
							outputFlusherThread.start();
							
							Command command2 = new Command("LoginStatusChange",
									new String[]{"success"});
							OTermEnvironment.Instance().getCommandPusher()
									.getCommandQueue().add(command2);
						} catch (JSchException e) {
							Command command = new Command("LoginStatusChange",
									new String[]{""});
							if (e.getCause() instanceof UnknownHostException)
								command.getParameters()[0]=("unknownhost");
							else if (e.getCause() instanceof ConnectException) {
								command.getParameters()[0]=("connectfailed");
							} else {
								command.getParameters()[0]=("wrongusername");
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
						OTermEnvironment.Instance().getIdentityInfo().Port = current.getParameters()[0];
						break;
					case Actions.SetUserName:
						OTermEnvironment.Instance().getIdentityInfo().UserName = current.getParameters()[0];
						break;
					case Actions.SetPassword:
						OTermEnvironment.Instance().getIdentityInfo().Password = current.getParameters()[0];
						break;
					case Actions.SetHostName:
						OTermEnvironment.Instance().getIdentityInfo().HostName = current.getParameters()[0];
						break;
					case Actions.Input:
						try {
							BufferedWriter writer = OTermEnvironment.Instance()
									.getSshConnection().getShellOutputStream();
							writer.write(current.getParameters()[0]);
							writer.flush();
						} catch (IOException e) {
							e.printStackTrace();
						}
						break;
					case Actions.SetPrivateKey:
						OTermEnvironment.Instance().getIdentityInfo().PrivateKey = current.getParameters()[0];;
						break;
					case Actions.SetSize:
						String[] widthAndHeight = current.getParameters()[0].split(
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
					case Actions.GeneratePrivateKey:
						try{
							String privateKeyLocation=current.getParameters()[0];
							String publicKeyLocation=current.getParameters()[1];
							String passphrase = current.getParameters()[2];
							
							byte[] passphraseByteArray = passphrase.getBytes();
							KeyGenerator generator = new KeyGenerator();
							KeyPair keyPairGenerated = generator.Generator(privateKeyLocation, publicKeyLocation,
									passphraseByteArray);
							OutputStream output = new OutputStream() {
								private StringBuilder string = new StringBuilder();
	
								@Override
								public void write(int b) throws IOException {
									this.string.append((char) b);
								}
	
								public String toString() {
									return this.string.toString();
								}
							};
							keyPairGenerated.writePublicKey(output, "public key generated by azure terminal.");
	
							String publicKeyResult = new String(output.toString());
							ClipBoardUtil.setClipboardContents(publicKeyResult);
							CommandResult commandResult =new CommandResult(current.getId(),current.getAction(),new String[]{"success"});
							
							OTermEnvironment.Instance().getCommandPusher().getCommandResultQueue().add(commandResult);
						}catch(Exception e){
							CommandResult commandResult =new CommandResult(current.getId(),current.getAction(),new String[]{"failed"});							
							OTermEnvironment.Instance().getCommandPusher().getCommandResultQueue().add(commandResult);
						}
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
