package ostc.sh.webconsole.domain;

import java.util.Hashtable;

import com.jcraft.jsch.Channel;
import ostc.sh.webconsole.config.GlobalConfig;

/**
 * 
 * @author andliu
 *
 */
public class VT100Keys {
	private static byte[] Zero = {(byte) '0' };
	private static byte[] Zero_Application = { (byte) 0x1b, (byte) 'O', (byte) 'p' };
	
	private static byte[] One = {(byte) '1' };
	private static byte[] One_Application = { (byte) 0x1b, (byte) 'O', (byte) 'q' };
	
	private static byte[] Two = {(byte) '2' };
	private static byte[] Two_Application = { (byte) 0x1b, (byte) 'O', (byte) 'r' };
	
	private static byte[] Three = {(byte) '3' };
	private static byte[] Three_Application = { (byte) 0x1b, (byte) 'O', (byte) 's' };
	
	private static byte[] Four = {(byte) '4' };
	private static byte[] Four_Application = { (byte) 0x1b, (byte) 'O', (byte) 't' };
	
	private static byte[] Five = {(byte) '5' };
	private static byte[] Five_Application = { (byte) 0x1b, (byte) 'O', (byte) 'u' };
	
	private static byte[] Six = {(byte) '6' };
	private static byte[] Six_Application = { (byte) 0x1b, (byte) 'O', (byte) 'v' };
	
	private static byte[] Seven = {(byte) '7' };
	private static byte[] Seven_Application = { (byte) 0x1b, (byte) 'O', (byte) 'w' };
	
	private static byte[] Eight = {(byte) '8' };
	private static byte[] Eight_Application = { (byte) 0x1b, (byte) 'O', (byte) 'x' };
	
	private static byte[] Nine = {(byte) '9' };
	private static byte[] Nine_Application = { (byte) 0x1b, (byte) 'O', (byte) 'y' };	
	
	private static byte[] Enter = { (byte) 0x0d };
	private static byte[] Enter_Applicaiton={ (byte) 0x0d };//{(byte)0x1b,(byte)'O',(byte)'M'};
	
	private static byte[] Up = { (byte) 0x1b, (byte) '[', (byte) 'A' };
	private static byte[] Up_Application = { (byte) 0x1b, (byte) 'O', (byte) 'A' };
	private static byte[] Down = { (byte) 0x1b, (byte) '[', (byte) 'B'};
	private static byte[] Down_Application = { (byte) 0x1b, (byte) 'O', (byte) 'B'};
	private static byte[] Right = { (byte) 0x1b, (byte)  '[', (byte) 'C' };
	private static byte[] Right_Application = { (byte) 0x1b, (byte) 'O', (byte) 'C' };
	private static byte[] Left = { (byte) 0x1b, (byte)  '[', (byte) 'D' };
	private static byte[] Left_Application = { (byte) 0x1b, (byte) 'O', (byte) 'D' };	
	
	private static byte[] F1 = { (byte) 0x1b, (byte) 'O', (byte) 'P' };
	private static byte[] F2 = { (byte) 0x1b, (byte) 'O', (byte) 'Q' };
	private static byte[] F3 = { (byte) 0x1b, (byte) 'O', (byte) 'R' };
	private static byte[] F4 = { (byte) 0x1b, (byte) 'O', (byte) 'S' };
	private static byte[] F5 = { (byte) 0x1b, (byte) 'O', (byte) 't' };
	private static byte[] F6 = { (byte) 0x1b, (byte) 'O', (byte) 'u' };
	private static byte[] F7 = { (byte) 0x1b, (byte) 'O', (byte) 'v' };
	private static byte[] F8 = { (byte) 0x1b, (byte) 'O', (byte) 'I' };
	private static byte[] F9 = { (byte) 0x1b, (byte) 'O', (byte) 'w' };
	private static byte[] F10 = { (byte) 0x1b, (byte) 'O', (byte) 'x' };
	
	private static byte[] Tab = { (byte) 0x09 };
	
	private static byte[] Home = { (byte) 0x1b, (byte) '[', (byte) 'H' };
	private static byte[] End = { (byte) 0x1b, (byte) '[', (byte) '4' ,(byte)'~'};

