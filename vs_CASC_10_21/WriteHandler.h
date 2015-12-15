#pragma once
#include <fstream>
using namespace std;
class WriteHandler
{
private:
	bool started;
	HANDLE m_hThread_Rd;
	ofstream *out_file;
public:                
	WriteHandler(void);
	~WriteHandler(void);
	void StartWrite();
	void StopWrite();
	DWORD PollingWrite();


	static DWORD WINAPI StaticThreadStart(void* Param)
	{
		WriteHandler* This = (WriteHandler*) Param;
		return This->PollingWrite();
	}


};

