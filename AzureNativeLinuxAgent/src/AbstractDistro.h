#pragma once
#include <string>
using namespace std;

class AbstractDistro
{
public:
    static AbstractDistro& getInstance()
    {
        static AbstractDistro instance;
        return instance;
    }
    void setHostName(string &hostName);
private:
    AbstractDistro()
    {

    }
    AbstractDistro(AbstractDistro const&);              // Don't Implement.
    ~AbstractDistro() {
    };
    void operator=(AbstractDistro const&); // Don't implement
};

