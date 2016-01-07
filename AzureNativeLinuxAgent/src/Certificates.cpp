#include "Certificates.h"
#include "FileOperator.h"

Certificates::Certificates()
{
}

void Certificates::Parse(string * certificatesText)
{
    string certificationsFile = "Native_Certificates.xml";
    FileOperator::save_file(certificatesText, &certificationsFile);


}

void Certificates::Process()
{
}

Certificates::~Certificates()
{
}
