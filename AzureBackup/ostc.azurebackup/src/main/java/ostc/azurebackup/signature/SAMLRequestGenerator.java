package ostc.azurebackup.signature;

import java.io.StringWriter;
import java.security.KeyStore.PrivateKeyEntry;
import java.security.cert.X509Certificate;
import java.util.UUID;

import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;

import org.joda.time.DateTime;
import org.opensaml.Configuration;
import org.opensaml.DefaultBootstrap;
import org.opensaml.common.SAMLObjectBuilder;
import org.opensaml.common.SAMLVersion;
import org.opensaml.saml1.core.Assertion;
import org.opensaml.saml1.core.Attribute;
import org.opensaml.saml1.core.AttributeStatement;
import org.opensaml.saml1.core.AttributeValue;
import org.opensaml.saml1.core.Audience;
import org.opensaml.saml1.core.AudienceRestrictionCondition;
import org.opensaml.saml1.core.Conditions;
import org.opensaml.saml1.core.ConfirmationMethod;
import org.opensaml.saml1.core.Subject;
import org.opensaml.saml1.core.SubjectConfirmation;
import org.opensaml.saml1.core.impl.AssertionMarshaller;
import org.opensaml.xml.ConfigurationException;
import org.opensaml.xml.XMLObjectBuilderFactory;
import org.opensaml.xml.encryption.EncryptionConstants;
import org.opensaml.xml.schema.XSString;
import org.opensaml.xml.schema.impl.XSStringBuilder;
import org.opensaml.xml.security.BasicSecurityConfiguration;
import org.opensaml.xml.security.DefaultSecurityConfigurationBootstrap;
import org.opensaml.xml.security.SecurityConfiguration;
import org.opensaml.xml.security.SecurityHelper;
import org.opensaml.xml.security.x509.BasicX509Credential;
import org.opensaml.xml.signature.Signature;
import org.opensaml.xml.signature.SignatureException;
import org.opensaml.xml.signature.Signer;
import org.opensaml.xml.util.XMLHelper;
import org.w3c.dom.Element;

/*
 * saml certid
 * saml resourceandcertid
 * 
 * AssertionID
 */
public class SAMLRequestGenerator {

