package ostc.azurebackup.signature;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;

import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.xpath.XPath;
import javax.xml.xpath.XPathConstants;
import javax.xml.xpath.XPathExpressionException;
import javax.xml.xpath.XPathFactory;

import org.w3c.dom.Document;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

public class AzureCredentialParser {
	public String GetCert(String credentialXml) {
		try {
			DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();

			InputStream stream = new ByteArrayInputStream(
					credentialXml.getBytes(StandardCharsets.UTF_8));
			Document doc = dbf.newDocumentBuilder().parse(stream);

			XPath xPath = XPathFactory.newInstance().newXPath();
			NodeList nodes = (NodeList) xPath.evaluate(
					"/BackupVaultCreds/ManagementCert",
					doc.getDocumentElement(), XPathConstants.NODESET);

			Node certNode = nodes.item(0);
			return (certNode.getTextContent());
		} catch (SAXException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ParserConfigurationException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (XPathExpressionException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
}
