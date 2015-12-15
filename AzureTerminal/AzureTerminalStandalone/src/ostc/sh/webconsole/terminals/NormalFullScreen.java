package ostc.sh.webconsole.terminals;

import ostc.sh.webconsole.config.GlobalConfig;
import ostc.sh.webconsole.domain.FontAttributes;

/**
 * 
 * @author andliu
 *
 */
public class NormalFullScreen {
	public char[][] characters;
	public int[][] attributes;
	public int [] lineAttributes;
	
	// the scroll position of the terminal start, in y direction
	public int scroll_region_start_index = 0;
	public int scroll_region_end_index = 0;
	// the character number of the terminal width
	public int terminal_width_in_char = 80;
	// the character number of the terminal height
	public int terminal_height_in_char = 24;
	public int window_x_char_index = 0;// horizontal index with metric character
										// in the show window.
	public int window_y_char_index = 0;// vertical index with metric character.
	private int scrollBackNumber;
	// index of the first line shown in screen.
	public int windowMarginTop = 0;

	public NormalFullScreen() {
		// TODO fix the overflow issue when number bigger than 9999.
		scrollBackNumber = 9999;		
	}

	public char GetCurrentChar(){
		return this.characters[window_y_char_index][window_x_char_index];
	}
	/**
	 * get the string in the selected region from the screen buffer.
	 * @param highX
	 * @param highY
	 * @param lowX
	 * @param lowY
	 * @return
	 */
	public String GetSelection(int highX, int highY, int lowX, int lowY) {
		// TODO bug
		StringBuffer sb = new StringBuffer();

		if (highY == lowY) {
			int left = highX > lowX ? lowX : highX;
			int right = highX > lowX ? highX : lowX;
			for (int i = left; i < right; i++) {
				char tmp = this.characters[lowY][i];
				sb.append(tmp);
			}
		} else {
			if (highX < lowX) {
				for (int i = highY; i <= lowY; i++) {
					for (int j = highX; j < lowX; j++) {
						char tmp = characters[i][j];
						sb.append(tmp);
					}
				}
			} else {
				if (lowY == (highY + 1)) {
					for (int i = highX; i < this.terminal_width_in_char; i++) {
						sb.append(this.characters[highY][i]);
					}
					for (int i = 0; i < lowX; i++) {
						sb.append(this.characters[lowY][i]);
					}
				} else {
					for (int i = highX; i < this.terminal_width_in_char; i++) {
						sb.append(this.characters[highY][i]);
					}

					for (int i = highY; i < lowY; i++) {
						for (int j = 0; j < this.terminal_width_in_char; j++) {
							sb.append(this.characters[i][j]);
						}
					}

					for (int i = 0; i < lowX; i++) {
						sb.append(this.characters[lowY][i]);
					}
				}
			}
		}
		String result = sb.toString();
		return result;
	}
	/**
	 * 
	 * @param str
	 */
	public void VPrint(char str) {
		characters[windowMarginTop + window_y_char_index][window_x_char_index ] = str;			
		attributes[windowMarginTop + window_y_char_index][window_x_char_index ] = GlobalConfig.Instance().getCurrentAttribute();
	}
	/**
	 * 
	 * @param str
	 */
	public void VPrint(String str) {
		for (int i = 0; i < str.length(); i++) {
			char x = str.charAt(i);
			characters[windowMarginTop + window_y_char_index][window_x_char_index + i] = x;			
			attributes[windowMarginTop + window_y_char_index][window_x_char_index + i] = GlobalConfig.Instance().getCurrentAttribute();
		}
	}

	public void PrintForDebug(){
		for (int i = 0; i < this.terminal_height_in_char + windowMarginTop; i++) {
			System.err.print("Line" + i + ":");
			for (int j = 0; j < this.terminal_width_in_char; j++) {
				System.err.print(this.characters[i][j]);
			}
			System.err.println();
		}
	}
	
