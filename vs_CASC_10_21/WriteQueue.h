#pragma once
#include <queue>
using namespace std;
class WriteQueue
{
private:
	queue<float> data;
public:
	WriteQueue(void);
	~WriteQueue(void);
	void EnQueue(float value);
	int Size();
	float DeQueue();

};
