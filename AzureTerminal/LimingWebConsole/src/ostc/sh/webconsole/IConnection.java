package ostc.sh.webconsole;

import java.io.InputStream;
import java.io.OutputStream;

/**
 * 
 * @author andliu
 *
 */
public interface IConnection {
	InputStream getInputStream();

	OutputStream getOutputStream();

	void Connect();

	void Disconnect();
}