	//TODO
	public void EraseUp(){
		for (int i = 0; i < this.window_y_char_index; i++) {
			for (int j = 0; j < this.terminal_width_in_char; j++) {
				this.characters[i + windowMarginTop][j] = '\0';
				this.attributes[i + windowMarginTop][j] = FontAttributes.Normal;
			}
		}
		for (int k = 0; k <= this.window_x_char_index; k++) {
			this.characters[this.window_y_char_index + windowMarginTop][k] = '\0';
			this.attributes[this.window_y_char_index + windowMarginTop][k] = FontAttributes.Normal;
		}
	}
	
	//TODO
	public void EraseScreen(){
		EraseUp();
		EraseDown();
	}
	
	//TODO fix the bug?
	public void EraseDown() {
		for (int i =window_x_char_index; i < this.terminal_width_in_char; i++) {
			this.characters[this.window_y_char_index + windowMarginTop][i] = '\0';
			this.attributes[this.window_y_char_index + windowMarginTop][i] = FontAttributes.Normal;
		}

		for (int i = this.window_y_char_index+1; i < this.terminal_height_in_char; i++) {
			for (int j = 0; j < this.terminal_width_in_char; j++) {
				this.characters[i + windowMarginTop][j] = '\0';
				this.attributes[i + windowMarginTop][j] = FontAttributes.Normal;
			}
		}
		
	}
	
	public void Erase(int startX, int startY, int endX, int endY, char ch) {
		for (int i = startY; i <= endY; i++) {
			for (int j = startX; j <= endX; j++) {
				this.characters[i + windowMarginTop][j] = ch;
				this.attributes[i + windowMarginTop][j] = FontAttributes.Normal;
			}
		}
	}

	public void ClearStartToCurrent() {
		for (int i = 0; i <= this.window_x_char_index; i++) {
			this.characters[this.window_y_char_index + windowMarginTop][i] = '\0';
			this.attributes[this.window_y_char_index + windowMarginTop][i] = FontAttributes.Normal;
		}
	}

	public void ClearCurrentToEnd() {
		for (int i = window_x_char_index; i < this.terminal_width_in_char; i++) {
			this.characters[this.window_y_char_index + windowMarginTop][i] = '\0';
			this.attributes[this.window_y_char_index + windowMarginTop][i] = FontAttributes.Normal;
		}
	}
	
	public void ScrollDown(){
		//TODO copy the line attributes.
		if (this.scroll_region_start_index == 0) {
			if (this.scroll_region_end_index == (this.terminal_height_in_char - 1)) {
				for (int y = this.scroll_region_end_index; y >= this.scroll_region_start_index; y--) {
					for (int x = 0; x < this.terminal_width_in_char; x++) {
						this.characters[y + 1 + this.windowMarginTop][x] = this.characters[y + this.windowMarginTop][x];
						this.attributes[y + 1 + this.windowMarginTop][x] = this.attributes[y + this.windowMarginTop][x];
					}
				}
				// clear the first line.				
			} else {
				for (int y = (this.scroll_region_end_index-1); y > this.scroll_region_start_index; y--) {
					for (int x = 0; x < this.terminal_width_in_char; x++) {
						this.characters[y + 1 + this.windowMarginTop][x] = this.characters[y + this.windowMarginTop][x];
						this.attributes[y + 1 + this.windowMarginTop][x] = this.attributes[y + this.windowMarginTop][x];
					}
				}
			}
			this.Erase(0, this.scroll_region_start_index, this.terminal_width_in_char - 1, this.scroll_region_start_index, '\0');
		} else {
			if (this.scroll_region_end_index == (this.terminal_height_in_char - 1)) {
				for (int y = this.scroll_region_end_index; y > this.scroll_region_start_index; y--) {
					for (int x = 0; x < this.terminal_width_in_char; x++) {
						this.characters[y + 1 + this.windowMarginTop][x] = this.characters[y + this.windowMarginTop][x];
						this.attributes[y + 1 + this.windowMarginTop][x] = this.attributes[y + this.windowMarginTop][x];
					}
				}
			} else {
				for (int y = (this.scroll_region_end_index-1); y >= this.scroll_region_start_index; y--) {
					for (int x = 0; x < this.terminal_width_in_char; x++) {
						this.characters[y + 1 + this.windowMarginTop][x] = this.characters[y + this.windowMarginTop][x];
						this.attributes[y + 1 + this.windowMarginTop][x] = this.attributes[y + this.windowMarginTop][x];
					}
				}
			}
			this.Erase(0, this.scroll_region_start_index, this.terminal_width_in_char - 1, this.scroll_region_start_index, '\0');		
		}
	}
	
