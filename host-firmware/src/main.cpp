#include <Arduino.h>
// Sensor pins
#define sensorPower 7
#define sensorPin A0

// Value for storing water level
int val = 0;
int avg =5;
int avgs[5];
int curr=0;
void setup() {
	// Set D7 as an OUTPUT
	pinMode(sensorPower, OUTPUT);
	
	// Set to LOW so no power flows through the sensor
	digitalWrite(sensorPower, LOW);
	
	Serial.begin(9600);
}

//This is a function used to get the reading
int readSensor() {
	digitalWrite(sensorPower, HIGH);	// Turn the sensor ON
	delay(10);							// wait 10 milliseconds
	val = analogRead(sensorPin);		// Read the analog value form sensor
	digitalWrite(sensorPower, LOW);		// Turn the sensor OFF
	return val;							// send current reading
}

void loop() {
	//get the reading from the function below and print it
	int level = readSensor();
  avgs[curr%avg] = level;

  int fin =0;

  for(int i=0; i<avg; i++) fin+=avgs[i];
	
	
	Serial.println(fin/avg);
	curr+=1;
	delay(100);
}