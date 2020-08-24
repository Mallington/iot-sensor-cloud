#ifndef SonicSensor_h
#define SonicSensor_h

#include <scheduling/MainScheduler.h>

class SonicSensor : public ITask{
    virtual bool setup();
    virtual DynamicJsonDocument& getData();
    virtual bool updateState(DynamicJsonDocument& deviceJSON);
};

#endif