#include <sensors/SonicSensor.h>

SonicSensor::SonicSensor(String deviceIDPass):ITask(deviceIDPass){}
bool SonicSensor::setup(DynamicJsonDocument* deviceJSON){
     pinMode(trigPin, OUTPUT); // Sets the trigPin as an OUTPUT
  pinMode(echoPin, INPUT); // Sets the echoPin as an INPUT
  Serial.begin(9600); // // Serial Communication is starting with 9600 of baudrate speed
  Serial.println("Ultrasonic Sensor HC-SR04 Test"); // print some text in Serial Monitor
  Serial.println("with Arduino UNO R3");
    return true;
}
bool SonicSensor::getData(DynamicJsonDocument* outputJson){
    long start = millis();
    digitalWrite(trigPin, LOW);
   
    delayMicroseconds(2);
    // Sets the trigPin HIGH (ACTIVE) for 10 microseconds
    digitalWrite(trigPin, HIGH);
    delayMicroseconds(10);
    digitalWrite(trigPin, LOW);
    // Reads the echoPin, returns the sound wave travel time in microseconds
    duration = pulseIn(echoPin, HIGH);
     Serial.println(String("Duration: ")+(millis()-start));
    // Calculating the distance
    distance = duration * 0.034 / 2; // Speed of sound wave divided by 2 (go and back)
    // Displays the distance on the Serial Monitor
    Serial.print("Distance: ");
    Serial.print(distance);
    Serial.println(" cm");
    return true;
}
bool SonicSensor::updateState(DynamicJsonDocument* deviceJSON){
    return false;
}