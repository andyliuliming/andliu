#include "stdafx.h"
#include "WriteQueue.h"


WriteQueue::WriteQueue(void)
{
}


WriteQueue::~WriteQueue(void)
{
}

void WriteQueue::EnQueue(float value)
{
	this->data.push(value);
}

int WriteQueue::Size(){
	return this->data.size();
}
float WriteQueue::DeQueue()
{
	float value=data.front();
	data.pop();
	return value;
}