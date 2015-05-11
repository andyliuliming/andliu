/*package ostc.azurebackup.signature;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.security.KeyStore;
import java.security.KeyStore.PrivateKeyEntry;
import java.security.cert.X509Certificate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import javax.xml.crypto.dsig.CanonicalizationMethod;
import javax.xml.crypto.dsig.DigestMethod;
import javax.xml.crypto.dsig.Reference;
import javax.xml.crypto.dsig.SignatureMethod;
import javax.xml.crypto.dsig.SignedInfo;
import javax.xml.crypto.dsig.Transform;
import javax.xml.crypto.dsig.XMLSignature;
import javax.xml.crypto.dsig.XMLSignatureFactory;
import javax.xml.crypto.dsig.dom.DOMSignContext;
import javax.xml.crypto.dsig.keyinfo.KeyInfo;
import javax.xml.crypto.dsig.keyinfo.KeyInfoFactory;
import javax.xml.crypto.dsig.keyinfo.X509Data;
import javax.xml.crypto.dsig.spec.C14NMethodParameterSpec;
import javax.xml.crypto.dsig.spec.TransformParameterSpec;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;

import org.w3c.dom.Document;

public class XmlSignature {

	public static String Sign(String referenceUri, String xmlContent, PrivateKeyEntry keyEntry) {
		try {
			XMLSignatureFactory fac = XMLSignatureFactory.getInstance("DOM");

			// Create a Reference to the enveloped document (in this case,
			// you are signing the whole document, so a URI of "" signifies
			// that, and also specify the SHA1 digest algorithm and
			// the ENVELOPED Transform.
			DigestMethod digestMethod = fac.newDigestMethod(
					DigestMethod.SHA256, null);
			Transform transform = fac.newTransform(Transform.ENVELOPED,
					(TransformParameterSpec) null);
			Reference ref = fac.newReference(referenceUri, digestMethod,
					Collections.singletonList(transform), null, null);

			SignatureMethod signatureMethod = fac.newSignatureMethod(
					"http://www.w3.org/2001/04/xmldsig-more#rsa-sha256", null);
			CanonicalizationMethod canonicalizationMethod = fac
					.newCanonicalizationMethod(
							CanonicalizationMethod.EXCLUSIVE,
							(C14NMethodParameterSpec) null);

			SignedInfo si = fac.newSignedInfo(canonicalizationMethod,
					signatureMethod, Collections.singletonList(ref));			

			X509Certificate cert = (X509Certificate) keyEntry.getCertificate();

			// Create the KeyInfo containing the X509Data.
			KeyInfoFactory kif = fac.getKeyInfoFactory();
			List x509Content = new ArrayList();
			x509Content.add(cert.getSubjectX500Principal().getName());
			x509Content.add(cert);
			X509Data xd = kif.newX509Data(x509Content);
			KeyInfo ki = kif.newKeyInfo(Collections.singletonList(xd));

			// Instantiate the document to be signed.
			DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
			dbf.setNamespaceAware(true);

			InputStream stream = new ByteArrayInputStream(
					xmlContent.getBytes(StandardCharsets.UTF_8));

			Document doc = dbf.newDocumentBuilder().parse(stream);

			// Create a DOMSignContext and specify the RSA PrivateKey and
			// location of the resulting XMLSignature's parent element.
			DOMSignContext dsc = new DOMSignContext(keyEntry.getPrivateKey(),
					doc.getDocumentElement());

			// Create the XMLSignature, but don't sign it yet.
			XMLSignature signature = fac.newXMLSignature(si, ki);

			// Marshal, generate, and sign the enveloped signature.
			signature.sign(dsc);

			// Output the resulting document.
			ByteArrayOutputStream baos = new ByteArrayOutputStream();
			TransformerFactory tf = TransformerFactory.newInstance();
			Transformer trans = tf.newTransformer();

			trans.transform(new DOMSource(doc), new StreamResult(baos));

			return baos.toString();
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

}
*/