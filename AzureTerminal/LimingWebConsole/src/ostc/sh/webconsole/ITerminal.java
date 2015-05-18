package ostc.sh.webconsole;

/**
 * 
 * @author andliu
 *
 */
public interface ITerminal {
	void CursorDown();

	void drawBytes(byte[] b, int start, int length, int x, int y);
}
