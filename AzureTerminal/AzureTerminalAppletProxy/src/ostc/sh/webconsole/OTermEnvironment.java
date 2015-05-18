package ostc.sh.webconsole;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;

import ostc.sh.webconsole.ssh.IdentityInfo;
import ostc.sh.webconsole.ssh.SSHConnection;

import com.jcraft.jsch.JSchException;

public class OTermEnvironment {
	static Object object = new Object();
	static OTermEnvironment environment;

	private boolean signedIn;
	private IdentityInfo identityInfo;
	private SSHConnection sshConnection;

	private int width;
	private int height;
	public static OTermEnvironment Instance() {
		if (environment == null) {
			synchronized (object) {
				environment = new OTermEnvironment();
			}
		}
		return environment;
	}

	private OTermEnvironment() {
		identityInfo = new IdentityInfo();
		sshConnection = new SSHConnection(identityInfo);
	}

	public IdentityInfo getIdentityInfo() {
		return identityInfo;
	}

	public void setIdentityInfo(IdentityInfo identityInfo) {
		this.identityInfo = identityInfo;
	}

	public SSHConnection getSshConnection() {
		return sshConnection;
	}

	public void setSshConnection(SSHConnection sshConnection) {
		this.sshConnection = sshConnection;
	}

	private BufferedReader isr = null;

	public BufferedReader getShellInputStream() {
		if (isr == null) {
			try {
				int fileSize = 1024 * 1024;
				InputStream inputStream = OTermEnvironment.Instance()
						.getSshConnection().GetChannelShell().getInputStream();

				isr = new BufferedReader(new InputStreamReader(inputStream,
						"UTF-8"), fileSize);
			} catch (IOException | JSchException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return isr;
	}

	private BufferedWriter isw = null;

	public BufferedWriter getShellOutputStream() {
		if (isw == null) {
			try {
				int fileSize = 1024 * 1024;
				OutputStream inputStream = OTermEnvironment.Instance()
						.getSshConnection().GetChannelShell().getOutputStream();
				isw = new BufferedWriter(new OutputStreamWriter(inputStream,
						"UTF-8"), fileSize);
			} catch (IOException | JSchException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return isw;
	}

	public boolean isSignedIn() {
		return signedIn;
	}

	public void setSignedIn(boolean signedIn) {
		this.signedIn = signedIn;
	}

	
	
	private Object outputLock = new Object();
	public StringBuilder sb = new StringBuilder();
	
	public String GetOutput() {
		synchronized (outputLock) {
			String output = sb.toString();
			sb = new StringBuilder();
			
			return output;
		}
	}

	public void AppendOutput(char[] output, int offset, int length) {
		synchronized (outputLock) {
			// StringBuilder sb = new StringBuilder();
			for(int i=0;i<length;i++){
				System.err.print(output[i+offset]);
			}
			sb.append(output, offset, length);
		}
	}

	public int getHeight() {
		return height;
	}

	public void setHeight(int height) {
		this.height = height;
	}

	public int getWidth() {
		return width;
	}

	public void setWidth(int width) {
		this.width = width;
	}

}
