package ostc.sh.webconsole;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStreamReader;

import javax.swing.JApplet;

import com.jcraft.jsch.ContentIdentity;

public class OTermApplet extends JApplet implements WebFacade {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	/**
	 * Create the applet.
	 */
	public OTermApplet() {
		commandExecuter = new CommandExecuter();
		Thread commandExecuterThread = new Thread(commandExecuter);
		commandExecuterThread.start();

		OutputFlusher outputFlusher = new OutputFlusher();
		Thread outputFlusherThread = new Thread(outputFlusher);
		outputFlusherThread.start();
		//Test();
	}
	
	private void Test(){
		try {
			FileInputStream fis=new FileInputStream("C:\\Users\\andliu\\Desktop\\ssh_private_key");
			InputStreamReader isr = new InputStreamReader(fis);  
	        //int defaultCharBufferSize = 1024*8;  
	        //BufferedReader br = new BufferedReader(isr,defaultCharBufferSize);  
	        BufferedReader br = new BufferedReader(isr);  
	        String data = null;
	        StringBuilder sb=new StringBuilder();
	        while((data = br.readLine())!=null){  
	            System.out.println(data);  
	            sb.append(data);
	            sb.append("\n");
	        } 
	        String privateKey=sb.toString();
	        
	        fis=new FileInputStream("C:\\Users\\andliu\\Desktop\\ssh_private_key.pub");
			isr = new InputStreamReader(fis);  
	        //int defaultCharBufferSize = 1024*8;  
	        //BufferedReader br = new BufferedReader(isr,defaultCharBufferSize);  
	        br = new BufferedReader(isr);  
	        //String data = null;
	        sb=new StringBuilder();
	        while((data = br.readLine())!=null){  
	            System.out.println(data);  
	            sb.append(data);
	            sb.append("\n");
	        } 
	        String publicKey=sb.toString();
	        
	        this.SetAction(Actions.SetHostName	, "fareast-andliu.cloudapp.net");
	        this.SetAction(Actions.SetUserName, "azureuser");
	        this.SetAction(Actions.SetPassword, "");
	        this.SetAction(Actions.SetPrivateKey, privateKey);
	        this.SetAction(Actions.SetPublicKey, publicKey);
	        this.SetAction(Actions.Login, "");
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	public StringBuilder sb;
	private CommandExecuter commandExecuter;

	@Override
	public void SetAction(String action, String parameter) {
		commandExecuter.getCommandQueue().add(new Command(action, parameter));
	}

	@Override
	public String GetOutput() {
		return OTermEnvironment.Instance().GetOutput();
	}

}
