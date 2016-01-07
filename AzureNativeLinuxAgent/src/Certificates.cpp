#include "Certificates.h"
#include "CommandExecuter.h"
#include "FileOperator.h"
#include "Macros.h"
#include "XmlRoutine.h"
Certificates::Certificates()
{
}

void Certificates::Parse(string * certificatesText)
{
    string certificationsFile = CERTIFICATIONS_XML_FILE_NAME;
    FileOperator::save_file(certificatesText, &certificationsFile);
}

void Certificates::Process()
{
#ifdef _WIN32
#else
    xmlDocPtr doc = xmlParseFile(CERTIFICATIONS_XML_FILE_NAME);
    xmlNodePtr root = xmlDocGetRootElement(doc);

    const xmlChar* certificationDataExpr = xmlCharStrdup("/CertificateFile/Data/text()");
    string *certificationData = (XmlRoutine::getNodeText(doc, certificationDataExpr, NULL));
    delete certificationDataExpr;
    certificationDataExpr = NULL;
    string certFileContent = string("MIME-Version: 1.0\nContent-Disposition: attachment; filename=\"Native_Certificates.p7m\"\nContent-Type: application/x-pkcs7-mime; name=\"Certificates.p7m\"\nContent-Transfer-Encoding: base64\n\n")
        + *certificationData;
    string certFileName = string(PROTECTED_SETTINGS_CERTIFICATE_FILE_NAME);
    FileOperator::save_file(&certFileContent, &certFileName);

    string commandToExportCert = string("openssl cms -decrypt -in Certificates.p7m -inkey ") + TRANSPORT_CERT_PRIV + " -recip " + TRANSPORT_CERT_PUB + " | openssl pkcs12 -nodes -password pass: -out " + CERTIFICATIONS_FILE_NAME;
    printf("%s", commandToExportCert.c_str());
    // + "openssl cms -decrypt -in Certificates.p7m -inkey TransportPrivate.pem -recip TransportCert.pem | openssl pkcs12 -nodes -password pass: -out Certificates.pem"):

    xmlFreeDoc(doc);
#endif
}

Certificates::~Certificates()
{
}
