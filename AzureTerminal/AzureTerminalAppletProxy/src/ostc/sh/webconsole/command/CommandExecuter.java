package ostc.sh.webconsole.command;

import java.awt.Frame;
import java.io.BufferedWriter;
import java.io.File;
import java.io.IOException;
import java.io.OutputStream;
import java.net.ConnectException;
import java.net.UnknownHostException;
import java.util.List;
import java.util.Queue;
import java.util.concurrent.ArrayBlockingQueue;

import javax.swing.JFileChooser;

import ostc.sh.webconsole.OTermEnvironment;
import ostc.sh.webconsole.filecopy.FileCopyUtil;
import ostc.sh.webconsole.keypair.KeyGenerator;
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
				CommandResult commandResult = null;
				if (current != null) {
					switch (current.getAction()) {
					case Actions.Login:
						try {
							Command command = new Command("LoginStatusChange",
									new String[] { "ongoing" });
							OTermEnvironment.Instance().getCommandPusher()
									.getCommandQueue().add(command);
							Logger.Log("trying to connect");

							Logger.Log(OTermEnvironment.Instance()
									.getIdentityInfo());
							OTermEnvironment.Instance().getSshConnection()
									.Connect();

							OutputFlusher outputFlusher = new OutputFlusher();
							Thread outputFlusherThread = new Thread(
									outputFlusher);
							outputFlusherThread.start();

							Command command2 = new Command("LoginStatusChange",
									new String[] { "success" });
							OTermEnvironment.Instance().getCommandPusher()
									.getCommandQueue().add(command2);
						} catch (JSchException e) {
							Command command = new Command("LoginStatusChange",
									new String[] { "" });
							if (e.getCause() instanceof UnknownHostException)
								command.getParameters()[0] = ("unknownhost");
							else if (e.getCause() instanceof ConnectException) {
								command.getParameters()[0] = ("connectfailed");
							} else {
								command.getParameters()[0] = ("wrongusername");
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
								.getParameters()[0];
						break;
					case Actions.SetUserName:
						OTermEnvironment.Instance().getIdentityInfo().UserName = current
								.getParameters()[0];
						break;
					case Actions.SetPassword:
						OTermEnvironment.Instance().getIdentityInfo().Password = current
								.getParameters()[0];
						break;
					case Actions.SetHostName:
						OTermEnvironment.Instance().getIdentityInfo().HostName = current
								.getParameters()[0];
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
						OTermEnvironment.Instance().getIdentityInfo().PrivateKey = current
								.getParameters()[0];
						;
						break;
					case Actions.SetSize:
						String[] widthAndHeight = current.getParameters()[0]
								.split(":");
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
					case Actions.ListCurrentLocalFolder:
						String currentLocalFolder = current.getParameters()[0];
						List<String> localFolders = FileCopyUtil
								.ListLocalFolder(currentLocalFolder);
						Logger.Log("the local folders size is "
								+ localFolders.size());
						String[] currentLocalFolderArray = new String[localFolders
								.size()];
						localFolders.toArray(currentLocalFolderArray);
						commandResult = new CommandResult(current.getId(),
								current.getAction(), currentLocalFolderArray);
						OTermEnvironment.Instance().getCommandPusher()
								.getCommandResultQueue().add(commandResult);
						break;
					case Actions.ListCurrentRemoteFolder:
						String currentRemoteFolder = current.getParameters()[0];
						List<String> remoteFolders = FileCopyUtil
								.ListRemoteFolder(currentRemoteFolder);
						String[] remoteFolderArray = new String[remoteFolders
								.size()];
						remoteFolders.toArray(remoteFolderArray);
						commandResult = new CommandResult(current.getId(),
								current.getAction(), remoteFolderArray);
						OTermEnvironment.Instance().getCommandPusher()
								.getCommandResultQueue().add(commandResult);
						break;
					case Actions.ListLocalRootFolder:
						List<String> localRootFolders = FileCopyUtil
								.ListLocalFolder("");
						Logger.Log("the local folders size is "
								+ localRootFolders.size());
						String[] localRootFolderArray = new String[localRootFolders
								.size()];
						localRootFolders.toArray(localRootFolderArray);
						commandResult = new CommandResult(current.getId(),
								current.getAction(), localRootFolderArray);
						OTermEnvironment.Instance().getCommandPusher()
								.getCommandResultQueue().add(commandResult);
						break;
					case Actions.SelectCurrentLocalFolder:
						List<String> localRootFoldersToSelect = FileCopyUtil
								.ListLocalFolder("");
						Logger.Log("the local folders size is "
								+ localRootFoldersToSelect.size());
						String[] localRootFolderToSelectArray = new String[localRootFoldersToSelect
								.size()];
						localRootFoldersToSelect
								.toArray(localRootFolderToSelectArray);
						commandResult = new CommandResult(current.getId(),
								current.getAction(),
								localRootFolderToSelectArray);
						OTermEnvironment.Instance().getCommandPusher()
								.getCommandResultQueue().add(commandResult);
						break;
					case Actions.ListRemoteRootFolder:
						List<String> remoteRootFolders = FileCopyUtil
								.ListRemoteFolder("/");
						String[] remoteRootFolderArray = new String[remoteRootFolders
								.size()];
						remoteRootFolders.toArray(remoteRootFolderArray);
						for (int i = 0; i < remoteRootFolderArray.length; i++) {
							remoteRootFolderArray[i] = 'D' + "/"
									+ remoteRootFolderArray[i].substring(1);
						}
						commandResult = new CommandResult(current.getId(),
								current.getAction(), remoteRootFolderArray);
						OTermEnvironment.Instance().getCommandPusher()
								.getCommandResultQueue().add(commandResult);
						break;
					case Actions.CopyToLocal:
						Logger.Log("copy to local "
								+ current.getParameters()[0] + " "
								+ current.getParameters()[1]);
						try {
							FileCopyUtil.CopyFrom(current.getParameters()[0],
									current.getParameters()[1],
									current.getParameters()[2]);
							commandResult = new CommandResult(current.getId(),
									current.getAction(),
									new String[] { "success" });
						} catch (Exception e) {
							commandResult = new CommandResult(current.getId(),
									current.getAction(),
									new String[] { "failed" });
						}

						OTermEnvironment.Instance().getCommandPusher()
								.getCommandResultQueue().add(commandResult);
						break;
					case Actions.CopyToRemote:
						Logger.Log("copy to remote "
								+ current.getParameters()[0] + " "
								+ current.getParameters()[1]);
						try {
							FileCopyUtil.CopyTo(current.getParameters()[0],
									current.getParameters()[1],
									current.getParameters()[2]);
							commandResult = new CommandResult(current.getId(),
									current.getAction(),
									new String[] { "success" });
						} catch (Exception e) {
							commandResult = new CommandResult(current.getId(),
									current.getAction(),
									new String[] { "failed" });
						}
						OTermEnvironment.Instance().getCommandPusher()
								.getCommandResultQueue().add(commandResult);
						break;
					case Actions.SelectFolder:
						Frame frame = null;
						JFileChooser j = new JFileChooser();
						j.setFileSelectionMode(JFileChooser.DIRECTORIES_ONLY);
						Integer opt = j.showSaveDialog(frame);
						if (opt == JFileChooser.APPROVE_OPTION) {
							File yourFolder = j.getSelectedFile();
							commandResult = new CommandResult(
									current.getId(),
									current.getAction(),
									new String[] { yourFolder.getAbsolutePath() });

							OTermEnvironment.Instance().getCommandPusher()
									.getCommandResultQueue().add(commandResult);
							Logger.Log("command result pushed"
									+ commandResult.getId());
						}

						break;
					case Actions.GeneratePrivateKey:
						try {
							String privateKeyFolder = current.getParameters()[0];
							String privateKeyFilename = "prvkey";
							String publicKeyFileName = "pubkey";
							String publicKeyExtension = ".pub";

							File privateKeyFile = new File(privateKeyFolder,
									privateKeyFilename);
							File publicKeyFile = new File(privateKeyFolder,
									publicKeyFileName + publicKeyExtension);
							int i = 0;
							while (privateKeyFile.exists()
									|| publicKeyFile.exists()) {
								privateKeyFile = new File(privateKeyFolder,
										privateKeyFilename + "(" + (++i) + ")");
								publicKeyFile = new File(privateKeyFolder,
										publicKeyFileName + "(" + (i) + ")"
												+ publicKeyExtension);
							}
							String passphrase = current.getParameters()[1];

							if (passphrase == null) {
								passphrase = "";
							}
							byte[] passphraseByteArray = passphrase.getBytes();
							KeyGenerator generator = new KeyGenerator();
							KeyPair keyPairGenerated = generator.Generator(
									privateKeyFile.getAbsolutePath(),
									publicKeyFile.getAbsolutePath(),
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
							keyPairGenerated.writePublicKey(output,
									"public key generated by azure terminal.");

							String publicKeyResult = new String(
									output.toString());
							ClipBoardUtil.setClipboardContents(publicKeyResult);

							commandResult = new CommandResult(current.getId(),
									current.getAction(), new String[] {
											"success",
											privateKeyFile.getAbsolutePath(),
											publicKeyFile.getAbsolutePath() });

							OTermEnvironment.Instance().getCommandPusher()
									.getCommandResultQueue().add(commandResult);
						} catch (Exception e) {
							Logger.Log(e.toString());
							commandResult = new CommandResult(current.getId(),
									current.getAction(), new String[] {
											"failed", e.toString() });
							OTermEnvironment.Instance().getCommandPusher()
									.getCommandResultQueue().add(commandResult);
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
