package ostc.sh.webconsole.ssh;

import java.io.IOException;

import ostc.sh.webconsole.OTermEnvironment;
import ostc.sh.webconsole.command.Command;
import ostc.sh.webconsole.util.Logger;

public class OutputFlusher implements Runnable {

	@Override
	public void run() {
		char[] cBuf = new char[10000];
		while (true) {
			try {
				try {
					if (OTermEnvironment.Instance().getSshConnection() == null
							|| OTermEnvironment.Instance().getSshConnection()
									.getSession() == null
							|| !OTermEnvironment.Instance().getSshConnection()
									.isConnected()) {
						Thread.sleep(50);
						continue;
					}
					if(OTermEnvironment.Instance().getSshConnection().GetChannelShell().isClosed())
					{
						Logger.Log("channel shell is closed, so disconnect the session.");
						// do the disconnect
						OTermEnvironment.Instance().getSshConnection().DisConnect();
						break;
					}
					int readCount = OTermEnvironment.Instance()
							.getSshConnection().getShellInputStream()
							.read(cBuf);

					if (readCount == -1) {
						Thread.sleep(50);
						continue;
					}
					OTermEnvironment.Instance()
							.AppendOutput(cBuf, 0, readCount);
				} catch (IOException e) {
					Command command = new Command("", new String[]{""});
					command.setAction("Disconnected");
					OTermEnvironment.Instance().getCommandPusher()
							.getCommandQueue().add(command);
					e.printStackTrace();
				}
			} catch (InterruptedException e) {
				e.printStackTrace();
				break;
			}
		}
	}
}
