package ostc.sh.webconsole.interfaces;

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
	void requestResize(ITerminal term);
	void Connect();
	boolean IsConnected();
	boolean IsClosed();
	void Disconnect();
}
