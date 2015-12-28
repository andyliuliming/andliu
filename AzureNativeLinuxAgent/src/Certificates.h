#pragma once
#include <string>
using namespace std;
class Certificates
{
public:
    Certificates(); 
    void Parse(string * certificatesText);
    void Process();
    ~Certificates();
};

