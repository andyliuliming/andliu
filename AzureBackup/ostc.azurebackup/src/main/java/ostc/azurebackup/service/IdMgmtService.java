package ostc.azurebackup.service;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;

public class IdMgmtService {
	
	public void GetContainerRegistrationStatus(String token){
		String request = "https://pod01-id1.ea.backup.windowsazure.com/IdMgmtService.svc";
		URL url;
		try {
			url = new URL(request);
			HttpURLConnection connection = (HttpURLConnection) url.openConnection();           
		    connection.setDoOutput( true );
		    connection.setDoInput ( true );
		    connection.setUseCaches( false );
		    connection.setInstanceFollowRedirects(false); 
		    connection.setRequestMethod("POST"); 
		    connection.setRequestProperty("Content-Type", "text/xml; charset=utf-8"); 
		    connection.setRequestProperty("charset", "utf-8");
		    connection.setRequestProperty("Authorization", "ACSOAuth2Token " + token);
		    connection.setRequestProperty("DiagClientContextHeader","0000000002_79aa9768-eefa-4c35-98d2-540443920b11_471ef13e-6132-4321-b440-c96c95a10fef");
		    connection.setRequestProperty("WorkitemClientContextHeader","86c17989-b620-4de2-9905-0818b2d965ba");
		    connection.setRequestProperty("AgentVersionClientContextHeader","2.0.8694.0");
		    connection.setRequestProperty("SOAPAction","http://windowscloudbackup.com/IdMgmt/V2011_09/IIdentityManagement/GetContainerRegistrationStatus");
			//Host: pod01-prot1.ea.backup.windowsazure.com
			//Content-Length: 470
			//Expect: 100-continue
		    //connection.setRequestProperty("Accept-Encoding","gzip, deflate");
			//Connection: Keep-Alive
			
		    connection.connect();
			DataOutputStream wr = new DataOutputStream(
					connection.getOutputStream());
			String envelop = "<s:Envelope xmlns:s=\"http://schemas.xmlsoap.org/soap/envelope/\"><s:Body><GetContainerRegistrationStatus xmlns=\"http://windowscloudbackup.com/IdMgmt/V2011_09\"><registrationStatusArgs i:type=\"RegistrationStatusArgs_V2012_12\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ContractVersion>V2012_12</ContractVersion><ContainerUniqueueName>andliudevo.fareast.corp.microsoft.com</ContainerUniqueueName></registrationStatusArgs></GetContainerRegistrationStatus></s:Body></s:Envelope>";
			
			wr.write(envelop.getBytes());
			
			
			String line;
			BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));

			while ((line = reader.readLine()) != null) {
			    System.out.println(line);
			}
			wr.close();
			reader.close(); 
		} catch (MalformedURLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ProtocolException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 
	    
	}
}
