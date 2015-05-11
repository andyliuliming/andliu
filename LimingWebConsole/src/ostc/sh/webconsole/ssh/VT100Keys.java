package ostc.sh.webconsole.ssh;

public class VT100Keys {
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

	public static byte[] getCodeENTER() {
		return ENTER;
	}

	public static byte[] getCodeUP() {
		return UP;
	}

	public static byte[] getCodeDOWN() {
		return DOWN;
	}

	public static byte[] getCodeRIGHT() {
		return RIGHT;
	}

	public static byte[] getCodeLEFT() {
		return LEFT;
	}

	public static byte[] getCodeF1() {
		return F1;
	}

	public static byte[] getCodeF2() {
		return F2;
	}

	public static byte[] getCodeF3() {
		return F3;
	}

	public static byte[] getCodeF4() {
		return F4;
	}

	public static byte[] getCodeF5() {
		return F5;
	}

	public static byte[] getCodeF6() {
		return F6;
	}

	public static byte[] getCodeF7() {
		return F7;
	}

	public static byte[] getCodeF8() {
		return F8;
	}

	public static byte[] getCodeF9() {
		return F9;
	}

	public static byte[] getCodeF10() {
		return F10;
	}

	public byte[] getCodeTAB() {
		return tab;
	}
}
