package ostc.sh.webconsole.util;

public class Logger {
	public static void Log(Object obj) {
		Log(obj.toString());
	}

	public static void Log(String msg) {
		System.err.println(msg);
	}
}
