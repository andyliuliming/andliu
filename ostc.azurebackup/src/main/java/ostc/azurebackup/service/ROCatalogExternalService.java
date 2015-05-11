package ostc.azurebackup.service;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;

public class ROCatalogExternalService {
	public void CallROCatalogService(String token){
		String request = "https://pod01-prot1.ea.backup.windowsazure.com/ROCatalogExternalService.svc";
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
		    connection.setRequestProperty("Authorization", "ACSOAuth2Token http%3a%2f%2fschemas.windowscloudbackup.com%2f2010%2f10%2fidentity%2fclaims%2fresourceid=8915727938517205199&http%3a%2f%2fschemas.windowscloudbackup.com%2f2010%2f10%2fidentity%2fclaims%2fversion=0&http%3a%2f%2fschemas.windowscloudbackup.com%2f2010%2f10%2fidentity%2fclaims%2fidmgmtstampuri=https%3a%2f%2fpod01-id1.ea.backup.windowsazure.com&http%3a%2f%2fschemas.windowscloudbackup.com%2f2010%2f10%2fidentity%2fclaims%2facstokenversion=V2011_09&http%3a%2f%2fschemas.windowscloudbackup.com%2f2010%2f10%2fidentity%2fclaims%2fgeoid=ea-pod01-a7o8l&http%3a%2f%2fschemas.windowscloudbackup.com%2f2010%2f10%2fidentity%2fclaims%2fcontainerid=234318&http%3a%2f%2fschemas.windowscloudbackup.com%2f2010%2f10%2fidentity%2fclaims%2fcontainerstampuri=https%3a%2f%2fpod01-prot1.ea.backup.windowsazure.com&http%3a%2f%2fschemas.windowscloudbackup.com%2f2010%2f10%2fidentity%2fclaims%2fresourcesetid=&http%3a%2f%2fschemas.windowscloudbackup.com%2f2010%2f10%2fidentity%2fclaims%2fcontaineruniquenameout=andliudevo.fareast.corp.microsoft.com&http%3a%2f%2fschemas.windowscloudbackup.com%2f2010%2f10%2fidentity%2fclaims%2frole=MachineAdmin&http%3a%2f%2fschemas.microsoft.com%2faccesscontrolservice%2f2010%2f07%2fclaims%2fidentityprovider=http%3a%2f%2fwindowscloudbackup%2f8915727938517205199%2fandliudevo.fareast.corp.microsoft.com&Audience=http%3a%2f%2fwindowscloudbackup%2fm3&ExpiresOn=1420020248&Issuer=https%3a%2f%2feapod01id1machine02.accesscontrol.windows.net%2f&HMACSHA256=G%2fnxhrZgB4EulWwfNDEsZc%2bF4xU3m3BB8Lhn2S%2fwkjI%3d");
		    
		    connection.setRequestProperty("DiagClientContextHeader","0000000002_79aa9768-eefa-4c35-98d2-540443920b11_471ef13e-6132-4321-b440-c96c95a10fef");
		    connection.setRequestProperty("WorkitemClientContextHeader","86c17989-b620-4de2-9905-0818b2d965ba");
		    connection.setRequestProperty("AgentVersionClientContextHeader","2.0.8694.0");
		    connection.setRequestProperty("SOAPAction","\"http://tempuri.org/IROCatalogExternal/GetCurrentEncryptionKey\"");
			//Host: pod01-prot1.ea.backup.windowsazure.com
			//Content-Length: 470
			//Expect: 100-continue
		    connection.setRequestProperty("Accept-Encoding","gzip, deflate");
			//Connection: Keep-Alive
			
		    connection.connect();
			DataOutputStream wr = new DataOutputStream(
					connection.getOutputStream());
			String envelop = "<s:Envelope xmlns:s=\"http://schemas.xmlsoap.org/soap/envelope/\"><s:Body><GetCurrentEncryptionKey xmlns=\"http://tempuri.org/\"><request i:type=\"a:ReadMachineEncryptionKeyRequest_V2011_09\" xmlns:a=\"http://windowscloudbackup.com/ROCatalog/V2011_09\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><a:ContractVersion>V2011_09</a:ContractVersion><a:MachineName>andliudevo.fareast.corp.microsoft.com</a:MachineName></request></GetCurrentEncryptionKey></s:Body></s:Envelope>";
			wr.write(envelop.getBytes());
			
			
			String line;
			BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));

			while ((line = reader.readLine()) != null) {
			    System.out.println(line);
			}
			wr.close();
			reader.close();  
			/*
		    String response = connection.getResponseMessage();
		    System.out.println(response);*/
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
