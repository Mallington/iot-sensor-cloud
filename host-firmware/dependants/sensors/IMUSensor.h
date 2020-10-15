#ifndef IMUSensor_h
#define IMUSensor_h

#include <scheduling/MainScheduler.h>
#include <Arduino_LSM6DS3.h>
class IMUSensor : public ITask{
public:
    IMUSensor(String id);
    virtual bool setup(DynamicJsonDocument* deviceJSON);
    virtual bool getData(DynamicJsonDocument* outputDocument);
    virtual bool updateState(DynamicJsonDocument* deviceJSON);
private:
    float aX, aY, aZ;
    float gX, gY, gZ;
};

#endif