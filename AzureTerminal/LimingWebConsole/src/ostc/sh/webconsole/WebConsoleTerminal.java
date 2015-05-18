package ostc.sh.webconsole;

import java.awt.AWTEvent;
import java.awt.Font;
import java.awt.FontMetrics;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.awt.image.BufferedImage;

import javax.swing.JPanel;

import ostc.sh.webconsole.ssh.VT100Keys;
import ostc.sh.webconsole.ssh.WebConsoleConnection;

/**
 * the terminal is responsible to the terminal view. it's used by the
 * TerminalDaemon to do the paint and so on.
 * 
 * @author andliu
 *
 */
public class WebConsoleTerminal extends JPanel implements KeyListener,
		ITerminal {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	// the character number of the terminal width
	private int terminal_width = 80;
	// the character number of the terminal height
	private int terminal_height = 24;
	TerminalDaemon daemon = null;
	WebConsoleConnection connection = null;

	private Font font;

	// private int descent;

	// width of each character
	private int char_width;
	// height of each character
	private int char_height;

	private int line_space = 2;

	private BufferedImage background;

	private BufferedImage img;

	private Graphics2D graphics = null;

	public WebConsoleTerminal() {

		
	}
	
	public void StartTerminal(){
		connection = new WebConsoleConnection();
		connection.Connect();

		Config();

		daemon = new TerminalDaemon(connection, this);
		Thread daemonThread = new Thread(daemon);
		daemonThread.start();

		// this would also calculate the width and height of each character.
		setFont("Monospaced-14");
		this.ResetSize(terminal_width, terminal_height);
	}

	private void ResetSize(int width, int height) {
		int w = width * this.char_width;
		int h = height * this.char_height;
		img = new BufferedImage(w, h, BufferedImage.TYPE_INT_RGB);
		graphics = (Graphics2D) (img.getGraphics());
	}

	private void Config() {
		enableEvents(AWTEvent.KEY_EVENT_MASK);
		addKeyListener(this);
		setFocusable(true);
		enableInputMethods(true);
		setFocusTraversalKeysEnabled(false);
	}

	void setFont(String fname) {
		font = java.awt.Font.decode(fname);
		BufferedImage img = new BufferedImage(1, 1, BufferedImage.TYPE_INT_RGB);
		Graphics2D graphics = (Graphics2D) (img.getGraphics());
		graphics.setFont(font);
		{
			FontMetrics fo = graphics.getFontMetrics();
			// descent = fo.getDescent();
			char_width = (int) (fo.charWidth((char) '@'));
			char_height = (int) (fo.getHeight()) + (line_space * 2);
			// descent += line_space;
		}

		img.flush();
		graphics.dispose();

		background = new BufferedImage(char_width, char_height,
				BufferedImage.TYPE_INT_RGB);
		{
			Graphics2D foog = (Graphics2D) (background.getGraphics());
			// foog.setColor(getBackGround());
			foog.fillRect(0, 0, char_width, char_height);
			foog.dispose();
		}
	}

	public void paintComponent(Graphics g) {
		super.paintComponent(g);		 
	}

	public void Start() {

	}

	// we should handle the Japanese keyboard
	@Override
	public void keyTyped(KeyEvent e) {

	}

	byte[] obuffer = new byte[3];

	@Override
	public void keyPressed(KeyEvent e) {
		// TODO Auto-generated method stub

		int keycode = e.getKeyCode();
		byte[] code = null;
		switch (keycode) {
		case KeyEvent.VK_CONTROL:
		case KeyEvent.VK_SHIFT:
		case KeyEvent.VK_ALT:
		case KeyEvent.VK_CAPS_LOCK:
			return;
		case KeyEvent.VK_ENTER:
			code = VT100Keys.getCodeENTER();
			break;
		}

		if (code != null) {
			try {
				connection.getOutputStream().write(code, 0, code.length);
				connection.getOutputStream().flush();
			} catch (Exception ee) {
			}
			return;
		}

		char keychar = e.getKeyChar();
		if ((keychar & 0xff00) == 0) {
			obuffer[0] = (byte) (e.getKeyChar());
			try {
				connection.getOutputStream().write(obuffer, 0, 1);
				connection.getOutputStream().flush();
			} catch (Exception ee) {
			}
		}
	}

	@Override
	public void keyReleased(KeyEvent e) {
		// TODO Auto-generated method stub

	}

	@Override
	public void CursorDown() {
		// TODO Auto-generated method stub

	}

	private int x = 0;
	private int y = 0;

	@Override
	public void drawBytes(byte[] b, int start, int length, int x, int y) {
		// TODO Auto-generated method stub
		
		System.out.print(b[0]);
	}
}
