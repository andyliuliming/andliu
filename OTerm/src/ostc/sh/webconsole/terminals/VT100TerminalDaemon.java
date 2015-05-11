package ostc.sh.webconsole.terminals;

import java.io.IOException;

import ostc.sh.webconsole.config.GlobalConfig;
import ostc.sh.webconsole.domain.CharsetEnum;
import ostc.sh.webconsole.domain.Command;
import ostc.sh.webconsole.domain.EscapePattern;
import ostc.sh.webconsole.domain.FontAttributes;
import ostc.sh.webconsole.error.NetworkIssueNotifier;
import ostc.sh.webconsole.interfaces.IDaemon;
import ostc.sh.webconsole.ssh.TerminalShellDataBuffer;
import ostc.sh.webconsole.util.Logger;

/**
 * this is used to pass the input to the ssh session, and get the output from
 * the session session. and uses the WebConsoleTerminal to show the result.
 * 
 * @author andliu
 *
 */
public class VT100TerminalDaemon implements IDaemon {	
	
	private WebConsoleCanvasTerminal terminal = null;
	private TerminalShellDataBuffer connection=null;
	public VT100TerminalDaemon(TerminalShellDataBuffer connection, WebConsoleCanvasTerminal terminal) {
		this.terminal = terminal;
		this.connection = connection;
	}

	private final byte Escape = 0x1b;

	private void PopulateIntegerParameters(Command cmd) throws IOException{
		cmd.ParameterCount = 0;
		int digitNumber = 0;
		byte b;
		cmd.Parameters[cmd.ParameterCount] = 0;
		while (true) {
			b = connection.getByte();
			if (b == ';') {
				if (digitNumber > 0) {
					cmd.ParameterCount += 1;
					cmd.Parameters[cmd.ParameterCount] = 0;
					digitNumber = 0;
				}
				continue;
			}

			if ('0' <= b && b <= '9') {
				cmd.Parameters[cmd.ParameterCount] = cmd.Parameters[cmd.ParameterCount] * 10 + (b - '0');
				digitNumber++;
				continue;
			}

			if (digitNumber > 0) {
				cmd.ParameterCount += 1;
			}
			connection.pushByteBack(b);
			break;
		}
	}
	
