#ifndef SonicSensor_h
#define SonicSensor_h

#include <scheduling/MainScheduler.h>

class SonicSensor : public ITask{
public: 
    SonicSensor(String deviceID);
    virtual bool setup(DynamicJsonDocument* deviceJSON);
    virtual DynamicJsonDocument* getData();
    virtual bool updateState(DynamicJsonDocument* deviceJSON);
};

#endif