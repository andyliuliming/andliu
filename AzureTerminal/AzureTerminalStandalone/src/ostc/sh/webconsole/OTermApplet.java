package ostc.sh.webconsole;

import java.awt.Container;
import java.awt.KeyEventDispatcher;
import java.awt.KeyboardFocusManager;

import javax.swing.JApplet;

import ostc.sh.webconsole.config.GlobalConfig;
import ostc.sh.webconsole.config.Palette;
import ostc.sh.webconsole.error.INetworkIssueCallback;
import ostc.sh.webconsole.error.NetworkException;
import ostc.sh.webconsole.error.NetworkIssueNotifier;
import ostc.sh.webconsole.interfaces.IConnectionCallback;
import ostc.sh.webconsole.oauth.SignInVerifier;
import ostc.sh.webconsole.ssh.IdentityInfo;
import ostc.sh.webconsole.ssh.WebConsoleConnection;
import ostc.sh.webconsole.terminals.TerminalWithMenuPanel;

public class OTermApplet extends JApplet implements IConnectionCallback ,INetworkIssueCallback{	
	private static final long serialVersionUID = 1L;
	private SignInPanel signInPanel = null;
	private IdentityInfo identityInfo = null;
	private WebConsoleConnection connection = null;
	private TerminalWithMenuPanel terminal = null;
	private String currentLocation=null;
	private String token;

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	private float zoom = 1;
	
	/**
	 * Create the applet.
	 */
	public OTermApplet() {
		JumpToSignInPage();
		refreshZoom();
		NetworkIssueNotifier.Instance().Register(this);				
	}
	
	private void refreshZoom(){
		System.err.println("PRINT ZOOM:"+zoom);
		if(this.signInPanel!=null){
			this.signInPanel.SetZoom(zoom);
		}
		if(this.terminal!=null){
			this.terminal.SetZoom(zoom);
		}
		GlobalConfig.Instance().SetZoom(zoom);
	}
	public void SetZoom(float zoom){
		this.zoom = zoom;
		refreshZoom();
	}
	
	private void JumpToSignInPage(){
		if (identityInfo == null) {
			identityInfo = new IdentityInfo();
		}
		this.connection = new WebConsoleConnection(identityInfo);
		if(signInPanel != null){
			this.remove(signInPanel);
		}

		signInPanel = new SignInPanel(this, connection);
		signInPanel.SetIdenityInfo(identityInfo);
		signInPanel.setBackground(Palette.MainPageBackground);
		signInPanel.SetZoom(this.zoom);
		if (terminal != null) {
			try {
				this.connection.close();
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			getContentPane().remove(terminal);
		}
		
		add(signInPanel);
		validate();
	}
	
	private void StartTheWhiteListCheck(){		
		//wait for 10 seconds
		
		Thread thread = new Thread(new Runnable(){

			@Override
			public void run() {
				while (true) {
					// TODO Auto-generated method stub
					SignInVerifier verifier = new SignInVerifier();

					// wait for the token
					if (token != null) {
						if (verifier.InWhiteList(token, currentLocation
								+ "/whitelist.txt")) {
							JumpToSignInPage();
							refreshZoom();
							break;
						}
					}
					try {
						Thread.sleep(2000);
					} catch (InterruptedException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
				}
			}
			
		});
		thread.start();
	}
	
	@Override
	public void init() {
		if (!GlobalConfig.Instance().isDebug()) {
			try {
			currentLocation = getDocumentBase().getHost()
					+ getDocumentBase().getPath();
			currentLocation=currentLocation.substring(0,currentLocation.lastIndexOf('/'));

			String currentQuery = getDocumentBase().getQuery();
			PortalParameter portalParameter = new PortalParameter(currentQuery);
			
				identityInfo.HostName = portalParameter.GetHostName();
				identityInfo.UserName = portalParameter.GetUserName();
				this.signInPanel.SetIdenityInfo(identityInfo);
			} catch (Exception e) {
				e.printStackTrace();
			}			

			/*StartTheWhiteListCheck();	*/
		} else {
			identityInfo.HostName = "10.156.57.169";
			identityInfo.UserName = "andy";
			identityInfo.Password = "andy";

			try {
				this.connection.Connect();
				this.SignedIn();
			} catch (NetworkException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				NetworkIssueNotifier.Instance().NotifyAll();
			}
		}
		
		
		Container topParent = null;
		Container parent = this;
		// The natural thing would be to call getParent() until it returns
		// null, but then you would be looping for a long time, since
		// PluginEmbeddedFrame's getParent() returns itself.
		for (int k = 0; k < 10; k++) {
			topParent = parent;
			parent = parent.getParent();
			if (parent == null)
			{
				break;
			}
		}

		// If topParent isn't a KeyEventDispatcher then we must be in some
		// Plugin version that doesn't need the workaround.
	
		if (topParent instanceof KeyEventDispatcher) {
			KeyEventDispatcher ked = (KeyEventDispatcher) topParent;
			KeyboardFocusManager kfm = KeyboardFocusManager.getCurrentKeyboardFocusManager();
			// You have to remove it twice, otherwise the problem isn't
			// fixed
			kfm.removeKeyEventDispatcher(ked);
			kfm.removeKeyEventDispatcher(ked);
		}
	}
	
	//TerminalShellChannel shellChannel=null;
	public void SignedIn() {
		this.remove(signInPanel);
		
		terminal = new TerminalWithMenuPanel();
		this.add(terminal);

		terminal.Initialize(this.connection);
		// add the menu
		refreshZoom();
		validate();
		terminal.requestFocus();
	}

	@Override
	public void NetworkError() {
		JumpToSignInPage();
	}
}
