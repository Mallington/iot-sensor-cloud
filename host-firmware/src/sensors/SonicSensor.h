#ifndef SonicSensor_h
#define SonicSensor_h

#include <scheduling/ITask.h>

class SonicSensor : public ITask{
    virtual bool setup();
    virtual char* getData();
    virtual bool updateState(char* deviceJSON);
};

#endif