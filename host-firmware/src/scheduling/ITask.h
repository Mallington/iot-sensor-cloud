
#include <scheduling/MainScheduler.h>
#define ARDUINOJSON_ENABLE_STD_STRING 0
#define ARDUINOJSON_ENABLE_STD_STREAM 0
#include <ArduinoJson.h>
#ifndef ITask_h
#define ITask_h
class ITask{

public:
    ITask(String deviceIDPass);
    virtual bool setup(DynamicJsonDocument* deviceJSON);
    virtual DynamicJsonDocument* getData();
    virtual bool updateState(DynamicJsonDocument* deviceJSON);
    String getDeviceID();
private:
  String deviceID;
};
#endif