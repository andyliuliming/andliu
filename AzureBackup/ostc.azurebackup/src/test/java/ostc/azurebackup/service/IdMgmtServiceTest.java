package ostc.azurebackup.service;

import java.io.IOException;
import java.security.KeyStore.PrivateKeyEntry;
import java.security.cert.CertificateEncodingException;
import java.security.cert.X509Certificate;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.security.UnrecoverableEntryException;
import java.util.UUID;

import org.junit.Test;

import ostc.acs.service.ACSService;
import ostc.acs.service.SWTToken;
import ostc.azurebackup.signature.CertLoader;
import ostc.azurebackup.signature.SAMLRequestGenerator;
import ostc.testcommon.PrivateKeyLoader;

public class IdMgmtServiceTest {

	@Test
	public void testCallIdMgmtService() {

		PrivateKeyLoader privateKeyLoader = new PrivateKeyLoader();
		try {
			PrivateKeyEntry privateKey = privateKeyLoader.LoadPrivateKey();
			
			java.security.cert.X509Certificate cert = (X509Certificate) privateKey.getCertificate();
			
			
			String thumbPrint = CertLoader.getThumbPrint(cert);
			String assertionId = "_" + UUID.randomUUID().toString();
			// load the cert id from the cert string first, then pass

			SAMLRequestGenerator generator = new SAMLRequestGenerator();
			
			String resourceId = "8915727938517205199";
			String certAndResourceSAML = generator.GenerateCertAndResourceIdSaml(assertionId, thumbPrint + "-rcertissuer", thumbPrint, resourceId, privateKey);
					
			ACSService service = new ACSService();
			
			SWTToken token = service.GetSWTToken(certAndResourceSAML);
			
			
			IdMgmtService idMgmtService = new IdMgmtService();
			idMgmtService.GetContainerRegistrationStatus(token.access_token);
			
		} catch (NoSuchAlgorithmException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (UnrecoverableEntryException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (KeyStoreException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (CertificateEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

}
