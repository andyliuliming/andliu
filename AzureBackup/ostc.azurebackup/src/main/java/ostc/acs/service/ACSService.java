package ostc.acs.service;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;
import java.net.URLEncoder;

import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;

public class ACSService {
	public SWTToken GetSWTToken(String samlAssertion) {
		SWTToken token = null;
		String request = "https://wuspod01rp1users.accesscontrol.windows.net/v2/OAuth2-13";
		URL url;
		try {			
			url = new URL(request);
			HttpURLConnection connection = (HttpURLConnection) url.openConnection();           
		    connection.setDoOutput( true );
		    connection.setDoInput ( true );
		    connection.setUseCaches( false );
		    connection.setInstanceFollowRedirects(false); 
		    connection.setRequestMethod("POST"); 
		    connection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded"); 
		    connection.setRequestProperty("charset", "utf-8");
			String grantType="urn:oasis:names:tc:SAML:1.0:assertion";
			String assertionScope="http://windowscloudbackup/m3";
			
			String requestBody = "grant_type=" +  URLEncoder.encode(grantType) + "&scope=" + URLEncoder.encode(assertionScope) + "&assertion=" + URLEncoder.encode(samlAssertion);
			
		    connection.connect();
			DataOutputStream wr = new DataOutputStream(
					connection.getOutputStream());			
			
			System.out.println(requestBody);
			String encoded = requestBody;
			wr.write(encoded.getBytes());
			wr.flush();
			
			String line;
			BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
			StringBuilder sb = new StringBuilder();
			
			while ((line = reader.readLine()) != null) {
				sb.append(line);
			}
			wr.close();
			reader.close();  
			
			//User user = new User();
			ObjectMapper mapper = new ObjectMapper();
		 
			try {
		 
				// convert user object to json string, and save to a file
				token = mapper.readValue(sb.toString(), SWTToken.class);
		 
				// display to console
				System.out.println(mapper.writeValueAsString(token));
		 
			} catch (JsonGenerationException e) {
		 
				e.printStackTrace();
		 
			} catch (JsonMappingException e) {
		 
				e.printStackTrace();
		 
			} catch (IOException e) {
		 
				e.printStackTrace();
		 
			}
			/*JSONObject obj = new JSONObject(sb.toString());
			token.TokenType = obj.getString("token_type");
			token.AccessToken = obj.getString("access_token");
			token.ExpiresIn = obj.getInt("expires_in");
			token.Scope = obj.getString("scope");*/
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
		return token;
	}
}
