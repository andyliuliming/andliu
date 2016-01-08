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
        int first_of_end = trimmed.find("END");
        if (first_of_end == 0)
        {
            if (trimmed.find("PRIVATE KEY") != string::npos)
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
        if (trimmed.find("END") == 0)
        {
            if (trimmed.find("CERTIFICATE") != string::npos)
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
    xmlDocPtr doc = xmlParseFile(CERTIFICATIONS_XML_FILE_NAME);
    xmlNodePtr root = xmlDocGetRootElement(doc);

    const xmlChar* certificationDataExpr = xmlCharStrdup("/CertificateFile/Data/text()");
    string *certificationData = (XmlRoutine::getNodeText(doc, certificationDataExpr, NULL));
    delete certificationDataExpr;
    certificationDataExpr = NULL;
    string certFileContent = string("MIME-Version: 1.0\nContent-Disposition: attachment; filename=\"") + PROTECTED_SETTINGS_CERTIFICATE_FILE_NAME + "\"\nContent-Type: application/x-pkcs7-mime; name=\"" + PROTECTED_SETTINGS_CERTIFICATE_FILE_NAME + "\"\nContent-Transfer-Encoding: base64\n\n"
        + *certificationData;
    string certFileName = string(PROTECTED_SETTINGS_CERTIFICATE_FILE_NAME);
    FileOperator::save_file(&certFileContent, &certFileName);

    xmlFreeDoc(doc);
    string commandToExportCert = string("openssl cms -decrypt -in ") + PROTECTED_SETTINGS_CERTIFICATE_FILE_NAME + " -inkey " + TRANSPORT_CERT_PRIV + " -recip " + TRANSPORT_CERT_PUB + " | openssl pkcs12 -nodes -password pass: -out " + CERTIFICATIONS_FILE_NAME;

    CommandResultPtr decryptResult = CommandExecuter::RunGetOutput(commandToExportCert.c_str());
    if (decryptResult->exitCode != 0)
    {
        Logger::getInstance().Error(decryptResult->output->c_str());
    }
    string *certificationsContent = FileOperator::get_content(CERTIFICATIONS_FILE_NAME);
    vector<string> splitResult;
    string spliter = "\n";
    StringUtil::string_split(*certificationsContent, spliter, &splitResult);

    vector<string> privCertItems;
    vector<string> pubItems;
    string certItem;

    for (int i = 0; i < splitResult.size(); i++)
    {
        certItem += (splitResult[i] + "\n");
        if (this->isKeyEndLine(splitResult[i]))
        {
            string certItemClone = certItem;
            privCertItems.push_back(certItemClone);
            certItem = "";
        }
        if (this->isCertificateEndLine(splitResult[i]))
        {
            string certItemClone = certItem;
            pubItems.push_back(certItemClone);
            certItem = "";
        }
    }
    string tempFileForCert = "temp.pem";
    string tempPriFileForCert = "temppri.pem";
    map<string, string> thumpPrintPubkeyPair;
    for (int i = 0; i < pubItems.size(); i++)
    {
        FileOperator::save_file(&pubItems[i], &tempFileForCert);
        string getThumbprint = "openssl x509 -in " + tempFileForCert + " -fingerprint -noout";
        CommandResultPtr getThumbprintResult = CommandExecuter::RunGetOutput(getThumbprint.c_str());
        printf(getThumbprintResult->output->c_str());
        string thumbPrint = getThumbprintResult->output->c_str();
        vector<string> fingerPrintSplit;
        string fingerPrintSpliter = "=";
        StringUtil::string_split(thumbPrint, fingerPrintSpliter, &fingerPrintSplit);
        //SHA1 Fingerprint=2B:67:2A:2A:46:0A:B9:36:D2:6D:D9:37:0B:92:78:D8:DE:79:B5:28

        string getPubKey = "openssl x509 -in " + tempFileForCert + " -pubkey -noout";
        CommandResultPtr getPubkeyResult = CommandExecuter::RunGetOutput(getPubKey.c_str());
        printf(getPubkeyResult->output->c_str());
    }
    for (int i = 0; i < privCertItems.size(); i++)
    {
        FileOperator::save_file(&privCertItems[i], &tempPriFileForCert);
        string getPubKey = "openssl rsa -in " + tempFileForCert + " -pubout 2> /dev/null ";
        CommandResultPtr getPubKeyResult = CommandExecuter::RunGetOutput(getPubKey.c_str());
        printf(getPubKeyResult->output->c_str());
    }
#endif
}

Certificates::~Certificates()
{
}
