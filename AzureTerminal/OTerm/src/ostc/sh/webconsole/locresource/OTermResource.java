package ostc.sh.webconsole.locresource;

import java.util.Locale;
import java.util.ResourceBundle;

/**
 * 
 * @author andliu
 *
 */
public class OTermResource {
	ResourceBundle rb;
	static OTermResource config = null;
	static Object object = new Object();

	public static OTermResource Instance() {
		if (config == null) {
			synchronized (object) {
				config = new OTermResource();
			}
		}
		return config;
	}

	private OTermResource() {
		Locale locale = Locale.getDefault();
		rb = ResourceBundle.getBundle("message", locale);
	}

	public String GetString(String resourceName) {
		try {
			String resourceStr = rb.getString(resourceName);
			return resourceStr;
		} catch (Exception e) {

		}
		return resourceName;
	}
}
