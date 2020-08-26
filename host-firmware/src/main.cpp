#include <scheduling/MainScheduler.h>
#include <SPI.h>
#include <WiFiNINA.h>
#include <ArduinoHttpClient.h>

#include <network/WiFiUtils.h>
#include "run_parameters.h"
#include <network/RestAPI.h> 
#include <sensors/SonicSensor.h>
#include <sensors/WaterDepthSensor.h>

WiFiClient client;
RestAPI api(API_ADDRESS, API_PORT, client);

MainScheduler scheduler(1000, api);

void setup() {
  Serial.begin(9600);
  while (!Serial);
  Serial.println("Started!");
  
  int status = WiFiUtils.connectWiFI(WIFI_SSID, WIFI_PASS, 10000);
  if(status == WL_CONNECTED){
    Serial.println("Connected to wifi");
    WiFiUtils.printWiFiStatus();
  }
    //Add sensor tasks
    scheduler.add(new WaterDepthSensor("8abb809773fedb7d0173fedb8ba60000"));
    scheduler.setup();
}

void loop() {
    scheduler.tick();
}