package ostc.sh.webconsole;

import java.applet.Applet;
import java.awt.Color;

/**
 * 
 * @author andliu
 *
 */
public class WebConsoleApplet extends Applet {
	public WebConsoleApplet() {
		setLayout(null);
		
		WebConsoleTerminalTextPane terminal = new WebConsoleTerminalTextPane();
		terminal.setBackground(Color.BLUE);
		terminal.setBounds(10, 11, 744, 531);
		this.add(terminal);
		
		terminal.StartTerminal();
	}

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
}
