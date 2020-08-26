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
HttpClient http = HttpClient(client, API_ADDRESS, API_PORT);

MainScheduler scheduler(1000);

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
    scheduler.add(new WaterDepthSensor(String("testID")));
    scheduler.setup();

    long start;
    /*for(int i=0; i<10; i++){
    start = millis();
    http.beginRequest();
    http.get(String("/devices/")+DEVICE_ID);
    http.endRequest();
    
    int responceID = http.responseStatusCode();
    Serial.println(http.responseBody());
    Serial.println(millis()-start);
    } */
    for(int i=0; i<10; i++){
      start =millis();
      String recieved = api.getRequest(String("/devices?parentID=")+DEVICE_ID, 2000, false);
      Serial.println("R:"+recieved);
      Serial.println(millis()-start);
    }
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