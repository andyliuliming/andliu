package ostc.sh.webconsole;

import java.awt.AWTEvent;
import java.awt.Color;
import java.awt.Font;
import java.awt.FontMetrics;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.event.KeyAdapter;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.awt.image.BufferedImage;
import java.io.IOException;

import javax.swing.JPanel;

import ostc.sh.webconsole.ssh.VT100Keys;
import ostc.sh.webconsole.ssh.WebConsoleConnection;

import javax.swing.JTextPane;
import javax.swing.text.BadLocationException;
import javax.swing.text.Style;
import javax.swing.text.StyleConstants;
import javax.swing.text.StyledDocument;
import javax.swing.JTextField;

/**
 * the terminal is responsible to the terminal view. it's used by the
 * TerminalDaemon to do the paint and so on.
 * 
 * @author andliu
 *
 */
public class WebConsoleTerminalTextPane extends JPanel implements KeyListener,
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

	private int line_space = 2;

	private StyledDocument doc = null;
	JTextPane textPane = null;

	public WebConsoleTerminalTextPane() {
		setLayout(null);

		textPane = new JTextPane();
		textPane.setBounds(10, 5, 710, 566);
		add(textPane);

		doc = textPane.getStyledDocument();

	}

	public void StartTerminal() {
		connection = new WebConsoleConnection();
		connection.Connect();

		Config();

		daemon = new TerminalDaemon(connection, this);
		Thread daemonThread = new Thread(daemon);
		daemonThread.start();

	}

	private void Config() {
		enableEvents(AWTEvent.KEY_EVENT_MASK);
		addKeyListener(this);
		setFocusable(true);
		enableInputMethods(true);
		setFocusTraversalKeysEnabled(false);
		textPane.addKeyListener(new KeyAdapter() {
			@Override
			/**
			 * Invoked when a key has been typed.
			 * This event occurs when a key press is followed by a key release.
			 */
			public void keyTyped(KeyEvent e) {
				e.consume();
			}

			/**
			 * Invoked when a key has been pressed.
			 */
			@Override
			public void keyPressed(KeyEvent e) {
				e.consume();
			}

			/**
			 * Invoked when a key has been released.
			 */
			@Override
			public void keyReleased(KeyEvent e) {
				e.consume();
			}
		});
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
		Style style = textPane.addStyle("I'm a Style", null);
		StyleConstants.setForeground(style, Color.red);

		try {
			doc.insertString(doc.getLength(), new String(b), style);
		} catch (BadLocationException e) {
		}

		System.out.print(b[0]);
	}
}