	private static byte[] Page_Up = { (byte) 0x1b, (byte) '[', (byte) '5', (byte) '~' };
	private static byte[] Page_Down = { (byte) 0x1b, (byte) '[', (byte) '6', (byte) '~' };
	// esc [ 
	//TODO Test this, page up/page down.
	/*<Key>BackSpace: string(0x7F)\n\
    <Key>Delete:    string("\033[3~")\n\
    <Key>Home:      string("\033[1~")\n\
    <Key>End:       string("\033[4~")*/
	private static byte[] Delete = {(byte) 0x1b, (byte) '[', (byte) '3', (byte) '~'};	
	private static byte[] Delete_Application = { (byte)'^' ,(byte) 'H' };
	private static byte[] Insert={(byte) 0x1b, (byte) '[',(byte)'2',(byte)'~'};
	private static byte[] Insert_Application={(byte) 0x1b, (byte) '[',(byte)'2',(byte)'~'};
	
	
	public static byte[] getCodeDelete(){
		if(GlobalConfig.Instance().isCurrentKeypadModeApplication()){
			return Delete_Application;
		}
		return Delete;
	}
	
	
	public static byte[] getCodeInsert(){
		return Insert;
	}
	
	public static byte[] getCodeHome() {
		return Home;
	}
	
	public static byte[] getCodeEnd() {
		return End;
	}
	
	public static byte[] getCodePageUp() {
		return Page_Up;
	}
	
	public static byte[] getCodePageDown() {
		return Page_Down;
	}
	
	public static byte[] getCodeEnter() {
		if(GlobalConfig.Instance().isCurrentKeypadModeApplication()){
			return Enter_Applicaiton;
		}
		return Enter;
	}

	public static byte[] getCodeUp() {
		if (GlobalConfig.Instance().isCurrentCursorKeyModeApplication()) {
			return Up_Application;
		}
		return Up;
	}

	public static byte[] getCodeDown() {
		if (GlobalConfig.Instance().isCurrentCursorKeyModeApplication()) {
			return Down_Application;
		}
		return Down;
	}

	public static byte[] getCodeRIGHT() {
		if (GlobalConfig.Instance().isCurrentCursorKeyModeApplication()) {
			return Right_Application;
		}
		return Right;
	}

	public static byte[] getCodeLEFT() {
		if (GlobalConfig.Instance().isCurrentCursorKeyModeApplication()) {
			return Left_Application;
		}
		return Left;
	}
	
	public static byte[] getZero(){
		/*if (GlobalConfig.Instance().isCurrentCursorKeyModeApplication()) {
			return Zero_Application;
		}*/
		return Zero;
	}

	public static byte[] getOne(){
		/*if (GlobalConfig.Instance().isCurrentCursorKeyModeApplication()) {
			return One_Application;
		}*/
		return One;
	}
	
	public static byte[] getTwo(){
		if (GlobalConfig.Instance().isCurrentCursorKeyModeApplication()) {
			return Two_Application;
		}
		return Two;
	}
	
	public static byte[] getThree(){
		if (GlobalConfig.Instance().isCurrentCursorKeyModeApplication()) {
			return Three_Application;
		}
		return Three;
	}
	
	public static byte[] getFour(){
		if (GlobalConfig.Instance().isCurrentCursorKeyModeApplication()) {
			return Four_Application;
		}
		return Four;
	}
	
	public static byte[] getFive(){
		if (GlobalConfig.Instance().isCurrentCursorKeyModeApplication()) {
			return Five_Application;
		}
		return Five;
	}
	
	public static byte[] getSix(){
		if (GlobalConfig.Instance().isCurrentCursorKeyModeApplication()) {
			return Six_Application;
		}
		return Six;
	}
	
	public static byte[] getSeven(){
		if (GlobalConfig.Instance().isCurrentCursorKeyModeApplication()) {
			return Seven_Application;
		}
		return Seven;
	}
	public static byte[] getEight(){
		if (GlobalConfig.Instance().isCurrentCursorKeyModeApplication()) {
			return Eight_Application;
		}
		return Eight;
	}
	
	public static byte[] getNine(){
		if (GlobalConfig.Instance().isCurrentCursorKeyModeApplication()) {
			return Nine_Application;
		}
		return Nine;
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

	public static byte[] getCodeTab() {
		return Tab;
	}
}
