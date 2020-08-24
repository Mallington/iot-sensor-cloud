#include <sensors/SonicSensor.h>
SonicSensor::SonicSensor(String deviceIDPass):ITask(deviceIDPass){
}
bool SonicSensor::setup(DynamicJsonDocument* deviceJSON){
    return false;
}
DynamicJsonDocument* SonicSensor::getData(){
    DynamicJsonDocument jsonDocument(1024);
    return &jsonDocument;
}
bool SonicSensor::updateState(DynamicJsonDocument* deviceJSON){
    return false;
}