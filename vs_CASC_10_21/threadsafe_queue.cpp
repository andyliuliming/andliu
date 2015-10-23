#include "stdafx.h"
#include "threadsafe_queue.h"
#include <queue>
#include <memory>
#include <mutex>
#include <condition_variable>
template<typename t="">
class threadsafe_queue
{
  private:
     mutable std::mutex mut; 
     std::queue<t> data_queue;
     std::condition_variable data_cond;
  public:
     threadsafe_queue(){}
     threadsafe_queue(threadsafe_queue const& other)
     {
         std::lock_guard<std::mutex> lk(other.mut);
         data_queue=other.data_queue;
     }
     void push(T new_value)//入队操作
     {
         std::lock_guard<std::mutex> lk(mut);
         data_queue.push(new_value);
         data_cond.notify_one();
     } void wait_and_pop(T& value)//直到有元素可以删除为止
     {
         std::unique_lock<std::mutex> lk(mut);
         data_cond.wait(lk,[this]{return !data_queue.empty();});
         value=data_queue.front();
         data_queue.pop();
     }
     std::shared_ptr<t> wait_and_pop()
     {
         std::unique_lock<std::mutex> lk(mut);
         data_cond.wait(lk,[this]{return !data_queue.empty();});
         std::shared_ptr<t> res(std::make_shared<t>(data_queue.front()));
         data_queue.pop();
         return res;
     }
     bool try_pop(T& value)//不管有没有队首元素直接返回
     {
         std::lock_guard<std::mutex> lk(mut);
         if(data_queue.empty())
             return false;
         value=data_queue.front();
         data_queue.pop();
         return true;
     }std::shared_ptr<t> try_pop()
     {
         std::lock_guard<std::mutex> lk(mut);
         if(data_queue.empty())
             return std::shared_ptr<t>();
         std::shared_ptr<t> res(std::make_shared<t>(data_queue.front()));
         data_queue.pop();
         return res;
     }
     bool empty() const
     {
         std::lock_guard<std::mutex> lk(mut);
         return data_queue.empty();
     }
}