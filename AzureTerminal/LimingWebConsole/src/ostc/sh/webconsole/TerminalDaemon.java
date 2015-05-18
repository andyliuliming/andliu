package ostc.sh.webconsole;

import java.io.IOException;

import ostc.sh.webconsole.ssh.WebConsoleConnection;

/**
 * this is used to pass the input to the ssh session, and get the output from
 * the session session. and uses the WebConsoleTerminal to show the result.
 * 
 * @author andliu
 *
 */
public class TerminalDaemon implements Runnable {

	WebConsoleConnection connection = null;
	ITerminal terminal=null;
	public TerminalDaemon(WebConsoleConnection connection, ITerminal terminal) {
		this.terminal=terminal;
		this.connection = connection;
	}

	byte[] dataBuf = new byte[1024];
	int bufIndex = 0;
	int bufDataLength = 0;

	private byte getChar() throws java.io.IOException {
		if (bufDataLength == 0) {
			fillDataBuf();
		}
		bufDataLength--;

		return dataBuf[bufIndex++];
	}

	private void pushChar(byte foo) throws java.io.IOException {
		bufDataLength++;
		dataBuf[--bufIndex] = foo;
	}
	
	private void fillDataBuf() throws java.io.IOException {
		bufDataLength = bufIndex = 0;
		bufDataLength = this.connection.getInputStream().read(dataBuf,
				bufIndex, dataBuf.length - bufIndex);
		if (bufDataLength <= 0) {
			bufDataLength = 0;
			throw new IOException("fillDataBuf");
		}
	}

	private void drawIt(){
		byte b;
		try {
			b = getChar();
			// try to get one line of ther character bytes
			byte[] bytes = new byte[1];
			
			bytes[0] = b;
			this.terminal.drawBytes(bytes, 0, 0, 0, 0);
			/*pushChar(b);
			int foo = getASCII(term_width - (x / char_width));
			if (foo != 0) {
				term.clear_area(x, y - char_height, x + foo * char_width, y);
				term.drawBytes(buf, bufs - foo, foo, x, y);
			} else {
				foo = 1;
				term.clear_area(x, y - char_height, x + foo * char_width, y);
				b1[0] = getChar();
				term.drawBytes(b1, 0, foo, x, y);
			}
			x += (char_width * foo);
			w = char_width * foo;
			h = char_height;
			*/
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
	@Override
	public void run() {
		byte b;
		
		int[] intarg = new int[10];
		int intargi = 0;
		
		try {
			while (true) {
				b = getChar();
				if (b == 0) {
					continue;
				}
				// 0x1b is Escape character.
				if (b == 0x1b) {
					if(b=='['){						
						intargi = 0;
						intarg[intargi] = 0;
						int digitNumber = 0;

						while (true) {
							b = getChar();
							if (b == ';') {
								if (digitNumber > 0) {
									intargi++;
									intarg[intargi] = 0;
									digitNumber = 0;
								}
								continue;
							}

							if ('0' <= b && b <= '9') {
								intarg[intargi] = intarg[intargi] * 10 + (b - '0');
								digitNumber++;
								continue;
							}

							pushChar(b);
							break;
						}
						
						b = getChar();

						if (b == 'm') {
							if (digitNumber == 0 && intargi == 0) {
								b = getChar();
								if (b == 0x0f) { // sgr0
									//exit_attribute_mode();
									continue;
								} else { // rmso, rmul
									//exit_underline_mode();
									//exit_standout_mode();
									pushChar(b);
									continue;
								}
							}

							for (int i = 0; i <= intargi; i++) {
								Object fg = null;
								Object bg = null;
								Object tmp = null;

								switch (intarg[i]) {
								case 0: // Reset all attributes
									//exit_standout_mode();
									continue;
								case 1: // Bright // bold
									//enter_bold_mode();
									continue;
								case 2: // Dim
									break;
								case 4: // Underline
									//enter_underline_mode();
									continue;
								case 5: // Blink
								case 8: // Hidden
									break;
								case 7: // reverse
									//enter_reverse_mode();
									continue;
								case 30:
								case 31:
								case 32:
								case 33:
								case 34:
								case 35:
								case 36:
								case 37:
									//tmp = term.getColor(intarg[i] - 30);
									if (tmp != null)
										fg = tmp;
									break;
								case 40:
								case 41:
								case 42:
								case 43:
								case 44:
								case 45:
								case 46:
								case 47:
									//tmp = term.getColor(intarg[i] - 40);
									if (tmp != null)
										bg = tmp;
									break;
								default:
									break;
								}
								//if (fg != null)
									//term.setForeGround(fg);
								//if (bg != null)
									//term.setBackGround(bg);
							}
							continue;
						}
					}					
				}
				if (b == 0x0a) { // '\n'
					// System.out.println("x="+x+",y="+y);
					//cursor_down();
					// check_region();
					continue;
				}

				if (b != 0x0a) { // !'\n'
					pushChar(b);

					drawIt();
					//draw_text();
					continue;
				}
			}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

}
