#define ARDUINOJSON_ENABLE_STD_STRING 0
#define ARDUINOJSON_ENABLE_STD_STREAM 0
#include "ArduinoJson.h"
#include <SPI.h>
#include <WiFiNINA.h>
#include <network/WiFiUtils.h>



#include "run_parameters.h"
#include <network/RestAPI.h> 
///////please enter your sensitive data in the Secret tab/arduino_secrets.h
char ssid[] = WIFI_SSID;        // your network SSID (name)
char pass[] = WIFI_PASS;    // your network password (use for WPA, or use as key for WEP)
int keyIndex = 0;            // your network key Index number (needed only for WEP)


// if you don't want to use DNS (and reduce your sketch size)
// use the numeric IP instead of the name for the server:
//IPAddress server(74,125,232,128);  // numeric IP for Google (no DNS)

// Initialize the Ethernet client library
// with the IP address and port of the server
// that you want to connect to (port 80 is default for HTTP):

WiFiClient client;
RestAPI api(API_ADDRESS, API_PORT, client);
void setup() {
  //Initialize serial and wait for port to open:
  Serial.begin(9600);
  while (!Serial) {
    ; // wait for serial port to connect. Needed for native USB port only
  }

  // check for the WiFi module:
  int status = WiFiUtils.connectWiFI(ssid, pass, 10000);
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

  if (!client.connected()) {
    Serial.println();
    Serial.println("disconnecting from server.");
    client.stop();
  }
    while (Serial.available()<=0);
}
