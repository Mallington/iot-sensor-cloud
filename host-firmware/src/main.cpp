#include <ArduinoJson.h>
#include <SPI.h>
#include <WiFiNINA.h>
#include <network/WiFiUtils.h>



#include "run_parameters.h" 
///////please enter your sensitive data in the Secret tab/arduino_secrets.h
char ssid[] = WIFI_SSID;        // your network SSID (name)
char pass[] = WIFI_PASS;    // your network password (use for WPA, or use as key for WEP)
int keyIndex = 0;            // your network key Index number (needed only for WEP)

int status = WL_IDLE_STATUS;
// if you don't want to use DNS (and reduce your sketch size)
// use the numeric IP instead of the name for the server:
//IPAddress server(74,125,232,128);  // numeric IP for Google (no DNS)

// Initialize the Ethernet client library
// with the IP address and port of the server
// that you want to connect to (port 80 is default for HTTP):

WiFiClient client;

void setup() {
  //Initialize serial and wait for port to open:
  Serial.begin(9600);
  while (!Serial) {
    ; // wait for serial port to connect. Needed for native USB port only
  }

  // check for the WiFi module:
  if (WiFi.status() == WL_NO_MODULE) {
    Serial.println("Communication with WiFi module failed!");
    // don't continue
    while (true);
  }

  String fv = WiFi.firmwareVersion();
  if (fv < WIFI_FIRMWARE_LATEST_VERSION) {
    Serial.println("Please upgrade the firmware");
  }

  // attempt to connect to Wifi network:

  while (status != WL_CONNECTED) {  
    status = WiFi.begin(ssid, pass);
    long begin = millis();
    while(status != WL_CONNECTED && millis()-begin<=10000);
  }
  Serial.println("Connected to wifi");
  
  WiFiUtils.printWiFiStatus();

  Serial.println("\nStarting connection to server...");
  // if you get a connection, report back via serial:
}

String readJSONString(WiFiClient client){
  int openCount =0;
  bool started =false;
  bool quotes = false;
  String recieved = "";
  
  while (client.available()) {
    char current = (char)client.read();
    started = started || (!started && current=='{');
    
    if(started){
      quotes = (current=='"')? !quotes : quotes;
      openCount += (current=='{' && !quotes)? 1: ((current=='}'&& !quotes)? -1 : 0);
      recieved += current;
      if(openCount==0){
        return recieved;
      }
    }
  }
  client.flush();
  return "INVALID";
}

String getRequest(String request, int timeout, bool keepAlive){
    if(!client.connected()){
      if(!client.connect(API_ADDRESS, API_PORT)) return "NO_CONNECTION";
    }
  client.println(String("GET ")+request+" HTTP/1.1");
  client.println(String("Host: ")+API_ADDRESS+":"+API_PORT);
  client.println("Connection: "+String((keepAlive)?"Keep-Alive":"close"));
  client.println();
  
  long start = millis();
  
  while(client.available()<=0){
    if(millis()-start>timeout){
      return "TIMEOUT";
    }
  }
  return readJSONString(client);
}

void loop() {
  // if there are incoming bytes available
  // from the server, read them and print them:
    Serial.println("Connected");
    unsigned long start = millis();
    for(int i=0; i<1000; i++){
    String recieved = getRequest(String("/devices/")+DEVICE_ID, 2000, true);
//    http.get(String("/devices/")+DEVICE_ID);
//    String recieved = http.responseBody();
    Serial.println("R:"+recieved);
    delay(500);
   
  }
  
  
  // if the server's disconnected, stop the client:
  if (!client.connected()) {
    Serial.println();
    Serial.println("disconnecting from server.");
    client.stop();

    // do nothing forevermore:
  
  }
    while (Serial.available()<=0);
}