	private Command GetNextCommand() throws IOException {
		Command cmd = new Command();
		byte b = connection.getByte();
		if (b == 0) {
			cmd.pattern = EscapePattern.None;
		}

		// 0x1b is Escape character.
		switch (b) {
		case Escape: {
			b = connection.getByte();
			switch (b) {
			case '[': {
				PopulateIntegerParameters(cmd);
				b = connection.getByte();

				if (b == 'm') {
					cmd.pattern = EscapePattern.DisplayAttrubute;
					return cmd;
				}

				if (b == '?') {
					this.PopulateIntegerParameters(cmd);
					byte toggle=connection.getByte();
					boolean toggleOn = (toggle == 'h' ? true : false);
					// something like Esc[?22h     Esc[?22l
					switch(cmd.Parameters[0]){
					case 1:
						cmd.pattern = toggleOn?EscapePattern.CursorKeyToApplication:EscapePattern.CursorKeyToApplicationOff;
						break;
					case 2:
						if (toggleOn) {
							Logger.Log("? pattern not handled [?2" + (char) toggle);
						} else {
							cmd.pattern = EscapePattern.VT52Mode;
						}
						break;
					case 3:
						cmd.pattern = toggleOn?EscapePattern.ColumnMode132:EscapePattern.ColumnMode80;
						break;
					case 4:
						cmd.pattern = toggleOn?EscapePattern.SmoothScrollMode:EscapePattern.SmoothScrollModeOff;
						break;
					case 5:
						cmd.pattern = toggleOn?EscapePattern.ReverseColorSceenMode:EscapePattern.ReverseColorSceenModeOff;
						break;
					case 6:
						cmd.pattern = toggleOn?EscapePattern.OriginMode:EscapePattern.OriginModeOff;
						break;
					case 7:
						cmd.pattern = toggleOn?EscapePattern.AutoWrapMode:EscapePattern.AutoWrapModeOff;
						break;
					case 8:
						cmd.pattern = toggleOn?EscapePattern.AutoRepeatMode:EscapePattern.AutoRepeatModeOff;
						break;
					case 40:
						/*To emulate the vt102 switching between 80 and 132 columns, the mode may
						be turned on via .Xdefaults "xterm.C132 on", via command line option -132 or
						via the mode menu.  The mode may be changed by escape sequence \E[?40h (on)
						and \E[?40l (off).*/
						Logger.Log("?40"+(char) toggle+" pattern not handled");
						cmd.pattern = toggleOn?EscapePattern.ColumnMode80:EscapePattern.ColumnMode132;
						break;
					case 45:
						/*Also the escape sequences
						\E[?45h turns on reverse wraparound and \E[?45l turns it off.  Reverse
						wraparound only works when autowrap is also on and is useful, for instance,
						when entering a long line that wraps to the shell and needing to erase
						backwards to correct it.*/
						Logger.Log("?45"+(char) toggle+" pattern not handled");
						cmd.pattern = toggleOn? EscapePattern.ReverseWraparound:EscapePattern.ReverseWraparoundOff;
						break;
					case 42:
						/*Text that is scrolled off the top of the window can be saved and is accessable
						via a scrollbar.  By default, saving is off and can be turned changed via
						escape sequence \E[?43h (on) and \E[43l (off) or from the mode menu.  The
						scrollbar is normally off, but may be made visible with .Xdefault option
						"xterm.ScrollBar on" or command line option -sb.  The scrollbar state can
						be changed via the mode menu or escape sequences \E[?42h (on) and \E[?42l
						(off).*/
						cmd.pattern = toggleOn?EscapePattern.ScrollBarOn:EscapePattern.ScrollBarOff;
						break;
					default:
						Logger.Log("? pattern not handled " + cmd.Parameters[0]);
						cmd.pattern = EscapePattern.None;
						break;
					}
				}
				
				if (b == 'A') {
					// Esc[A
					if (cmd.ParameterCount == 0||(cmd.ParameterCount==1&&cmd.Parameters[0]==0)) {
						cmd.ParameterCount = 1;
						cmd.Parameters[0] = 1;
					}
					cmd.pattern = EscapePattern.ParamCursorUp;
				}
				
				if (b == 'B') {
					// Esc[B
					if (cmd.ParameterCount == 0||(cmd.ParameterCount==1&&cmd.Parameters[0]==0)) {
						cmd.ParameterCount = 1;
						cmd.Parameters[0] = 1;
					}
					cmd.pattern = EscapePattern.ParamCursorDown;
				}

				if (b == 'C') {
					// Esc[C  Esc[0C means one
					if (cmd.ParameterCount == 0||(cmd.ParameterCount==1&&cmd.Parameters[0]==0)) {
						cmd.ParameterCount = 1;
						cmd.Parameters[0] = 1;
					}
					cmd.pattern = EscapePattern.ParamCursorForward;
				}
				
				if (b == 'D') {
					// Esc[D
					if (cmd.ParameterCount == 0||(cmd.ParameterCount==1&&cmd.Parameters[0]==0)) {
						cmd.ParameterCount = 1;
						cmd.Parameters[0] = 1;
					}
					cmd.pattern = EscapePattern.ParamCursorBackward;
				}				

				if (b == 'H') {// this is the same as the f
					// Esc[H Esc[1,1H
					if (cmd.ParameterCount == 0) {
						cmd.pattern = EscapePattern.HomePosition;
					}
					else
					{
						cmd.pattern = EscapePattern.CursorPosition;
					}
				}
				
				if (b == 'J') {
					// Esc[J
					// Esc[1J erase up
					// Esc[2J erase screen
					if (cmd.ParameterCount == 0) {
						cmd.pattern = EscapePattern.EraseDown;
					}
					if (cmd.ParameterCount == 1) {
						if (cmd.Parameters[0] == 0) {
							cmd.pattern = EscapePattern.EraseDown;
						}
						if (cmd.Parameters[0] == 1) {
							cmd.pattern = EscapePattern.EraseUp;
						}
						if (cmd.Parameters[0] == 2) {
							cmd.pattern = EscapePattern.EraseScreen;
						}
					}					
				}
				
				if (b == 'K') {
					// Esc[K  Esc[0k
					if (cmd.ParameterCount == 0) { // el
						// Clear line from current cursor position to
						// end of line
						cmd.pattern = EscapePattern.ClearCurrentToEnd;
					} else {
						switch (cmd.Parameters[0]) {
						case 0:
							cmd.pattern = EscapePattern.ClearCurrentToEnd;
							break;
						case 1:
							cmd.pattern = EscapePattern.ClearStartToCurrent;
							break;
						case 2:
							cmd.pattern = EscapePattern.ClearFullLine;
							break;
						}
					}
				}

				if (b == 'P') {
					cmd.pattern = EscapePattern.DeleteCharacter;
				}
				if (b == 'L') {
					cmd.pattern = EscapePattern.InsertLine;
				}
				if (b == 'M') {
					cmd.pattern = EscapePattern.DeleteLine;
				}
				if (b == 'c') {
					cmd.pattern = EscapePattern.DeviceAttributes;
				}

				if (b == 'f') {
					if (cmd.ParameterCount == 0) {
						cmd.pattern = EscapePattern.HomePosition;
					} else {
						cmd.pattern = EscapePattern.CursorPosition;
					}
				}
				
				if (b == 'g') {
					/*[0g = Clear horizontal tab stop at current position
							 *	[1g = Clear vertical tab stop at current line (LA120)
							 *	[2g = Clear all horizontal tab stops on current line only LA120
							 *	[3g = Clear all horizontal tab stops in the terminal*/
					if (cmd.Parameters[0] == 0) {
						cmd.pattern = EscapePattern.ClearCurrentTabStop;
					}
					if (cmd.ParameterCount == 1 && cmd.Parameters[0] == 3) {
						cmd.pattern = EscapePattern.ClearAllHorizontalTab;
					}
					if (cmd.Parameters[0] == 1) {
						//Clear vertical tab stop at current line  //ignores the 
						cmd.pattern = EscapePattern.None;
					}
					if (cmd.Parameters[0] == 2) {
						cmd.pattern = EscapePattern.None;  //ignores the 
					}
				}
				
				if (b == 'h') {
					// Esc[20h
					//Set causes a received linefeed, form feed, or vertical tab to move cursor to first column of next line. RETURN transmits both a carriage return and linefeed. This selection is also called new line option.
					System.err.print("Esc[" + cmd.Parameters[0] + "h");
					if (cmd.ParameterCount == 1) {
						if (cmd.Parameters[0] == 20) {
							cmd.pattern = EscapePattern.LinefeedMode;
						}
						if (cmd.Parameters[0] == 4) {
							// Insertion-Replacement Mode
							cmd.pattern = EscapePattern.InsertionReplacementMode;
						}
					}					
				}

				if (b == 'l') {
					//Esc[20l Reset causes a received linefeed, form feed, or vertical tab to move cursor to next line in current column. RETURN transmits a carriage return.
					System.err.print("Esc[" + cmd.Parameters[0] + "l");
					if (cmd.ParameterCount == 1) {
						if (cmd.Parameters[0] == 20) {
							cmd.pattern = EscapePattern.LinefeedModeOff;
						}
						if (cmd.Parameters[0] == 4) {
							// Insertion-Replacement Mode
							cmd.pattern = EscapePattern.InsertionReplacementModeOff;
						}
					}
				}
				
				if (b == 'r') {
					// Esc[1,2r
					if(cmd.ParameterCount==0){
						cmd.ParameterCount = 2;
						cmd.Parameters[0] = 1;
						cmd.Parameters[1] = this.terminal.CurrentTerminalHeight();
					}
					cmd.pattern = EscapePattern.ScrollRegion;
				}
				break;
			}
			case '7': {// Save current cursor position.
				cmd.pattern = EscapePattern.SaveCursor;
				break;
			}
			case '8': {// Restore Cursor & Attrs <ESC>8
				cmd.pattern = EscapePattern.RestoreCursor;
				break;
			}
			case 'D': {
				cmd.pattern = EscapePattern.Index;
				break;
			}
			case 'E':{
				cmd.pattern = EscapePattern.NextLine;
				break;
			}
			case 'F': {
				cmd.pattern = EscapePattern.EnterGraphicsMode;
				break;
			}
			case 'G': {
				cmd.pattern = EscapePattern.LeaveGraphicsMode;
				break;
			}
			case 'H': {
				// Sets a horizontal tab stop at cursor position.
				cmd.pattern = EscapePattern.HorizontalTabulationSet;
				break;
			}
			case 'I': {
				cmd.pattern = EscapePattern.ReverseLinefeed;
				break;
			}
			case 'M': {
				cmd.pattern = EscapePattern.ReverseIndex;
				break;
			}
			case 'O':{
				byte byteAfterO=connection.getByte();
				switch (byteAfterO) {
				case 'A'://up
					break;
				case 'B'://down
					break;
				case 'C'://right
					break;
				case 'D'://left
					break;
				default:
					break;
				}
			}
			
			case 'c':{
				cmd.pattern = EscapePattern.ResetToInitialState;
				return cmd;
			}
			
			case '(':
			case ')':
			case '*':
			case '+':
				byte nextByte = connection.getByte();
				if(b=='('&&nextByte=='A'){cmd.pattern = EscapePattern.UKAsG0;}
				if(b=='('&&nextByte=='B'){cmd.pattern = EscapePattern.USAsG0;}
				if(b=='('&&nextByte=='0'){cmd.pattern = EscapePattern.SpecialCharAsG0;}
				if(b=='('&&nextByte=='1'){cmd.pattern = EscapePattern.AlternateCharacterROMAsG0;}
				if(b=='('&&nextByte=='2'){cmd.pattern = EscapePattern.AlternateCharacterROMAndSpecAsG0;}
				
				if(b==')'&&nextByte=='A'){cmd.pattern = EscapePattern.UKAsG1;}
				if(b==')'&&nextByte=='B'){cmd.pattern = EscapePattern.USAsG1;}
				if(b==')'&&nextByte=='0'){cmd.pattern = EscapePattern.SpecialCharAsG1;}
				if(b==')'&&nextByte=='1'){cmd.pattern = EscapePattern.AlternateCharacterROMAsG1;}
				if(b==')'&&nextByte=='2'){cmd.pattern = EscapePattern.AlternateCharacterROMAndSpecAsG1;}
				if(b=='*'||b=='+'){
					//TODO ignores the ESC*B and ESC+B ?
					Logger.Log("ignores the ESC*B and ESC+B ?");
					cmd.pattern = EscapePattern.None;
				}
				return cmd;

			case '=':{
				//Application Keypad Mode
				cmd.pattern = EscapePattern.KeypadToApplication;
				return cmd;
			}
			case '>':{
				//Numeric Keypad Mode 
				cmd.pattern = EscapePattern.KeypadToApplicationOff;
				return cmd;
			}
			case '#':{
				byte lineAttr = connection.getByte();
				if (lineAttr == '3') {
					// we should get rid of the #4 followed.
					cmd.pattern = EscapePattern.DoubleHeightLineTopHalf;					
				}
				if (lineAttr == '4') {
					// we should get rid of the #3 followed.
					cmd.pattern = EscapePattern.DoubleHeightLineBottomHalf;
				}
				if (lineAttr == '5') {
					cmd.pattern = EscapePattern.SingleWidthLine;
				}
				if (lineAttr == '6') {
					cmd.pattern = EscapePattern.DoubleWidthLine;
				}
				if (lineAttr == '8'){
					//Screen Alignment Display
					//Fills screen with uppercase E's for screen focus and alignment. 
					cmd.pattern=EscapePattern.ScreenAlignmentDisplay;
				}
				return cmd;
			}
			default:
				Logger.Log("Unknown Character");
				break;
			}
			break;
		}
		case 0x07:
			cmd.pattern = EscapePattern.Bell;
			break;
		case 0x08:// cursor left
			// backspace
			cmd.pattern = EscapePattern.Backspace;
			break;
		case 0x09:// tab horizontal tab
			cmd.pattern = EscapePattern.HorizontalTab;
			break;
		case 0x0a:// cursor down  LF
			cmd.pattern = EscapePattern.LineFeed;
			break;
		case 0x0b:
			cmd.pattern = EscapePattern.VerticalTab;
			break;
		case 0x0c:
			cmd.pattern = EscapePattern.FormFeed;
			break;
		case 0x0d:// CR
			cmd.pattern = EscapePattern.CarriageReturn;
			break;
		case 0x0e:
			cmd.pattern = EscapePattern.ShiftOut;
			break;
		case 0x0f:
			cmd.pattern = EscapePattern.ShiftIn;
			break;
		default:
			// negative means a utf-8 character
			connection.pushByteBack(b);
			cmd.pattern = EscapePattern.FlushCharacter;
			break;
		}

		return cmd;
	}

