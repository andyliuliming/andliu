package ostc.sh.webconsole.oauth;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.Base64;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import org.w3c.dom.Document;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

public class SignInVerifier {

	public String GetTokenFromCode(String code) {
		// get the access token first.

		System.err.println("we are now getting the token via..."+code);

		HttpURLConnection connection;
		try {
			URL url = new URL("https://login.windows.net/common/oauth2/token");
			connection = (HttpURLConnection) url.openConnection();
			connection.setRequestMethod("POST");
			connection.setRequestProperty("Content-Type",
					"application/x-www-form-urlencoded");

			String contentToSend = "";
			contentToSend += "grant_type=authorization_code";
			contentToSend += "&code=" + java.net.URLEncoder
					.encode(code,"UTF-8");
			contentToSend += "&redirect_uri="
					+ java.net.URLEncoder
							.encode("https://andliu.blob.core.windows.net/limingwebconsole/WebConsoleJNLP.html",
									"UTF-8");
			contentToSend += "&client_id=45c6faba-36b8-4a12-bcfb-f86f4728584a";
			contentToSend += "&client_secret="
					+ java.net.URLEncoder.encode(
							"6wXxjITN/92SSmvKJ8cQpSZh5A9Fiwmhz4pj1t/+1Uk=",
							"UTF-8");
			contentToSend += "&resource="
					+ java.net.URLEncoder.encode(
							"https://management.core.windows.net/", "UTF-8");
			connection.setUseCaches(false);
			connection.setDoOutput(true);

			BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(
					connection.getOutputStream()));
			System.err.println(contentToSend);
			bw.write(contentToSend);
			bw.close();

			InputStream is = connection.getInputStream();
			BufferedReader rd = new BufferedReader(new InputStreamReader(is));
			String line;
			StringBuffer response = new StringBuffer();
			while ((line = rd.readLine()) != null) {
				response.append(line);
			}
			rd.close();
			String accessToken = response.toString();
			System.err.println(accessToken);
			//"access_token":"
			//
			String tokenStartTag="\"access_token\":\"";
			int tokenStartIndex=accessToken.indexOf(tokenStartTag);
			accessToken=accessToken.substring(tokenStartIndex+tokenStartTag.length());
			accessToken=accessToken.substring(0,accessToken.indexOf("\""));
			System.err.println(accessToken);
			// parse the access_token
			return accessToken;
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return "";
	}

	public ArrayList<String> GetWriteList(String whiteListFile) {
		HttpURLConnection connection;
		try {
			ArrayList<String> whiteList=new ArrayList<String>();
			URL url = new URL("https://"+whiteListFile);
			connection = (HttpURLConnection) url.openConnection();
			
			InputStream is = connection.getInputStream();
			BufferedReader rd = new BufferedReader(new InputStreamReader(is));
			String line;
			while ((line = rd.readLine()) != null) {
				whiteList.add(line.trim());
			}
			rd.close();
			return whiteList;
		} catch (IOException e) {
			e.printStackTrace();
		}
		return null;
	}
	
	public boolean InWhiteList(String token,String currentLocation) {
		try
		{
		// get the white list
		ArrayList<String> whiteList = this.GetWriteList(currentLocation);
		String[] spliets = token.split("\\.");

		byte[] decoded = Base64.getDecoder().decode(spliets[1]);
		String decodedString = new String(decoded);
		System.err.println("decodedString=="+decodedString);
		/*byte[] bytes = "Hello, World!".getBytes("UTF-8");
		String encoded = Base64.getEncoder().encodeToString(bytes);
		byte[] decoded = Base64.getDecoder().decode(encoded);*/
			//decode the accesss_token 
			
			// split by the .
			
			// decode it.
			//
		String uniqueName="\"unique_name\":\"";
		String emailTag="\"email\":\"";
		String accountTag="";
		
		if(decodedString.indexOf(emailTag)>0){
			accountTag=emailTag;
		}
		else
		{
			accountTag=uniqueName;
		}
		
		
		decodedString=decodedString.substring(decodedString.indexOf(accountTag)+accountTag.length());
		decodedString=decodedString.substring(0,decodedString.indexOf("\""));
		String email=decodedString;
		for(String item: whiteList){
			if(item.equals(email)){
				return true;
			}
		}
		}catch(Exception e){
			e.printStackTrace();
		}

		return false;
	}
}
