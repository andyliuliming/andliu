package ostc.sh.webconsole.ssh;

import java.io.IOException;

import ostc.sh.webconsole.OTermEnvironment;

public class OutputFlusher implements Runnable {

	@Override
	public void run() {
		// TODO Auto-generated method stub
		while (true) {
			try {
				if (OTermEnvironment.Instance().isSignedIn()) {
					try {
						char[] cBuf = new char[10000];
						int readCount = OTermEnvironment.Instance()
								.getShellInputStream().read(cBuf);
						OTermEnvironment.Instance().AppendOutput(cBuf, 0,
								readCount);
					} catch (IOException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
				} else {
					Thread.sleep(50);
				}
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}

}
