package ostc.sh.webconsole;

import java.util.HashMap;
import java.util.Map;
/**
 * 
 * @author andliu
 *
 */
public class PortalParameter {
	public Map<String, String> QueryMap = new HashMap<String, String>();

	final String host = "host";
	final String username = "username";
	final String code="code";
	
	public String GetHostName(){
		return QueryMap.get(host);
	}
	
	public String GetUserName(){
		return QueryMap.get(username);
	}
	
	public String GetCode(){
		return QueryMap.get(code);
	}
	
	
	public PortalParameter(String query) {
		if (query != null) {
			String[] params = query.split("&");
			// Map<String, String> map = new HashMap<String, String>();
			for (String param : params) {
				String name = param.split("=")[0];
				String value = param.split("=")[1];
				QueryMap.put(name, value);
			}
		}
	}
}
