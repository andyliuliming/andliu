import java.awt.Color;
import java.io.IOException;
import java.io.InputStream;

import javax.swing.JPanel;
import javax.swing.JTextArea;
import javax.swing.JTextPane;
import javax.swing.text.Style;
import javax.swing.text.StyleConstants;
import javax.swing.text.StyledDocument;

/**
 * <code>ConsoleInputStream</code> behaves like <code>System.in</code>, but
 * reads from the applet.
 * 
 * @author Mark Royer
 */
public class ConsoleInputStream extends InputStream {

	public static final String STYLE = "input";

	/**
	 * The buffer to read in from
	 */
	private char[] buf = null;

	/**
	 * The current position in the buffer
	 */
	private int index = 0;
	JTextArea editorPane;

	/**
	 * We make the constructor private so that others can use
	 * <code>AppletInputStream</code> objects, but they can't create them.
	 * 
	 * The default input color is a dark green.
	 */
	ConsoleInputStream(JTextArea editorPane) {
		this.editorPane = editorPane;
		/*StyledDocument sd = this.editorPane.getStyledDocument();
		Style def = sd.getLogicalStyle(this.editorPane.getCaretPosition());
		sd.addStyle(STYLE, def);
		setColor(Color.green.darker());*/
	}

	/**
	 * The input text will be set to the given color.
	 * 
	 * @param color
	 *            The color input will appear as
	 */
	public void setColor(Color color) {
		/*StyledDocument sd = this.editorPane.getStyledDocument();
		Style style = sd.getStyle(STYLE);
		StyleConstants.setForeground(style, color);*/
	}

	@Override
	public int read() throws IOException {

		waitForInput();

		// If we have something to read and the input is valid return the
		// current character.
		if (buf != null && index >= 0 && index < buf.length) {
			return buf[index++];
		} else {
			// The current buffer is exhausted, so reset the input
			index = -1;
			buf = null;
			return -1;
		}
	}

	/**
	 * Used to make the read stream block until the user inputs some text.
	 */
	private void waitForInput() {
		while (buf == null) {
			try {
				Thread.sleep(100);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
	}

	/**
	 * Set the input stream to read from the given string.
	 * 
	 * @param str
	 *            The string the input stream will read from
	 */
	protected synchronized void setInput(String str) {
		buf = (str+"\n").toCharArray();
		index = 0;
	}

}