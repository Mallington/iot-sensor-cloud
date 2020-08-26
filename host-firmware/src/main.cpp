#include <scheduling/MainScheduler.h>
#include <SPI.h>
#include <WiFiNINA.h>

#include <network/WiFiUtils.h>
#include "run_parameters.h"
#include <network/RestAPI.h> 
#include <sensors/SonicSensor.h>
#include <sensors/WaterDepthSensor.h>

WiFiClient client;
RestAPI api(API_ADDRESS, API_PORT, client);

MainScheduler scheduler(1000);

void setup() {
  Serial.begin(9600);

  int status = WiFiUtils.connectWiFI(WIFI_SSID, WIFI_PASS, 10000);
  if(status == WL_CONNECTED){
    Serial.println("Connected to wifi");
    WiFiUtils.printWiFiStatus();
  }
    //Add sensor tasks
    scheduler.add(new WaterDepthSensor(String("testID")));
    scheduler.setup();
}

void loop() {
    /*Serial.println("Connected");
    String recieved = api.getRequest(String("/devices/")+DEVICE_ID, 2000, true);
    Serial.println("R:"+recieved);

    DynamicJsonDocument doc(1024);
    DeserializationError error = deserializeJson(doc, recieved);

    if(error){
      Serial.println("That didn't go well, couldn't parse the response!");
      Serial.println(error.c_str());
    }
    const char* deviceName = doc["deviceName"];
    Serial.println(deviceName); */

    scheduler.tick();

/*	while(millis()-last<waitPeriod);
	last = millis();

	DynamicJsonDocument doc(1024);
    for(ITask* task : tasks){
      task->getData(&doc); 
    }
	long duration = millis()-last;
	if(duration>waitPeriod) Serial.println("Took too long!");
	Serial.println(String("Round took: ")+duration+" ms"); */
  /*if (!client.connected()) {
    Serial.println();
    Serial.println("disconnecting from server.");
    client.stop();
  }
    while (Serial.available()<=0); */
}