#include "Certificates.h"
#include "FileOperator.h"
#include "Macros.h"
#include "XmlRoutine.h"
Certificates::Certificates()
{
}

void Certificates::Parse(string * certificatesText)
{
    string certificationsFile = CERTIFICATIONS_FILE_NAME;
    FileOperator::save_file(certificatesText, &certificationsFile);
}

void Certificates::Process()
{
#ifdef _WIN32
#else
    xmlDocPtr doc = xmlParseFile(CERTIFICATIONS_FILE_NAME);
    xmlNodePtr root = xmlDocGetRootElement(doc);

    const xmlChar* certificationDataExpr = xmlCharStrdup("/CertificateFile/Data/text()");
    string *certificationData = (XmlRoutine::getNodeText(doc, certificationDataExpr, NULL));

    /*SetFileContents(PROTECTED_SETTINGS_CERTIFICATE_FILE_NAME,
        "MIME-Version: 1.0\n"
        + "Content-Disposition: attachment; filename=\"Certificates.p7m\"\n"
        + "Content-Type: application/x-pkcs7-mime; name=\"Certificates.p7m\"\n"
        + "Content-Transfer-Encoding: base64\n\n"
        + GetNodeTextData(dom.getElementsByTagName("Data")[0]))*/
    delete certificationDataExpr;
    certificationDataExpr = NULL;

    xmlFreeDoc(doc);
#endif
}

Certificates::~Certificates()
{
}