	@Override
	public void run() {
		try {
			int newy = 0;
			int x,y;
			while (true) {
				if(GlobalConfig.Instance().isPausePrint())
				{
					try {
						Thread.sleep(100);
					} catch (InterruptedException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
					continue;
				}
				Command cmd = this.GetNextCommand();
				switch (cmd.pattern) {
				case Bell:
					this.terminal.Bell();
					break;
				case CarriageReturn:
					this.terminal.CarriageReturn();
					break;
				case ScrollRegion:
					Logger.Log(cmd.pattern);
					this.terminal.ChangeScrollRegion(cmd.Parameters[0] - 1, cmd.Parameters[1] - 1);
					this.terminal.CursorHome();
					break;
				case AutoWrapMode:
					GlobalConfig.Instance().setAutoWrap(true);
					Logger.Log(cmd.pattern);
					break;
				case AutoWrapModeOff:
					GlobalConfig.Instance().setAutoWrap(false);
					Logger.Log(cmd.pattern);
					break;
				case OriginMode:
					Logger.Log(cmd.pattern);
					GlobalConfig.Instance().setOriginMode(true);
					this.terminal.CursorHome();
					break;
				case OriginModeOff:
					GlobalConfig.Instance().setOriginMode(false);
					Logger.Log(cmd.pattern);					
					break;
				case CursorKeyToApplication:
					GlobalConfig.Instance().setCurrentCursorKeyModeApplication(true);
					Logger.Log(cmd.pattern);
					break;
				case CursorKeyToApplicationOff:
					GlobalConfig.Instance().setCurrentCursorKeyModeApplication(false);
					Logger.Log(cmd.pattern);
					break;
				case KeypadToApplication:
					GlobalConfig.Instance().setCurrentKeypadModeApplication(true);
					Logger.Log(cmd.pattern);
					break;
				case KeypadToApplicationOff:
					GlobalConfig.Instance().setCurrentKeypadModeApplication(false);
					Logger.Log(cmd.pattern);
					break;
				case Backspace:
					Logger.Log(cmd.pattern);
					this.terminal.Backspace();
					break;
				case ReverseColorSceenMode:
					Logger.Log(cmd.pattern);
					GlobalConfig.Instance().setReverseColorSceenMode(true);
					break;
				case ReverseColorSceenModeOff:
					Logger.Log(cmd.pattern);
					GlobalConfig.Instance().setReverseColorSceenMode(false);
					break;
				case DisplayAttrubute:
					if (cmd.ParameterCount == 0) {
						this.terminal.ResetStyle();
						break;
					}

					for (int i = 0; i < cmd.ParameterCount; i++) {
						switch (cmd.Parameters[i]) {
						case 0: // Reset all attributes
							// handle the [0m reset all the colors and
							// so on
							this.terminal.ResetStyle();
							break;
						case 1: // Bright // bold
							this.terminal.EnterBoldMode();
							break;
						case 2: // Dim
							break;
						case 4: // Underline
							this.terminal.EnterUnderlineMode();
							break;
						case 5: // Blink
						case 8: // Hidden
							break;
						case 7: // reverse
							this.terminal.EnterReverseMode();
							break;
						case 30:
						case 31:
						case 32:
						case 33:
						case 34:
						case 35:
						case 36:
						case 37:
							// [0;1;34;94m means the top half is black, and the
							// low half is light blue.
							this.terminal.SetForeGround(cmd.Parameters[i] - 30);
							break;
						case 40:
						case 41:
						case 42:
						case 43:
						case 44:
						case 45:
						case 46:
						case 47:
							this.terminal.SetBackGround(cmd.Parameters[i] - 40);
							break;
						case 90:
						case 91:
						case 92:
						case 93:
						case 94:
						case 95:
						case 96:
						case 97:
							// forground color half
							break;
						case 100:
						case 101:
						case 102:
						case 103:
						case 104:
						case 105:
						case 106:
						case 107:
							// background color half
							break;
						default:
							break;
						}
					}
					break;
				case ClearCurrentToEnd:
					Logger.Log(cmd.pattern);
					this.terminal.ClearCurrentToEnd();
					break;
				case ClearStartToCurrent:
					Logger.Log(cmd.pattern);
					this.terminal.ClearStartToCurrent();
					break;
				case ClearFullLine:
					Logger.Log(cmd.pattern);
					this.terminal.ClearStartToCurrent();
					this.terminal.ClearCurrentToEnd();
					break;
				case EraseDown:
					Logger.Log(cmd.pattern);
					this.terminal.EraseDown();
					WaitAmoment();
					break;
				case EraseUp:
					Logger.Log(cmd.pattern);
					this.terminal.EraseUp();
					WaitAmoment();
					break;
				case EraseScreen:
					Logger.Log(cmd.pattern);
					this.terminal.EraseScreen();
					WaitAmoment();
					break;
				case ParamCursorUp:
					Logger.Log(cmd.pattern + " " + cmd.Parameters[0]);					
					this.terminal.ParamCursorUp(cmd.Parameters[0]);
					WaitAmoment();
					break;
				case ParamCursorDown:
					Logger.Log(cmd.pattern + " " + cmd.Parameters[0]);
					this.terminal.ParamCursorDown(cmd.Parameters[0]);
					WaitAmoment();
					break;
				case ParamCursorForward:
					Logger.Log(cmd.pattern + " " + cmd.Parameters[0]);
					this.terminal.ParamCursorRight(cmd.Parameters[0]);
					WaitAmoment();
					break;
				case ParamCursorBackward:
					Logger.Log(cmd.pattern + " " + cmd.Parameters[0]);
					if(cmd.Parameters[0]==10){
						System.err.print("");
					}
					this.terminal.ParamCursorLeft(cmd.Parameters[0]);
					WaitAmoment();
					break;				
				case SaveCursor:
					/*Saves cursor position, character attribute (graphic rendition), character set, and origin mode selection. (See restore cursor).
					Restores previously saved cursor position, character attribute (graphic rendition), character set, and origin mode selection. 
					If none were saved, the cursor moves to home position.*/
					Logger.Log(cmd.pattern);
					this.terminal.SaveCursor();
					break;
				case RestoreCursor:
					Logger.Log(cmd.pattern);
					// if no cursor status saved, restore to the home
					this.terminal.RestoreCursor();
					break;

				case NextLine:// same as the NewLine				
					Logger.Log(cmd.pattern);
					newy = this.terminal.CurrentScreen().window_y_char_index + 1;
					if (newy > this.terminal.CurrentScreen().scroll_region_end_index) {
						//Logger.Log("Scroll NewLine");
						this.terminal.ScrollUp();						
						newy = this.terminal.CurrentScreen().scroll_region_end_index ;
					}
					this.terminal.SetCursorPosition(0, newy);
					break;
				case FormFeed://TODO test this?
				case LineFeed:
				case VerticalTab:
					//Moves cursor to first position on next line. If cursor is at bottom margin, screen performs a scroll-up.
					Logger.Log(cmd.pattern);
					newy = this.terminal.CurrentScreen().window_y_char_index + 1;
					if (newy > this.terminal.CurrentScreen().scroll_region_end_index) {
						//Logger.Log("Scroll NewLine");
						this.terminal.ScrollUp();						
						newy = this.terminal.CurrentScreen().scroll_region_end_index ;
					}
					if(GlobalConfig.Instance().isLinefeedMode()){
						this.terminal.SetCursorPosition(0, newy);
					}
					else
					{
						this.terminal.SetCursorPosition(this.terminal.CurrentScreen().window_x_char_index, newy);
					}					
					break;				
				case Index:
					//Moves cursor down one line in same column. If cursor is at bottom margin, screen performs a scroll-up.					
					Logger.Log(cmd.pattern);
					newy = this.terminal.CurrentScreen().window_y_char_index + 1;
					if (newy > this.terminal.CurrentScreen().scroll_region_end_index) {
						// Scroll it
						Logger.Log("Scroll Index");
						this.terminal.ScrollUp();
						newy = this.terminal.CurrentScreen().scroll_region_end_index ;
					}					
					this.terminal.SetCursorPosition(this.terminal.CurrentScreen().window_x_char_index, newy);
					break;
				case ReverseIndex:
					// Moves cursor up one line in same column. If cursor is at top margin, screen performs a scroll-down.
					Logger.Log(cmd.pattern);	
					newy = this.terminal.CurrentScreen().window_y_char_index - 1;
					if (newy < this.terminal.CurrentScreen().scroll_region_start_index) {
						Logger.Log("Scroll Index");
						this.terminal.ScrollDown();
						newy = this.terminal.CurrentScreen().scroll_region_start_index;
					}
					this.terminal.SetCursorPosition(this.terminal.CurrentScreen().window_x_char_index, newy);
					break;
				case FlushCharacter:
					char currentChar;
					try {
						currentChar = connection.getChar();
						// we should transfer the currentChar
						
						this.terminal.PrintChar(currentChar);
					} catch (IOException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
					WaitAmoment();
					break;
					
				case HomePosition:
					Logger.Log(cmd.pattern);
					this.terminal.CursorHome();
					WaitAmoment();
					break;
				case CursorPosition:
					Logger.Log(""+cmd.pattern + " "+(cmd.Parameters[1] - 1) + " " + (cmd.Parameters[0] - 1));
					if((cmd.Parameters[1] - 1)==79&&(cmd.Parameters[0] - 1)==1)
					{
						System.err.print("");
					}
					if(GlobalConfig.Instance().isOriginMode()){
						this.terminal.SetCursorPosition(cmd.Parameters[1] - 1, this.terminal.CurrentScreen().scroll_region_start_index+(cmd.Parameters[0]-1));
					}else
					{
						this.terminal.SetCursorPosition(cmd.Parameters[1] - 1, cmd.Parameters[0] - 1);
					}
					WaitAmoment();
					break;
				case LinefeedMode:
					Logger.Log(cmd.pattern);
					GlobalConfig.Instance().setLinefeedMode(true);
					break;
				case LinefeedModeOff:
					Logger.Log(cmd.pattern);
					GlobalConfig.Instance().setLinefeedMode(false);
					break;				
				case ScreenAlignmentDisplay:
					Logger.Log(cmd.pattern);
					this.terminal.Erase(0, 0, this.terminal.CurrentScreen().terminal_width_in_char-1, this.terminal.CurrentScreen().terminal_height_in_char-1, 'E');
					WaitAmoment();
					break;
				case ColumnMode132:
					Logger.Log(cmd.pattern);
					// first erase the whold screen.
					// then put [H
					// then set the scroll region
					this.terminal.AdjustWindow(132, 24);
					this.terminal.SetCursorPosition(0, 0);
					this.terminal.EraseScreen();
					this.terminal.ChangeScrollRegion(0, this.terminal.CurrentTerminalHeight()-1);
					break;
				case ColumnMode80:
					Logger.Log(cmd.pattern);
					this.terminal.AdjustWindow(80, 24);
					this.terminal.SetCursorPosition(0, 0);
					this.terminal.EraseScreen();
					this.terminal.ChangeScrollRegion(0, this.terminal.CurrentTerminalHeight()-1);
					break;
					
				case HorizontalTab:
					Logger.Log(cmd.pattern);
					int nextTabPosition=-1;
					for(int i=this.terminal.currentScreen.window_x_char_index;i<this.terminal.currentScreen.terminal_width_in_char;i++){
						int currentAttr = this.terminal.currentScreen.attributes[this.terminal.currentScreen.window_y_char_index+this.terminal.currentScreen.windowMarginTop][i];
						if(GlobalConfig.IsTabSet(currentAttr))
						{
							nextTabPosition = i;
							break;
						}
					}
					if (nextTabPosition == -1) {
						nextTabPosition = this.terminal.CurrentTerminalWidth() - 1;
					}
					this.terminal.SetCursorPosition(nextTabPosition, this.terminal.currentScreen.window_y_char_index);
					break;
					
				case HorizontalTabulationSet:
					y = this.terminal.currentScreen.window_y_char_index + this.terminal.currentScreen.windowMarginTop;
					x = this.terminal.currentScreen.window_x_char_index;					
					Logger.Log(cmd.pattern + " set the h tab at" + x + " " + y);
					this.terminal.currentScreen.attributes[y][x] |= FontAttributes.IsTabSet;
					break;

				case DeviceAttributes:		
					this.terminal.Input(GlobalConfig.Instance().getCurrentEncoding().getBytes(GlobalConfig.Instance().getCurrentEncoding()));
					break;
				case ClearCurrentTabStop:
					y = this.terminal.currentScreen.window_y_char_index + this.terminal.currentScreen.windowMarginTop;
					x = this.terminal.currentScreen.window_x_char_index;					
					Logger.Log(cmd.pattern+" clear the h tab at" + x + " " + y);
					this.terminal.currentScreen.attributes[y][x]&=(~FontAttributes.IsTabSet);
					break;
				case ClearHorizontalTabAtCurrentLine:
					Logger.Log(cmd.pattern);
					y = this.terminal.currentScreen.window_y_char_index + this.terminal.currentScreen.windowMarginTop;
					for (x = 0; x < this.terminal.currentScreen.terminal_width_in_char; x++) {
						Logger.Log(cmd.pattern+" clear the h tab at" + x + " " + y);
						this.terminal.currentScreen.attributes[y][x]&=(~FontAttributes.IsTabSet);
					}
					break;
				case DoubleHeightLineTopHalf:					
					Logger.Log(cmd.pattern);
					this.terminal.currentScreen.lineAttributes[this.terminal.currentScreen.window_y_char_index + this.terminal.currentScreen.windowMarginTop] = FontAttributes.DoubleHeightLineTopHalf;
					break;
				case DoubleHeightLineBottomHalf:
					Logger.Log(cmd.pattern);
					this.terminal.currentScreen.lineAttributes[this.terminal.currentScreen.window_y_char_index + this.terminal.currentScreen.windowMarginTop] = FontAttributes.DoubleHeightLineBottomHalf;
					break;
				case SingleWidthLine:
					Logger.Log(cmd.pattern);
					this.terminal.currentScreen.lineAttributes[this.terminal.currentScreen.window_y_char_index + this.terminal.currentScreen.windowMarginTop] = FontAttributes.SingleWidth;
					break;
				case DoubleWidthLine:
					Logger.Log(cmd.pattern);
					this.terminal.currentScreen.lineAttributes[this.terminal.currentScreen.window_y_char_index + this.terminal.currentScreen.windowMarginTop] = FontAttributes.DoubleWidth;
					break;	
				case ClearAllHorizontalTab:
					Logger.Log(cmd.pattern);
					int totalY = this.terminal.currentScreen.windowMarginTop+this.terminal.currentScreen.terminal_height_in_char;
					int totalX = this.terminal.currentScreen.terminal_width_in_char;
					for (int i = 0; i < totalY; i++) {
						for (int j = 0; j < totalX; j++) {
							this.terminal.currentScreen.attributes[i][j]&=(~FontAttributes.IsTabSet);
						}
					}
					break;
					
				// un-tested
				case InsertLine:
					Logger.Log(cmd.pattern);
					if(this.terminal.currentScreen.window_y_char_index>this.terminal.currentScreen.scroll_region_end_index||this.terminal.currentScreen.window_y_char_index<this.terminal.currentScreen.scroll_region_start_index)
					{
						break;
					}
					else
					{
						int distance = cmd.Parameters[0];
						
						// move the lines.
						for(int i = this.terminal.currentScreen.scroll_region_end_index;i >= this.terminal.currentScreen.window_y_char_index; i--){
							int targetIndex = i + distance;
							if (targetIndex > this.terminal.currentScreen.scroll_region_end_index) {
								continue;
							}
							else{
								for (int j = 0; j < this.terminal.currentScreen.terminal_width_in_char; j++) {
									this.terminal.currentScreen.characters[this.terminal.currentScreen.windowMarginTop+targetIndex][j] = this.terminal.currentScreen.characters[this.terminal.currentScreen.windowMarginTop+i][j];
									this.terminal.currentScreen.attributes[this.terminal.currentScreen.windowMarginTop+targetIndex][j] = this.terminal.currentScreen.attributes[this.terminal.currentScreen.windowMarginTop+i][j];
								}
							}
						}
						// clear the lines.
						for(int i=this.terminal.currentScreen.window_y_char_index;i<(this.terminal.currentScreen.window_y_char_index+distance)&&i<=this.terminal.currentScreen.scroll_region_end_index;i++){
							for (int j = 0; j < this.terminal.currentScreen.terminal_width_in_char; j++) {
								this.terminal.currentScreen.characters[this.terminal.currentScreen.windowMarginTop+i][j] = '\0';
								this.terminal.currentScreen.attributes[this.terminal.currentScreen.windowMarginTop+i][j] = FontAttributes.Normal;
							}
						}
					}
					break;
				case DeleteLine:
					// Deletes Pn lines, starting at line with cursor. As lines are deleted, lines displayed below cursor move up. 
					// Lines added to bottom of screen have spaces with same character attributes as last line moved up. 
					// This sequence is ignored when cursor is outside scrolling region.
					Logger.Log(cmd.pattern);
					int linesToDelete = cmd.Parameters[0];
					if(this.terminal.currentScreen.window_y_char_index>this.terminal.currentScreen.scroll_region_end_index||this.terminal.currentScreen.window_y_char_index<this.terminal.currentScreen.scroll_region_start_index)
					{
						break;
					}else
					{
						// move the lines
						for (int i = (this.terminal.currentScreen.window_y_char_index + linesToDelete); i < this.terminal.currentScreen.scroll_region_end_index; i++) {
							for (int j = 0; j < this.terminal.currentScreen.terminal_width_in_char; j++) {
								this.terminal.currentScreen.characters[this.terminal.currentScreen.windowMarginTop+i-linesToDelete][j] = this.terminal.currentScreen.characters[this.terminal.currentScreen.windowMarginTop+i][j];
								this.terminal.currentScreen.attributes[this.terminal.currentScreen.windowMarginTop+i-linesToDelete][j] = this.terminal.currentScreen.attributes[this.terminal.currentScreen.windowMarginTop+i][j];
							}
						}
					}
					break;
				case AutoRepeatMode:
					GlobalConfig.Instance().setAutoRepeatMode(true);
					Logger.Log(cmd.pattern);
					break;
				case AutoRepeatModeOff:
					GlobalConfig.Instance().setAutoRepeatMode(false);
					Logger.Log(cmd.pattern);
					//String x="\*";
					break;

				case UKAsG0:
					GlobalConfig.Instance().setG0(CharsetEnum.UK);
					break;
				case USAsG0:
					GlobalConfig.Instance().setG0(CharsetEnum.US);
					break;
				case SpecialCharAsG0:
					GlobalConfig.Instance().setG0(CharsetEnum.Special);
					break;
				case UKAsG1:
					GlobalConfig.Instance().setG1(CharsetEnum.UK);
					break;
				case USAsG1:
					GlobalConfig.Instance().setG1(CharsetEnum.US);
					break;
				case SpecialCharAsG1:
					GlobalConfig.Instance().setG1(CharsetEnum.Special);
					break;
				case AlternateCharacterROMAsG0:
				case AlternateCharacterROMAndSpecAsG0:				
				case AlternateCharacterROMAsG1:
				case AlternateCharacterROMAndSpecAsG1:					
					Logger.Log(cmd.pattern);
					break;
				case ShiftOut:
					Logger.Log(cmd.pattern);
					break;
				case ShiftIn:
					Logger.Log(cmd.pattern);
					break;
				// Un-Implemented:
				
				case ScrollBarOn:
					Logger.Log(cmd.pattern);
					break;
				case ScrollBarOff:
					Logger.Log(cmd.pattern);
					break;
				case ReverseWraparound:
					Logger.Log(cmd.pattern);
					break;
				case ReverseWraparoundOff:
					Logger.Log(cmd.pattern);
					break;
				case InsertionReplacementMode:
					Logger.Log(cmd.pattern);
					break;
				case InsertionReplacementModeOff:
					Logger.Log(cmd.pattern);
					break;					
				case ReverseLinefeed:
					Logger.Log(cmd.pattern);
					break;			
				case VT52Mode:
					Logger.Log(cmd.pattern);
					break;
				case EnterGraphicsMode:
					Logger.Log(cmd.pattern);
					break;
				case LeaveGraphicsMode:
					Logger.Log(cmd.pattern);
					break;
				case SmoothScrollMode:
					Logger.Log(cmd.pattern);
					break;
				case SmoothScrollModeOff:
					Logger.Log(cmd.pattern);
					break;
				case DeleteCharacter:
					Logger.Log(cmd.pattern);
					break;
				case None:
					break;
				default:
					break;
				}
			}
		} catch (IOException e) {
			e.printStackTrace();
			NetworkIssueNotifier.Instance().NotifyAll();
		}
	}
	
	private void WaitAmoment(){
		try {
			Thread.sleep(000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
