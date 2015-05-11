package ostc.sh.webconsole.interfaces;

import ostc.sh.webconsole.terminals.NormalFullScreen;


/**
 * 
 * @author andliu
 *
 */
public interface ITerminal {
	
	public void Refresh();
	
	public NormalFullScreen CurrentScreen();
	
	public void CursorHome();
	
	public void SaveCursor();
	
	public void RestoreCursor();

	public void AdjustWindow(int terminalWidth,int terminalHeight);
	
	public void Input(byte[] bytes, int offset,int length);
	
	public void Input(byte[] bytes);
	
	public void PrintChar(char c);

	public void SetForeGround(int f);

	public void SetBackGround(int b);

	public void EnterBoldMode();

	public void ResetStyle();

	public void Tab();

	public int CurrentCharWidth();

	public int CurrentCharHeight();

	public int CurrentTerminalWidth();

	public int CurrentTerminalHeight();

	public void Bell();

	public void ParamCursorUp(int param);
	
	public void ParamCursorLeft(int param);

	public void ParamCursorDown(int param);

	public void ParamCursorRight(int param);

	public void ChangeScrollRegion(int x, int y);

	public void SetCursorPosition(int x, int y);

	public void ScrollUp();
	
	public void ScrollDown();
	
	public void Erase(int startX,int startY,int endX,int endY,char ch);

	public void EraseDown();
	
	public void EraseUp();
	
	public void EraseScreen();

	public void ClearCurrentToEnd();

	public void ClearStartToCurrent();

	public void EnterUnderlineMode();

	public void EnterReverseMode();

	public void CursorLeft();

	public void CarriageReturn();

	public void CursorRight();
}
