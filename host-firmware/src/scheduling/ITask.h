#ifndef ITask_h
#define ITask_h
class ITask{

public:
  virtual bool setup()=0;
  virtual char* getData()=0;
  virtual bool updateState(char* deviceJSON)=0;
};
#endif