#ifndef WaterDepthSensor_h
#define WaterDepthSensor_h

#include <scheduling/MainScheduler.h>

class WaterDepthSensor : public ITask{
public:
    WaterDepthSensor(String id);
    virtual bool setup(DynamicJsonDocument* deviceJSON);
    virtual bool getData(DynamicJsonDocument* outputDocument);
    virtual bool updateState(DynamicJsonDocument* deviceJSON);
private:
    int sensorPower= 7;
    int sensorPin = A5; //Equivelant to A0
    int val = 0;
    int avg =5;
    int avgs[5];
    int curr=0;
    int readSensor();
    int getCurrentAvg();
    bool gotEnough=false;
    int last =-1;
};

#endif