package ostc.sh.webconsole;

public class OTermEnvironment {
	static Object object = new Object();
	static OTermEnvironment environment;

	private IdentityInfo identityInfo;
	private SSHConnection sshConnection;

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

	public void setSshConnection(SSHConnection sshConnection) {
		this.sshConnection = sshConnection;
	}

}
