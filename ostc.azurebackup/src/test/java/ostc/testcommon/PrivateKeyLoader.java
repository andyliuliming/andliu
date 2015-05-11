package ostc.testcommon;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.Reader;
import java.io.UnsupportedEncodingException;
import java.security.KeyStore;
import java.security.KeyStore.PrivateKeyEntry;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.security.UnrecoverableEntryException;
import java.util.Enumeration;

import ostc.azurebackup.signature.AzureCredentialParser;
import ostc.azurebackup.signature.CertLoader;

public class PrivateKeyLoader {
	public PrivateKeyEntry LoadPrivateKey() throws IOException, NoSuchAlgorithmException, UnrecoverableEntryException, KeyStoreException{
		FileInputStream fis = new FileInputStream(
				"C:\\Users\\andliu\\Documents\\GitHub\\andliu\\ostc.azurebackup\\src\\main\\java\\xxxxxxxx_04 January 2015.VaultCredentials");

		StringBuilder sb = new StringBuilder();
		Reader r = new InputStreamReader(fis, "UTF-8"); // or whatever
														// encoding
		char[] buf = new char[1024];
		int amt = r.read(buf);
		while (amt > 0) {
			sb.append(buf, 0, amt);
			amt = r.read(buf);
		}
		r.close();
		fis.close();

		AzureCredentialParser parser = new AzureCredentialParser();

		String certString = parser.GetCert(sb.toString());

		// Load the KeyStore and get the signing key and certificate.
		CertLoader certLoader = new CertLoader();

		KeyStore ks = certLoader.GetKeyStore(certString);

		Enumeration<String> alias = ks.aliases();

		String keyAlias = alias.nextElement();

		KeyStore.PrivateKeyEntry keyEntry = (KeyStore.PrivateKeyEntry) ks
				.getEntry(keyAlias,
						new KeyStore.PasswordProtection("".toCharArray()));
		return keyEntry;
	}
}