	private void Initialize(){
		try {
			DefaultBootstrap.bootstrap();
		} catch (ConfigurationException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	private Signature GetSignature( PrivateKeyEntry privateKeyEntry){
		Signature signature = (Signature) Configuration.getBuilderFactory()
				.getBuilder(Signature.DEFAULT_ELEMENT_NAME)
				.buildObject(Signature.DEFAULT_ELEMENT_NAME);
		BasicX509Credential credential = new BasicX509Credential();
		
		java.security.cert.X509Certificate cert = (X509Certificate) privateKeyEntry
				.getCertificate();
		
		credential.setEntityCertificate(cert);
		credential.setPrivateKey(privateKeyEntry.getPrivateKey());
		
		signature.setSigningCredential(credential);
			
		// This is also the default if a null SecurityConfiguration is specified
		BasicSecurityConfiguration config = (BasicSecurityConfiguration) Configuration.getGlobalSecurityConfiguration();
		config.setSignatureReferenceDigestMethod(EncryptionConstants.ALGO_ID_DIGEST_SHA256);
		  
		SecurityConfiguration secConfig = Configuration
				.getGlobalSecurityConfiguration();
		
		try {
			SecurityHelper.prepareSignatureParams(signature, credential,
					secConfig, null);
		} catch (SecurityException e) {
			e.printStackTrace();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		signature.setCanonicalizationAlgorithm("http://www.w3.org/2001/10/xml-exc-c14n#");
		signature.setSignatureAlgorithm("http://www.w3.org/2001/04/xmldsig-more#rsa-sha256");
		return signature;
	}
	
	public String GenerateCertIdSaml(String assertionId, String issuer, String certId, PrivateKeyEntry privateKeyEntry){		
		Initialize();
		
		Signature signature = this.GetSignature(privateKeyEntry);
		
		String propertyName = "certid";
		return GeneratorSAML(assertionId, issuer,propertyName,certId, signature);		
	}
	
	public String GenerateCertAndResourceIdSaml(String assertionId, String issuer, String certId, String resourceId, PrivateKeyEntry privateKeyEntry){		
		Initialize();

		Signature signature = this.GetSignature(privateKeyEntry);	
		
		String propertyName = "resourceandcertid";
		String value = certId + "." + resourceId;		
		return GeneratorSAML(assertionId, issuer,propertyName,value, signature);	
	}
	
	
	@SuppressWarnings("unchecked")
	private String GeneratorSAML(String assertionId, String issuer, String propertyName,String value, Signature signature) {
		try {
			// OpenSAML 2.3
			
			XMLObjectBuilderFactory builderFactory = Configuration
					.getBuilderFactory();

			// Create the SubjectConfirmation
			SAMLObjectBuilder<ConfirmationMethod> confirmationMethodBuilder = (SAMLObjectBuilder<ConfirmationMethod>) builderFactory
					.getBuilder(ConfirmationMethod.DEFAULT_ELEMENT_NAME);
			ConfirmationMethod confirmationMethod = (ConfirmationMethod) confirmationMethodBuilder
					.buildObject();
			confirmationMethod
					.setConfirmationMethod("urn:oasis:names:tc:SAML:1.0:cm:bearer");

			SAMLObjectBuilder<SubjectConfirmation> subjectConfirmationBuilder = (SAMLObjectBuilder<SubjectConfirmation>) builderFactory
					.getBuilder(SubjectConfirmation.DEFAULT_ELEMENT_NAME);
			SubjectConfirmation subjectConfirmation = (SubjectConfirmation) subjectConfirmationBuilder
					.buildObject();
			subjectConfirmation.getConfirmationMethods()
					.add(confirmationMethod);
			// Create the Subject
			SAMLObjectBuilder<Subject> subjectBuilder = (SAMLObjectBuilder<Subject>) builderFactory
					.getBuilder(Subject.DEFAULT_ELEMENT_NAME);
			Subject subject = (Subject) subjectBuilder.buildObject();

			subject.setSubjectConfirmation(subjectConfirmation);

			// Create the attribute statement
			SAMLObjectBuilder<Attribute> attrBuilder = (SAMLObjectBuilder<Attribute>) builderFactory
					.getBuilder(Attribute.DEFAULT_ELEMENT_NAME);

			SAMLObjectBuilder<AttributeStatement> attrStatementBuilder = (SAMLObjectBuilder<AttributeStatement>) builderFactory
					.getBuilder(AttributeStatement.DEFAULT_ELEMENT_NAME);
			AttributeStatement attrStatement = (AttributeStatement) attrStatementBuilder
					.buildObject();

			Attribute certIdAttribute = (Attribute) attrBuilder.buildObject();
			certIdAttribute.setAttributeName(propertyName);
			certIdAttribute
					.setAttributeNamespace("http://schemas.windowscloudbackup.com/2010/10/identity/claims");

			XSStringBuilder stringBuilder = (XSStringBuilder) builderFactory
					.getBuilder(XSString.TYPE_NAME);
			XSString stringValue = stringBuilder.buildObject(
					AttributeValue.DEFAULT_ELEMENT_NAME, XSString.TYPE_NAME);
			stringValue.setValue(value);
			certIdAttribute.getAttributeValues().add(stringValue);

			attrStatement.getAttributes().add(certIdAttribute);
			attrStatement.setSubject(subject);

			// Create the do-not-cache condition
			SAMLObjectBuilder<Audience> audienceBuilder = (SAMLObjectBuilder<Audience>) builderFactory
					.getBuilder(Audience.DEFAULT_ELEMENT_NAME);
			Audience audience = (Audience) audienceBuilder.buildObject();
			audience.setUri("https://wuspod01rp1users.accesscontrol.windows.net/v2/OAuth2-13");
			SAMLObjectBuilder<AudienceRestrictionCondition> doNotCacheConditionBuilder = (SAMLObjectBuilder<AudienceRestrictionCondition>) builderFactory
					.getBuilder(AudienceRestrictionCondition.DEFAULT_ELEMENT_NAME);
			AudienceRestrictionCondition condition = (AudienceRestrictionCondition) doNotCacheConditionBuilder
					.buildObject();

			condition.getAudiences().add(audience);

			SAMLObjectBuilder<Conditions> conditionsBuilder = (SAMLObjectBuilder<Conditions>) builderFactory
					.getBuilder(Conditions.DEFAULT_ELEMENT_NAME);
			Conditions conditions = (Conditions) conditionsBuilder
					.buildObject();
			//conditions.setNotBefore(notBefore);
			DateTime notBefore=DateTime.now();
			DateTime notAfter=notBefore.plusMinutes(75);
			conditions.setNotBefore(notBefore);
			conditions.setNotOnOrAfter(notAfter);
			
			//NotBefore="2014-12-15T05:47:16.221Z" NotOnOrAfter="2014-12-15T07:02:16.221Z"
			conditions.getConditions().add(condition);

			// Create the assertion
			SAMLObjectBuilder<Assertion> assertionBuilder = (SAMLObjectBuilder<Assertion>) builderFactory
					.getBuilder(Assertion.DEFAULT_ELEMENT_NAME);
			Assertion assertion = (Assertion) assertionBuilder.buildObject();
			assertion.setIssuer(issuer);
			assertion.setIssueInstant(new DateTime());
			assertion.setVersion(SAMLVersion.VERSION_11);
			assertion.setID(assertionId);
			assertion.getAttributeStatements().add(attrStatement);
			assertion.setConditions(conditions);
			assertion.setSignature(signature);
			
			
			AssertionMarshaller marshaller = new AssertionMarshaller();
			Element plain = marshaller.marshall(assertion);
			
			try {
				Signer.signObject(signature);
			} catch (SignatureException e) {
				e.printStackTrace();
			}
			
			
			Transformer transformer = TransformerFactory.newInstance()
					.newTransformer();
			transformer.setOutputProperty("omit-xml-declaration", "yes");

			StringWriter writer = new StringWriter();
			transformer.transform(new DOMSource(plain),
					new StreamResult(writer));
			String samlResponse = writer.toString();
			
			return samlResponse;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
}