	public void ScrollUp(){
		if (this.scroll_region_start_index == 0) {
			//clear the scroll region end			
			for (int y = this.terminal_height_in_char; y > this.scroll_region_end_index; y--) {
				for (int x = 0; x < this.characters[y].length; x++) {
					this.characters[y + 1 +this.windowMarginTop][x] = this.characters[y + this.windowMarginTop][x];
					this.attributes[y + 1 +this.windowMarginTop][x] = this.attributes[y + this.windowMarginTop][x];
				}
				//TODO copy the line attribute.
			}
			this.windowMarginTop++;			
		}
		else{
			for (int y = this.scroll_region_start_index + 1; y <= this.scroll_region_end_index; y++) {
				for (int x = 0; x < this.terminal_width_in_char; x++) {
					this.characters[y - 1 + this.windowMarginTop][x] = this.characters[y + this.windowMarginTop][x];
					this.attributes[y - 1 + this.windowMarginTop][x] = this.attributes[y + this.windowMarginTop][x];
				}
			}
			this.Erase(0, this.scroll_region_end_index, this.terminal_width_in_char-1, this.scroll_region_end_index, '\0');
		}		
	}
	
	public void ChangeScrollRegion(int start, int end) {
		this.scroll_region_start_index = start;
		this.scroll_region_end_index   = end;
	}

	public void SetCursorPosition(int x_ch_index, int y_ch_index) {
		this.window_x_char_index = x_ch_index;
		this.window_y_char_index = y_ch_index;
	}	

	public void AdjustWindow(int rows, int cols) {
		//System.err.println("Adjust " + rows + " " + cols);

		this.scroll_region_start_index = 0;
		this.scroll_region_end_index = rows - 1;
		// TODO: calculate the scroll bar location
		if (this.characters == null) {
			this.characters = new char[scrollBackNumber][cols];
			this.attributes = new int[scrollBackNumber][cols];
			this.lineAttributes = new int[scrollBackNumber];
			this.terminal_width_in_char = cols;
			this.terminal_height_in_char = rows;
			return;
		}

		char[][] newCharacters = new char[scrollBackNumber][cols];
		int[][] newAttributes = new int[scrollBackNumber][cols];
		int[] newLineAttributes=new int[scrollBackNumber];
		int rowsToCopy = (this.windowMarginTop + rows) > (this.windowMarginTop + terminal_height_in_char) ? (this.windowMarginTop + terminal_height_in_char) : (this.windowMarginTop + rows);
		int colsToCopy = cols > terminal_width_in_char ? terminal_width_in_char : cols;

		for (int i = 0; i < rowsToCopy; i++) {
			for (int j = 0; j < colsToCopy; j++) {
				char x = this.characters[i][j];
				newCharacters[i][j] = x;

				// reset the attributes
				int f = this.attributes[i][j];
				newAttributes[i][j] = f;
			}
			int l = this.lineAttributes[i];
			newLineAttributes[i] = l;
		}

		this.characters = newCharacters;
		this.attributes = newAttributes;
		this.lineAttributes = newLineAttributes;
		this.terminal_width_in_char = cols;
		this.terminal_height_in_char = rows;
	}
}
