package ostc.sh.webconsole.ssh;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

import ostc.sh.webconsole.interfaces.IConnection;
import ostc.sh.webconsole.interfaces.ITerminal;

import com.jcraft.jsch.ChannelShell;
import com.jcraft.jsch.JSchException;

/**
 * 
 * @author andliu
 *
 */
public class TerminalShellChannel implements IConnection {

	ChannelShell channelShell = null;
	InputStream inputStream = null;
	OutputStream outputStream = null;

	public TerminalShellChannel(ChannelShell channelShell) {
		this.channelShell = channelShell;
		try {
			this.inputStream = this.channelShell.getInputStream();
			this.outputStream = this.channelShell.getOutputStream();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Override
	public InputStream getInputStream() {
		return inputStream;
	}

	@Override
	public OutputStream getOutputStream() {
		return outputStream;
	}

	@Override
	public void requestResize(ITerminal term) {
		// TODO Auto-generated method stub
		int c = term.CurrentTerminalWidth();
		int r = term.CurrentTerminalHeight();
		if (channelShell != null) {
			(channelShell).setPtySize(c, r, c * term.CurrentCharWidth(), r
					* term.CurrentCharHeight());
		}
	}

	@Override
	public void Connect() {
		// TODO Auto-generated method stub
		try {
			this.channelShell.connect();
		} catch (JSchException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Override
	public void Disconnect() {
		// TODO Auto-generated method stub
		this.channelShell.disconnect();
	}

	@Override
	public boolean IsConnected() {
		return this.channelShell.isConnected();
	}

	@Override
	public boolean IsClosed() {
		// TODO Auto-generated method stub
		return this.channelShell.isClosed();
	}

}
