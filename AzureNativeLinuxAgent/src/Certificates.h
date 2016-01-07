#pragma once
#include <string>
using namespace std;
class Certificates
{
private:
    string certificatesData;
public:
    Certificates(); 
    void Parse(string * certificatesText);
    void Process();
    ~Certificates();
};

