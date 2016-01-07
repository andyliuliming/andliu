#include "Certificates.h"
#include "CommandExecuter.h"
#include "FileOperator.h"
#include "Logger.h"
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

    string commandToExportCert = string("openssl cms -decrypt -in ") + PROTECTED_SETTINGS_CERTIFICATE_FILE_NAME + " -inkey " + TRANSPORT_CERT_PRIV + " -recip " + TRANSPORT_CERT_PUB + " | openssl pkcs12 -nodes -password pass: -out " + CERTIFICATIONS_FILE_NAME;

    CommandResultPtr decryptResult = CommandExecuter::RunGetOutput(commandToExportCert.c_str());
    if (decryptResult->exitCode != 0)
    {
        Logger::getInstance().Error(decryptResult->output->c_str());
    }
    xmlFreeDoc(doc);
#endif
}

Certificates::~Certificates()
{
}
