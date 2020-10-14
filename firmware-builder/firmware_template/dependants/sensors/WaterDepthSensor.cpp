#include <sensors/WaterDepthSensor.h>
WaterDepthSensor::WaterDepthSensor(String deviceIDPass):ITask(deviceIDPass){}
bool WaterDepthSensor::setup(DynamicJsonDocument* deviceJSON){
    pinMode(sensorPin, INPUT);
    pinMode(sensorPower, OUTPUT);
	digitalWrite(sensorPower, LOW);

	for(int i=0; i<avg; i++) avgs[i]=0;
    return true;
}
int WaterDepthSensor::readSensor() {      
	digitalWrite(sensorPower, HIGH);	// Turn the sensor ON
	delay(100);							// wait 10 milliseconds
	int reading = analogRead(sensorPin);		// Read the analog value form sensor
	digitalWrite(sensorPower, LOW);		// Turn the sensor OFF
	return reading;							// send current reading
}

int WaterDepthSensor::getCurrentAvg(){
	if(curr>=avg) curr=0;
	
	avgs[curr++] = readSensor();
	Serial.println("RAW"+avgs[curr]);
	int total =0;
	for(int i=0; i<avg; i++){
		Serial.print(String(avgs[i])+",");
		 total+=avgs[i];
		 }
		 Serial.println("Data");

	return total/avg;
}

bool WaterDepthSensor::getData(DynamicJsonDocument* outputDocument){
	while(!gotEnough && curr<avg) getCurrentAvg();
	gotEnough = true;

	int averageTotal = getCurrentAvg();
	Serial.println(averageTotal);

	if(last==averageTotal) return false;
	last=averageTotal;

    (*outputDocument)["depth"]= averageTotal;
    (*outputDocument)["type"]= "WaterDepthEvent";

	return true;
}
bool WaterDepthSensor::updateState(DynamicJsonDocument* deviceJSON){
    return false;
}