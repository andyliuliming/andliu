package ostc.sh.webconsole;

import java.io.IOException;

public class OutputFlusher implements Runnable {

	@Override
	public void run() {
		// TODO Auto-generated method stub
		while (true) {
			try {
				if (OTermEnvironment.Instance().isSignedIn()) {
					try {
						char[] cBuf = new char[100];
						int readCount = OTermEnvironment.Instance()
								.getShellInputStream().read(cBuf);
						OTermEnvironment.Instance().AppendOutput(cBuf,0,readCount);
					} catch (IOException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
				}
				Thread.sleep(50);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}

}
