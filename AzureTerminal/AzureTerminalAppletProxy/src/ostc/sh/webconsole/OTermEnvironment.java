package ostc.sh.webconsole;

import ostc.sh.webconsole.command.FrontCommandPusher;
import ostc.sh.webconsole.ssh.IdentityInfo;
import ostc.sh.webconsole.ssh.SSHConnection;

public class OTermEnvironment {
	static Object object = new Object();
	static OTermEnvironment environment = null;

	private IdentityInfo identityInfo = null;
	private SSHConnection sshConnection = null;
	private FrontCommandPusher commandPusher;

	private int width;
	private int height;

	public static OTermEnvironment Instance() {
		if (environment == null) {
			synchronized (object) {
				environment = new OTermEnvironment();
			}
		}
		return environment;
	}

	private OTermEnvironment() {
		identityInfo = new IdentityInfo();
		sshConnection = new SSHConnection(identityInfo);
		commandPusher = new FrontCommandPusher();
		this.width = 120;
		this.height = 40;
	}

	public IdentityInfo getIdentityInfo() {
		return identityInfo;
	}

	public void setIdentityInfo(IdentityInfo identityInfo) {
		this.identityInfo = identityInfo;
	}

	public SSHConnection getSshConnection() {
		return sshConnection;
	}

	private Object outputLock = new Object();
	public StringBuilder sb = new StringBuilder();

	public void AppendOutput(char[] output, int offset, int length) {
		synchronized (outputLock) {
			// StringBuilder sb = new StringBuilder();
			/*
			 * for (int i = 0; i < length; i++) { System.err.print(output[i +
			 * offset]); }
			 */
			sb.append(output, offset, length);
		}
	}

	public String GetOutput() {
		synchronized (outputLock) {
			String output = sb.toString();
			sb = new StringBuilder();

			return output;
		}
	}

	public int getHeight() {
		return height;
	}

	public void setHeight(int height) {
		this.height = height;
	}

	public int getWidth() {
		return width;
	}

	public void setWidth(int width) {
		this.width = width;
	}

	public FrontCommandPusher getCommandPusher() {
		return commandPusher;
	}

}
