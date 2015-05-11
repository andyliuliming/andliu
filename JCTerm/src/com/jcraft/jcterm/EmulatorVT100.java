/* -*-mode:java; c-basic-offset:2; -*- */
/* JCTerm
 * Copyright (C) 2002,2007 ymnk, JCraft,Inc.
 *  
 * Written by: ymnk<ymnk@jcaft.com>
 *   
 *   
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Library General Public License
 * as published by the Free Software Foundation; either version 2 of
 * the License, or (at your option) any later version.

 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Library General Public License for more details.
 * 
 * You should have received a copy of the GNU Library General Public
 * License along with this program; if not, write to the Free Software
 * Foundation, Inc., 675 Mass Ave, Cambridge, MA 02139, USA.
 */

package com.jcraft.jcterm;

import java.io.InputStream;

public class EmulatorVT100 extends Emulator {

	public EmulatorVT100(Term term, InputStream in) {
		super(term, in);
	}

	public void setInputStream(InputStream in) {
		this.in = in;
	}

	public void setTerm(Term term) {
		this.term = term;
	}

	public void start() {
		reset();

		int[] intarg = new int[10];
		int intargi = 0;

		x = 0;
		y = char_height;

		byte b;

		try {
			while (true) {

				b = getChar();

				if (b == 0) {
					continue;
				}

				if (b == 0x1b) {
					b = getChar();

					if (b == 'M') { // sr \EM sr scroll text down (P)
						scroll_reverse();
						continue;
					}

					if (b == 'D') { // sf
						scroll_forward();
						continue;
					}

					if (b == '7') {
						save_cursor();
						continue;
					}

					if (b == '(') {
						b = getChar();
						if (b == 'B') {
							b = getChar();
							if (b == 0x1b) {
								b = getChar();
								if (b == ')') {
									b = getChar();
									if (b == '0') { // enacs
										ena_acs();
										continue;
									} else {
										pushChar((byte) '0');
									}
								} else {
									pushChar((byte) ')');
								}
							} else {
								pushChar((byte) 0x1b);
							}
						} else {
							pushChar((byte) 'B');
						}
					}

					if (b == '>') {
						b = getChar(); // 0x1b
						b = getChar(); // '['
						b = getChar(); // '?'
						b = getChar(); // '3'
						b = getChar(); // 'l'
						b = getChar(); // 0x1b
						b = getChar(); // '['
						b = getChar(); // '?'
						b = getChar(); // '4'
						b = getChar(); // 'l'
						b = getChar(); // 0x1b
						b = getChar(); // '['
						b = getChar(); // '?'
						b = getChar(); // '5'
						b = getChar(); // 'l'
						b = getChar(); // 0x1b
						b = getChar(); // '['
						b = getChar(); // '?'
						b = getChar(); // '7'
						b = getChar(); // 'h'
						b = getChar(); // 0x1b
						b = getChar(); // '['
						b = getChar(); // '?'
						b = getChar(); // '8'
						b = getChar(); // 'h'

						reset_2string();
						continue;
					}

					if (b != '[') {
						System.out.print("@11: " + new Character((char) b)
								+ "[" + Integer.toHexString(b & 0xff) + "]");
						pushChar(b);
						continue;
					}

					intargi = 0;
					intarg[intargi] = 0;
					int digit = 0;

					while (true) {
						b = getChar();
						if (b == ';') {
							if (digit > 0) {
								intargi++;
								intarg[intargi] = 0;
								digit = 0;
							}
							continue;
						}

						if ('0' <= b && b <= '9') {
							intarg[intargi] = intarg[intargi] * 10 + (b - '0');
							digit++;
							continue;
						}

						pushChar(b);
						break;
					}

					b = getChar();

					if (b == 'm') {

						if (digit == 0 && intargi == 0) {
							b = getChar();
							if (b == 0x0f) { // sgr0
								exit_attribute_mode();
								continue;
							} else { // rmso, rmul
								exit_underline_mode();
								exit_standout_mode();
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
								exit_standout_mode();
								continue;
							case 1: // Bright // bold
								enter_bold_mode();
								continue;
							case 2: // Dim
								break;
							case 4: // Underline
								enter_underline_mode();
								continue;
							case 5: // Blink
							case 8: // Hidden
								break;
							case 7: // reverse
								enter_reverse_mode();
								continue;
							case 30:
							case 31:
							case 32:
							case 33:
							case 34:
							case 35:
							case 36:
							case 37:
								tmp = term.getColor(intarg[i] - 30);
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
								tmp = term.getColor(intarg[i] - 40);
								if (tmp != null)
									bg = tmp;
								break;
							default:
								break;
							}
							if (fg != null)
								term.setForeGround(fg);
							if (bg != null)
								term.setBackGround(bg);
						}
						continue;
					}

					if (b == 'r') { // csr
						change_scroll_region(intarg[0], intarg[1]);
						continue;
					}

					if (b == 'H') { // cup

						if (digit == 0 && intargi == 0) {
							intarg[0] = intarg[1] = 1;
						}

						cursor_address(intarg[0], intarg[1]);
						continue;
					}

					if (b == 'B') { // cud
						parm_down_cursor(intarg[0]);
						continue;
					}

					if (b == 'D') { // cub
						parm_left_cursor(intarg[0]);
						continue;
					}

					if (b == 'C') { // cuf
						if (digit == 0 && intargi == 0) {
							intarg[0] = 1;
						}
						parm_right_cursor(intarg[0]);
						continue;
					}

					if (b == 'K') { // el

						if (digit == 0 && intargi == 0) { // el
							clr_eol();
						} else { // el1
							clr_bol();
						}
						continue;
					}

					if (b == 'J') {
						clr_eos();
						continue;
					}

					if (b == 'A') { // cuu
						if (digit == 0 && intargi == 0) {
							intarg[0] = 1;
						}
						parm_up_cursor(intarg[0]);
						continue;
					}

					if (b == '?') {
						b = getChar();
						if (b == '1') {
							b = getChar();
							if (b == 'l' || b == 'h') {
								b = getChar();
								if (b == 0x1b) {
									b = getChar();
									if (b == '>' || // rmkx , leave
													// 'keybroad_transmit' mode
											b == '=') { // smkx , enter
														// 'keyborad_transmit'
														// mode
										// TODO
										continue;
									}
								}
							} else if (b == 'h') {
								b = getChar();
								if (b == 0x1b) {
									b = getChar();
									if (b == '=') { // smkx enter
													// 'keyborad_transmit' mode
										continue;
									}
								}
							}
						} else if (b == '7') {
							b = getChar();
							if (b == 'h') { // smam
								// TODO
								// System.out.println("turn on automatic magins");
								continue;
							} else if (b == 'l') { // rmam
								// TODO
								// System.out.println("turn off automatic magins");
								continue;
							}
							pushChar(b);
							b = '7';
						} else {
						}
					}

					if (b == 'h') { // kh \Eh home key
						continue;
					}

					System.out.println("unknown "
							+ Integer.toHexString(b & 0xff) + " "
							+ new Character((char) b) + ", " + intarg[0] + ", "
							+ intarg[1] + ", " + intarg[2] + ",intargi="
							+ intargi);
					continue;
				}

				if (b == 0x07) { // bel ^G
					bell();
					continue;
				}

				if (b == 0x09) { // ht(^I)
					tab();
					continue;
				}

				if (b == 0x0f) { // rmacs ^O // end alternate character set (P)
					exit_alt_charset_mode();
					continue;
				}

				if (b == 0x0e) { // smacs ^N // start alternate character set
									// (P)
					enter_alt_charset_mode();
					continue;
				}

				if (b == 0x0d) {
					carriage_return();
					continue;
				}

				if (b == 0x08) {
					cursor_left();
					continue;
				}

				if (b == 0x0a) { // '\n'
					// System.out.println("x="+x+",y="+y);
					cursor_down();
					// check_region();
					continue;
				}

				if (b != 0x0a) { // !'\n'
					pushChar(b);
					draw_text();
					continue;
				}
			}
		} catch (Exception e) {
		}
	}

