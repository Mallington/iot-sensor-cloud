#include <scheduling/MainScheduler.h>
#include <SPI.h>
#include <WiFiNINA.h>

#include <network/WiFiUtils.h>
#include "run_parameters.h"
#include <network/RestAPI.h> 
#include <sensors/SonicSensor.h>

WiFiClient client;
RestAPI api(API_ADDRESS, API_PORT, client);
void setup() {
  //Initialize serial and wait for port to open:
  Serial.begin(9600);
  while (!Serial) {
    ; // wait for serial port to connect. Needed for native USB port only
  }

  // check for the WiFi module:
  int status = WiFiUtils.connectWiFI(WIFI_SSID, WIFI_PASS, 10000);
  if(status == WL_CONNECTED){
  Serial.println("Connected to wifi");
  WiFiUtils.printWiFiStatus();
}
}

void loop() {
    Serial.println("Connected");
    String recieved = api.getRequest(String("/devices/")+DEVICE_ID, 2000, true);
    Serial.println("R:"+recieved);

    DynamicJsonDocument doc(1024);
    DeserializationError error = deserializeJson(doc, recieved);

    if(error){
      Serial.println("That didn't go well, couldn't parse the response!");
      Serial.println(error.c_str());
    }
    const char* deviceName = doc["deviceName"];
    Serial.println(deviceName); 

    SonicSensor sensor("hello");
    Serial.println(sensor.getDeviceID());

  if (!client.connected()) {
    Serial.println();
    Serial.println("disconnecting from server.");
    client.stop();
  }
    while (Serial.available()<=0);
}
