package ostc.sh.webconsole.util;

import ostc.sh.webconsole.config.GlobalConfig;

public class Logger {
	public static void Log(Object obj){
		Log(obj.toString());
	}
	public static void Log(String msg){
		if (GlobalConfig.Instance().isPrintVerbose()) {
			System.err.println(msg);
		}
	}
}
