package ostc.sh.webconsole.terminals;

import java.awt.event.KeyAdapter;
import java.awt.event.KeyEvent;

import ostc.sh.webconsole.config.GlobalConfig;
import ostc.sh.webconsole.domain.VT100Keys;
import ostc.sh.webconsole.interfaces.ITerminal;

public class KeyInputAdapter extends KeyAdapter {
	ITerminal terminal;

	// 3 is enough for utf-8
	byte[] outBuffer = new byte[3];
	public KeyInputAdapter(ITerminal terminal){
		this.terminal=terminal;
	}
	
	@Override
	/**
	 * Invoked when a key has been typed.
	 * This event occurs when a key press is followed by a key release.
	 */
	public void keyTyped(KeyEvent e) {
		char keychar = e.getKeyChar();
		
		System.err.println("keychar="+keychar);
		
		long masked=(keychar & 0xff00);
		if (masked != 0) {
			char[] foo = new char[1];
			foo[0] = keychar;
			try {
				byte[] goo = new String(foo).getBytes(GlobalConfig.Instance().getCurrentEncoding());


				System.err.println("Input 3");
				terminal.Input(goo);
			} catch (Exception eee) {
			}
		}
		e.consume();
	}

	/**
	 * Invoked when a key has been pressed.
	 */
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
			code = VT100Keys.getCodeEnter();
			break;
		case KeyEvent.VK_UP:
			code = VT100Keys.getCodeUp();
			break;
		case KeyEvent.VK_DOWN:
			code = VT100Keys.getCodeDown();
			break;
		case KeyEvent.VK_RIGHT:
			code = VT100Keys.getCodeRIGHT();
			break;
		case KeyEvent.VK_LEFT:
			code = VT100Keys.getCodeLEFT();
			break;
		case KeyEvent.VK_F1:
			code = VT100Keys.getCodeF1();
			break;
		case KeyEvent.VK_F2:
			code = VT100Keys.getCodeF2();
			break;
		case KeyEvent.VK_F3:
			code = VT100Keys.getCodeF3();
			break;
		case KeyEvent.VK_F4:
			code = VT100Keys.getCodeF4();
			break;
		case KeyEvent.VK_F5:
			code = VT100Keys.getCodeF5();
			break;
		case KeyEvent.VK_F6:
			code = VT100Keys.getCodeF6();
			break;
		case KeyEvent.VK_F7:
			code = VT100Keys.getCodeF7();
			break;
		case KeyEvent.VK_F8:
			code = VT100Keys.getCodeF8();
			break;
		case KeyEvent.VK_F9:
			code = VT100Keys.getCodeF9();
			break;
		case KeyEvent.VK_F10:
			code = VT100Keys.getCodeF10();
			break;
		case KeyEvent.VK_TAB:
			code = VT100Keys.getCodeTab();
			break;
		case KeyEvent.VK_INSERT:
			code = VT100Keys.getCodeInsert();
			break;
		case KeyEvent.VK_HOME:
			code = VT100Keys.getCodeHome();
			break;
		case KeyEvent.VK_END:
			code = VT100Keys.getCodeEnd();
			break;
		case KeyEvent.VK_PAGE_UP:
			code = VT100Keys.getCodePageUp();
			break;
		case KeyEvent.VK_PAGE_DOWN:
			code = VT100Keys.getCodePageDown();
			break;
		case KeyEvent.VK_DELETE:
			code = VT100Keys.getCodeDelete();
			break;
		}

		if (code != null) {
			try {
				terminal.Input(code);
				System.err.println("Input 1");
			} catch (Exception ee) {
				ee.printStackTrace();
			}
			//e.consume();
			return;
		}

		char keychar = e.getKeyChar();
		if ((keychar & 0xff00) == 0) {
			outBuffer[0] = (byte) (e.getKeyChar());
			try {System.err.println("Input 2");
				this.terminal.Input(outBuffer,0,1);
			} catch (Exception ee) {
				ee.printStackTrace();
			}
		}
		e.consume();
	}

	/**
	 * Invoked when a key has been released.
	 */
	@Override
	public void keyReleased(KeyEvent e) {
		e.consume();
	}
}
