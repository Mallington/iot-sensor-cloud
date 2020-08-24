#ifndef SonicSensor_h
#define SonicSensor_h

#include <scheduling/MainScheduler.h>

class SonicSensor : public ITask{
public:
    SonicSensor(String id);
    virtual bool setup(DynamicJsonDocument* deviceJSON);
    virtual DynamicJsonDocument* getData();
    virtual bool updateState(DynamicJsonDocument* deviceJSON);
private:
    long duration; // variable for the duration of sound wave travel
    int distance;
    int echoPin = 2; // attach pin D2 Arduino to pin Echo of HC-SR04
    int trigPin = 3;
};

#endif