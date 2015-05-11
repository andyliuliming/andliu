package ostc.sh.webconsole.ssh;

import java.io.IOException;
import java.io.UnsupportedEncodingException;

import ostc.sh.webconsole.config.GlobalConfig;

public class TerminalShellDataBuffer {

	public TerminalShellDataBuffer(TerminalShellChannel connection) {
		this.connection = connection;
	}

	TerminalShellChannel connection = null;
	byte[] dataBuf = new byte[1024];
	int bufIndex = 0;
	int bufDataLength = 0;

	public byte getByte() throws java.io.IOException {
		if (bufDataLength == 0) {
			fillDataBuf();
		}
		bufDataLength--;
		return dataBuf[bufIndex++];
	}

	public char getChar() throws IOException{
		if (bufDataLength == 0) {
			fillDataBuf();
		}
		String stringInBuf = null;
		try {
			// bufIndex
			stringInBuf = new String(dataBuf, bufIndex, bufDataLength, GlobalConfig.Instance().getCurrentEncoding());
			// System.err.print(stringInBuf.charAt(0));
			//this.terminal.PrintChar(stringInBuf.charAt(0));
			String xx = stringInBuf.substring(0, 1);
			byte[] bytear2 = xx.getBytes(GlobalConfig.Instance().getCurrentEncoding());
			bufIndex += bytear2.length;
			this.bufDataLength -= bytear2.length;
			
			return stringInBuf.charAt(0);
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw new IOException();
		}
	}
	
	public void pushByteBack(byte character) throws java.io.IOException {
		bufDataLength++;
		dataBuf[--bufIndex] = character;
	}

	private void fillDataBuf() throws java.io.IOException {
		bufDataLength = this.connection.getInputStream().read(dataBuf, 0,
				dataBuf.length);
		bufIndex = 0;
		if (bufDataLength <= 0) {
			bufDataLength = 0;
			throw new IOException("fillDataBuf");
		} else {
			// print it for debug, we should NOT modify the data here!
			for (int i = 0; i < bufDataLength; i++) {
				if (0x0a == dataBuf[i] || 0x0d == dataBuf[i]) {
					System.out.print((char) dataBuf[i]);
				} else if (0x20 <= dataBuf[i] && dataBuf[i] <= 0x7f) {
					System.out.print((char) dataBuf[i]);
				} else {
					System.out.print("'" + (int) (dataBuf[i] & 0xff) + "'");
				}
			}
		}
	}
}
