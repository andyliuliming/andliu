package ostc.sh.webconsole.terminals;

import javax.swing.JPanel;

import ostc.sh.webconsole.config.GlobalConfig;
import ostc.sh.webconsole.interfaces.ITerminal;

/**
 * 
 * @author andliu
 *
 */
public abstract class AbstractTerminal extends JPanel implements ITerminal {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	protected NormalFullScreen currentScreen = null;
	
	private CursorState cursorState=null;
	public AbstractTerminal(){
		currentScreen = new NormalFullScreen();
	}
	
	public void SaveCursor(){
		cursorState = new CursorState();
		this.cursorState.fontAttr = GlobalConfig.Instance().getCurrentAttribute();
		this.cursorState.x = this.CurrentScreen().window_x_char_index;
		this.cursorState.y = this.CurrentScreen().window_y_char_index;
	}

	public void RestoreCursor() {
		if (cursorState != null) {
			this.CurrentScreen().window_x_char_index = this.cursorState.x;
			this.CurrentScreen().window_y_char_index = this.cursorState.y;
			GlobalConfig.Instance().setCurrentAttribute(this.cursorState.fontAttr);
		}else
		{
			this.CursorHome();
		}
		cursorState = null;
	}
	
	public NormalFullScreen CurrentScreen(){
		return currentScreen;
	}
	public void SetForeGround(int f) {
		GlobalConfig.Instance().SetForeColor(f);
	}

	public void SetBackGround(int b) {
		GlobalConfig.Instance().SetBackgroundColor(b);
	}

	public void EnterBoldMode() {
		GlobalConfig.Instance().SetBold(true);
	}

	@Override
	public void EnterUnderlineMode() {
		GlobalConfig.Instance().SetUnderline(true);
	}

	@Override
	public void EnterReverseMode() {
		GlobalConfig.Instance().ReverseColor();
	}

	public void ResetStyle() {
		GlobalConfig.Instance().ResetStyle();
	}

}
