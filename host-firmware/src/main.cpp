#include <scheduling/MainScheduler.h>
#include <SPI.h>
#include <WiFiNINA.h>
#include <ArduinoHttpClient.h>

#include <network/WiFiUtils.h>
#include "run_parameters.h"
#include <network/RestAPI.h> 

#include <sensors/SonicSensor.h>
#include <sensors/WaterDepthSensor.h>
#include <sensors/IMUSensor.h>

WiFiClient client;
RestAPI api(API_ADDRESS, API_PORT, client);

MainScheduler scheduler(1000, api);

void setup() {
  Serial.begin(9600);
  while (!Serial);
  Serial.println("Started!");

  pinMode(13, OUTPUT);
  
  int status = WiFiUtils.connectWiFI(WIFI_SSID, WIFI_PASS, 10000);
  if(status == WL_CONNECTED){
    Serial.println("Connected to wifi");
    WiFiUtils.printWiFiStatus();
  }
    //Add sensor tasks
    scheduler.add(new WaterDepthSensor("8abb809774f7e07c0174f8bcd0df0004"));
    //scheduler.add(new IMUSensor("8abb809774343cc001743447de0a0000"));
    scheduler.setup();
    Serial.println("Setup");
}

void loop() {
    digitalWrite(13, (millis()%500>250)?HIGH:LOW);
    scheduler.tick();
}