class ITask{

public:
  virtual bool setup()=0;
  virtual char* getData()=0;
  virtual bool updateState(char* deviceJSON)=0;
};