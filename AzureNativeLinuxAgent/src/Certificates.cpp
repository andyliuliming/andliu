#include "Certificates.h"
#include "CommandExecuter.h"
#include "FileOperator.h"
#include "Logger.h"
#include "Macros.h"
#include "StringUtil.h"
#include "XmlRoutine.h"
#include <algorithm>
#include <stdlib.h>
#include <string>
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
    string tempFileForPubCert = "temp.pem";
    string tempPriFileForCert = "temppri.pem";
    map<string, string> thumpPrintPubkeyPair;
    for (int i = 0; i < pubItems.size(); i++)
    {
        FileOperator::save_file(&pubItems[i], &tempFileForPubCert);
        string getThumbprint = "openssl x509 -in " + tempFileForPubCert + " -fingerprint -noout";
        CommandResultPtr getThumbprintResult = CommandExecuter::RunGetOutput(getThumbprint.c_str());

        string thumbPrint = getThumbprintResult->output->c_str();
        vector<string> fingerPrintSplit;
        string fingerPrintSpliter = "=";
        StringUtil::string_split(thumbPrint, fingerPrintSpliter, &fingerPrintSplit);
        std::string::iterator end_pos = std::remove(fingerPrintSplit[1].begin(), fingerPrintSplit[1].end(), ':');
        fingerPrintSplit[1].erase(end_pos, fingerPrintSplit[1].end());
        string getPubKey = string("openssl x509 -in ") + tempFileForPubCert + " -pubkey -noout";
        CommandResultPtr getPubKeyResult = CommandExecuter::RunGetOutput(getPubKey.c_str());
        StringUtil::trim(fingerPrintSplit[1]); 
        string fileNameOfPubKey = fingerPrintSplit[1] + ".crt";
        FileOperator::move_file(tempFileForPubCert.c_str(), fileNameOfPubKey.c_str());
        thumpPrintPubkeyPair[*(getPubKeyResult->output)] = fingerPrintSplit[1];
    }

    for (int i = 0; i < privCertItems.size(); i++)
    {
        FileOperator::save_file(&privCertItems[i], &tempPriFileForCert);
        string getPubKey = "openssl rsa -in " + tempPriFileForCert + " -pubout 2> /dev/null";
        CommandResultPtr getPubKeyResult2 = CommandExecuter::RunGetOutput(getPubKey.c_str());
        //print the result 
        string fileNameOfPrivateKey = thumpPrintPubkeyPair[*(getPubKeyResult2->output)] + ".prv";
       // Logger::getInstance().Log("move file from %s to %s", tempPriFileForCert.c_str(), fileNameOfPrivateKey.c_str());
        FileOperator::move_file(tempPriFileForCert.c_str(), fileNameOfPrivateKey.c_str());
    }
#endif
}

Certificates::~Certificates()
{
}
