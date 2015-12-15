package ostc.acs.service;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.Reader;
import java.security.KeyStore;
import java.security.KeyStore.PrivateKeyEntry;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.security.UnrecoverableEntryException;
import java.security.cert.CertificateEncodingException;
import java.security.cert.X509Certificate;
import java.util.Enumeration;
import java.util.UUID;

import org.junit.Test;
import org.opensaml.Configuration;
import org.opensaml.xml.security.x509.BasicX509Credential;
import org.opensaml.xml.signature.Signature;

import ostc.azurebackup.signature.AzureCredentialParser;
import ostc.azurebackup.signature.CertLoader;
import ostc.azurebackup.signature.SAMLRequestGenerator;
import ostc.testcommon.PrivateKeyLoader;

public class ACSServiceTest {

	@Test
	public void testCallACS() throws CertificateEncodingException, NoSuchAlgorithmException, IOException, UnrecoverableEntryException, KeyStoreException {
		
		PrivateKeyLoader keyLoader = new PrivateKeyLoader();
		PrivateKeyEntry keyEntry = keyLoader.LoadPrivateKey();
		java.security.cert.X509Certificate cert = (X509Certificate) keyEntry.getCertificate();
		
		
		String thumbPrint = CertLoader.getThumbPrint(cert);
		String assertionId = "_" + UUID.randomUUID().toString();
		// load the cert id from the cert string first, then pass

		SAMLRequestGenerator generator = new SAMLRequestGenerator();
		
		String xamlXml = generator.GenerateCertIdSaml(assertionId, thumbPrint + "-rcertissuer", thumbPrint, keyEntry);
		
		String resourceId = "8915727938517205199";
		String certAndResourceSAML = generator.GenerateCertAndResourceIdSaml(assertionId, thumbPrint + "-rcertissuer", thumbPrint, resourceId, keyEntry);
				
		ACSService service = new ACSService();
		
		service.GetSWTToken(xamlXml);
		service.GetSWTToken(certAndResourceSAML);
	}

}
