#pragma once
#include <memory> 
template<typename t="">
class threadsafe_queue
{
  public:
    threadsafe_queue();
    threadsafe_queue(const threadsafe_queue&);
    threadsafe_queue& operator=(const threadsafe_queue&) = delete;//��ֹ��ֵ������Ϊ�˼� 
    void push(T new_value);
    bool try_pop(T& value);//����ɾ������Ԫ�أ���ɾ���ɹ���ͨ��value���ض���Ԫ�أ�������true;����Ϊ�գ��򷵻�false 
    std::shared_ptr<t> try_pop();//���ӷǿ�shared_ptr���ز�ɾ���Ķ���Ԫ��;���ӿգ��򷵻ص�shared_ptrΪNULL
    void wait_and_pop(T& value);//���ӷǿգ�ͨ��value���ض���Ԫ�ز�ɾ������������true;����Ϊ�գ���ͨ��condition_variable�ȴ���Ԫ����Ӻ��ٻ�ȡ�ղ�ɾ������Ԫ��
    std::shared_ptr<t> wait_and_pop();//��ǰ��һ����ֻ����ͨ��shared_ptr���ض���Ԫ��
    bool empty() const;
};
