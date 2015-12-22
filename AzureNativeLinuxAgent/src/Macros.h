#pragma once
#include <string>
#include <iostream>
#include <cstdio>
#include <memory>
#ifdef _WIN32
//linux code goes here
#define POPEN (_popen)
#define PCLOSE (_pclose)
#else
// windows code goes here
#define POPEN (popen)
#define PCLOSE (pclose)
#endif
