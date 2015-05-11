package ostc.sh.webconsole.error;

import com.jcraft.jsch.JSchException;

public class NetworkException extends Exception {

	public NetworkException(String msg, JSchException e) {
		super(msg, e);
	}

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

}