	private static byte[] ENTER = { (byte) 0x0d };
	private static byte[] UP = { (byte) 0x1b, (byte) 0x4f, (byte) 0x41 };
	private static byte[] DOWN = { (byte) 0x1b, (byte) 0x4f, (byte) 0x42 };
	private static byte[] RIGHT = { (byte) 0x1b, (byte) /* 0x5b */0x4f,
			(byte) 0x43 };
	private static byte[] LEFT = { (byte) 0x1b, (byte) /* 0x5b */0x4f,
			(byte) 0x44 };
	private static byte[] F1 = { (byte) 0x1b, (byte) 0x4f, (byte) 'P' };
	private static byte[] F2 = { (byte) 0x1b, (byte) 0x4f, (byte) 'Q' };
	private static byte[] F3 = { (byte) 0x1b, (byte) 0x4f, (byte) 'R' };
	private static byte[] F4 = { (byte) 0x1b, (byte) 0x4f, (byte) 'S' };
	private static byte[] F5 = { (byte) 0x1b, (byte) 0x4f, (byte) 't' };
	private static byte[] F6 = { (byte) 0x1b, (byte) 0x4f, (byte) 'u' };
	private static byte[] F7 = { (byte) 0x1b, (byte) 0x4f, (byte) 'v' };
	private static byte[] F8 = { (byte) 0x1b, (byte) 0x4f, (byte) 'I' };
	private static byte[] F9 = { (byte) 0x1b, (byte) 0x4f, (byte) 'w' };
	private static byte[] F10 = { (byte) 0x1b, (byte) 0x4f, (byte) 'x' };
	private static byte[] tab = { (byte) 0x09 };

	public byte[] getCodeENTER() {
		return ENTER;
	}

	public byte[] getCodeUP() {
		return UP;
	}

	public byte[] getCodeDOWN() {
		return DOWN;
	}

	public byte[] getCodeRIGHT() {
		return RIGHT;
	}

	public byte[] getCodeLEFT() {
		return LEFT;
	}

	public byte[] getCodeF1() {
		return F1;
	}

	public byte[] getCodeF2() {
		return F2;
	}

	public byte[] getCodeF3() {
		return F3;
	}

	public byte[] getCodeF4() {
		return F4;
	}

	public byte[] getCodeF5() {
		return F5;
	}

	public byte[] getCodeF6() {
		return F6;
	}

	public byte[] getCodeF7() {
		return F7;
	}

	public byte[] getCodeF8() {
		return F8;
	}

	public byte[] getCodeF9() {
		return F9;
	}

	public byte[] getCodeF10() {
		return F10;
	}

	public byte[] getCodeTAB() {
		return tab;
	}
}
