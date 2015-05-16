package ostc.sh.webconsole;

import javax.swing.JApplet;

public class OTermApplet extends JApplet implements WebFacade {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	/**
	 * Create the applet.
	 */
	public OTermApplet() {
		
	}

	@Override
	public void SetUserName(String userName) {
		// TODO Auto-generated method stub
		System.err.println("set the user name" + userName);
	}

	@Override
	public void SetPassword(String passWord) {
		// TODO Auto-generated method stub
		System.err.println("set the password ");
	}

	@Override
	public void SetAction(String action, String parameter) {
		// TODO Auto-generated method stub
		System.err.println("set action " + action);
	}

}
