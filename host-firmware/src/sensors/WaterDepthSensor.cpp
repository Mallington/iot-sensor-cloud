#include <sensors/WaterDepthSensor.h>
WaterDepthSensor::WaterDepthSensor(String deviceIDPass):ITask(deviceIDPass){}
bool WaterDepthSensor::setup(DynamicJsonDocument* deviceJSON){
    pinMode(sensorPin, INPUT);
    pinMode(sensorPower, OUTPUT);
	digitalWrite(sensorPower, LOW);
    return true;
}
int WaterDepthSensor::readSensor() {
	digitalWrite(sensorPower, HIGH);	// Turn the sensor ON
	delay(10);							// wait 10 milliseconds
	val = analogRead(sensorPin);		// Read the analog value form sensor
	digitalWrite(sensorPower, LOW);		// Turn the sensor OFF
	return val;							// send current reading
}
void WaterDepthSensor::getData(DynamicJsonDocument* outputDocument){
	int reading = readSensor();
    (*outputDocument)["depth"]= reading;
    (*outputDocument)["type"]= "WaterDepthEvent";
}
bool WaterDepthSensor::updateState(DynamicJsonDocument* deviceJSON){
    return false;
}