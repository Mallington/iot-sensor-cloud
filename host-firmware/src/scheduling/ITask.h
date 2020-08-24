
#include <scheduling/MainScheduler.h>
#include <ArduinoJson.h>
#ifndef ITask_h
#define ITask_h
class ITask{

public:
  virtual bool setup();
    virtual DynamicJsonDocument& getData();
    virtual bool updateState(DynamicJsonDocument& deviceJSON);
};
#endif