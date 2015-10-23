#include "stdafx.h"
#include "WriteHandler.h"
#include "WriteQueue.h"
#include <Windows.h>
extern WriteQueue global_queue;

WriteHandler::WriteHandler(void)
{
	this->out_file = NULL;
}

DWORD WriteHandler::PollingWrite(){
	//TODO: 1. fix the started judgement
	//      2. use the event driven queue, make the DeQueue wait forever when no data available.
	//         and be notified automatically, when the EnQueue called.
	while(this->started){
		if(global_queue.Size()>0){
			float data=global_queue.DeQueue();
			(*(this->out_file))<<data<<endl;
			//TODO write this to the text.
		}else
		{
			Sleep(50);
		}
	}
	return 0;
}

WriteHandler::~WriteHandler(void)
{
}

void WriteHandler::StartWrite()
{
	if(!this->started)
	{
		/*
		CString strTime;
		CString dir = "d:\\data\\";
		int year = CTime::GetYear();
		int month = CTime::GetMonth();
		int day = CTime::GetDay();
		int hour = CTime::GetHour();
		int miniute = CTime::GetMinute();
		int second = CTime::GetSecond();
		*/

		
		
		this->out_file = new ofstream("d:\\data\\1.txt");
		this->started = true;
		DWORD ThreadID;
		CreateThread(NULL, 0, StaticThreadStart, (void*) this, 0, &ThreadID);
	}
}

void WriteHandler::StopWrite()
{
	this->started=false;
	if(this->out_file != NULL && this->started == true)
	{
		this->out_file->close();
	}
}
