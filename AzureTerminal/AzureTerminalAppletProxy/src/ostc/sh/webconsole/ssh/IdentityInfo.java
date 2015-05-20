package ostc.sh.webconsole.ssh;

/**
 * 
 * @author andliu
 * 
 */
public class IdentityInfo {
	public IdentityInfo() {
		this.HostName = "";
		this.UserName = "";
		this.Password = "";
		this.PrivateKey = "";
		this.Port = "";
	}

	public String Port;
	public String HostName;
	public String PrivateKey;
	public String PublicKey;
	public String UserName;
	public String Password;
}
