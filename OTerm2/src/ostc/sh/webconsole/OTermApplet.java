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
		commandExecuter = new CommandExecuter();
		Thread commandExecuterThread = new Thread(commandExecuter);
		commandExecuterThread.start();
	}

	public StringBuilder sb;
	private CommandExecuter commandExecuter;

	@Override
	public void SetAction(String action, String parameter) {
		// TODO Auto-generated method stub
		System.err.println("set action " + action);
		commandExecuter.getCommandQueue().add(new Command(action, parameter));
	}

	
	@Override
	public String GetOutput() {
		// TODO Auto-generated method stub
		return "a";
	}

}
