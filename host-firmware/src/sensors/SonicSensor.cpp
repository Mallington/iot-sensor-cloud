#include <sensors/SonicSensor.h>

bool SonicSensor::setup(){
    return false;
}
DynamicJsonDocument& SonicSensor::getData(){
    DynamicJsonDocument jsonDocument(1024);
    return jsonDocument;
}
bool SonicSensor::updateState(DynamicJsonDocument& deviceJSON){
    return false;
}