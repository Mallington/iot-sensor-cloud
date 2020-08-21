#include <Arduino.h>
#define flash 13

void setup() {
  pinMode(flash, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  Serial.println("Hello there!");
  digitalWrite(flash, HIGH);
  delay(1000);
  digitalWrite(flash, LOW);
  delay(1000);
}