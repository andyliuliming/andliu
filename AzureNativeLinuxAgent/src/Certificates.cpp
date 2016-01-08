#include "Certificates.h"
#include "CommandExecuter.h"
#include "FileOperator.h"
#include "Logger.h"
#include "Macros.h"
#include "StringUtil.h"
#include "XmlRoutine.h"
#include <stdlib.h>
#include <regex>
bool Certificates::isKeyEndLine(string & line)
{
    string lineCopy = line;
    if (lineCopy.find("---") == 0)
    {
        string trimChar = "-";
        string trimmed = StringUtil::trim(lineCopy, trimChar);
        int first_of_end = trimmed.find_first_of("END");
        if (first_of_end == 0)
        {
            if (trimmed.find_first_of("PRIVATE KEY") != string::npos)
            {
                return true;
            }
        }
    }

    return false;
}
bool Certificates::isCertificateEndLine(string & line)
{
    string lineCopy = line;
    if (lineCopy.find("---") == 0)
    {
        string trimChar = "-";
        string trimmed = StringUtil::trim(lineCopy, trimChar);
        if (trimmed.find_first_of("END") == 0)
        {
            if (trimmed.find_first_of("CERTIFICATE") != string::npos)
            {
                return true;
            }
        }
    }
    return false;
}
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
    printf("process certificates 1\n");
    xmlDocPtr doc = xmlParseFile(CERTIFICATIONS_XML_FILE_NAME);
    xmlNodePtr root = xmlDocGetRootElement(doc);

    const xmlChar* certificationDataExpr = xmlCharStrdup("/CertificateFile/Data/text()");
    string *certificationData = (XmlRoutine::getNodeText(doc, certificationDataExpr, NULL));
    delete certificationDataExpr;
    certificationDataExpr = NULL;
    string certFileContent = string("MIME-Version: 1.0\nContent-Disposition: attachment; filename=\"") + PROTECTED_SETTINGS_CERTIFICATE_FILE_NAME + "\"\nContent-Type: application/x-pkcs7-mime; name=\"" + PROTECTED_SETTINGS_CERTIFICATE_FILE_NAME + "\"\nContent-Transfer-Encoding: base64\n\n"
        + *certificationData;
    printf("process certificates 2\n");
    string certFileName = string(PROTECTED_SETTINGS_CERTIFICATE_FILE_NAME);
    FileOperator::save_file(&certFileContent, &certFileName);

    xmlFreeDoc(doc);
    printf("process certificates 3\n");
    string commandToExportCert = string("openssl cms -decrypt -in ") + PROTECTED_SETTINGS_CERTIFICATE_FILE_NAME + " -inkey " + TRANSPORT_CERT_PRIV + " -recip " + TRANSPORT_CERT_PUB + " | openssl pkcs12 -nodes -password pass: -out " + CERTIFICATIONS_FILE_NAME;

    CommandResultPtr decryptResult = CommandExecuter::RunGetOutput(commandToExportCert.c_str());
    if (decryptResult->exitCode != 0)
    {
        Logger::getInstance().Error(decryptResult->output->c_str());
    }
    printf("process certificates 4\n");
    string *certificationsContent = FileOperator::get_content(CERTIFICATIONS_FILE_NAME);
    vector<string> splitResult;
    string spliter = "\n";
    StringUtil::string_split(*certificationsContent, spliter, &splitResult);
    printf("process certificates 5\n");
    vector<string> privCertItems;
    vector<string> pubItems;
    string certItem;

    printf("process certificates 6\n");
    for (int i = 0; i < splitResult.size(); i++)
    {
        certItem += (splitResult[i]+"\n");
        printf("splitResult[i]:%s\n", splitResult[i].c_str());
        if (this->isKeyEndLine(splitResult[i]))
        {
            privCertItems.push_back(certItem);
            certItem = "";
        }
        if (this->isCertificateEndLine(splitResult[i]))
        {
            printf("pub item content is :%s", certItem.c_str());
            pubItems.push_back(certItem);
            certItem = "";
        }
    }
    printf("process certificates 7\n");
    string tempFileForCert = "temp.pem";
    string tempPriFileForCert = "temppri.pem";
    printf("pubItems size: %d", (int)pubItems.size());
    map<string, string> thumpPrintPubkeyPair;
    for (int i = 0; i < pubItems.size(); i++)
    {
        printf("content is %s", pubItems[i].c_str());
        FileOperator::save_file(&pubItems[i], &tempFileForCert);
        string getThumbprint = "openssl x509 -in " + tempFileForCert + " -fingerprint -noout";
        CommandResultPtr getThumbprintResult = CommandExecuter::RunGetOutput(getThumbprint.c_str());
        printf(getThumbprintResult->output->c_str());

        string getPubKey = "openssl x509 -in " + tempFileForCert + " -pubkey -noout";
        CommandResultPtr getPubkeyResult = CommandExecuter::RunGetOutput(getPubKey.c_str());

        printf(getPubkeyResult->output->c_str());
    }
    printf("process certificates 8");
    printf("privCertItems size: %d", (int)privCertItems.size());
    for (int i = 0; i < privCertItems.size(); i++)
    {
        printf("content is %s", privCertItems[i].c_str());
        FileOperator::save_file(&privCertItems[i], &tempPriFileForCert);
        string getPubKey = "openssl rsa -in " + privCertItems[i] + " -pubout 2> /dev/null ";
        CommandResultPtr getPubKeyResult = CommandExecuter::RunGetOutput(getPubKey.c_str());
        printf(getPubKeyResult->output->c_str());
    }printf("process certificates 9");
#endif
}

Certificates::~Certificates()
{
}
