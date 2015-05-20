package ostc.sh.webconsole.ssh;

import java.io.IOException;

import ostc.sh.webconsole.OTermEnvironment;

public class OutputFlusher implements Runnable {	

	@Override
	public void run() {
		while (true) {
			try {
				if (OTermEnvironment.Instance().getSignedInStatus() != null && OTermEnvironment.Instance().getSignedInStatus().equals("success")) {
					try {
						char[] cBuf = new char[10000];
						int readCount = OTermEnvironment.Instance().getSshConnection().getShellInputStream().read(cBuf);
						
						if(readCount==-1){
							Thread.sleep(50);
							continue;
						}
						OTermEnvironment.Instance().AppendOutput(cBuf, 0, readCount);
					} catch (IOException e) {
						e.printStackTrace();
					}
				} else {
					Thread.sleep(50);
				}
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
	}
}
