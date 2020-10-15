#include "WiFiUtils.h"

int WiFiUtilsClass::connectWiFI(char* ssid, char* password, long timeout, int attempts){
  int status = WL_IDLE_STATUS;
  if (WiFi.status() == WL_NO_MODULE) {
    Serial.println("Communication with WiFi module failed!");
    // don't continue
    while (true);
  }
  // attempt to connect to Wifi network:

  for (int i=0; status != WL_CONNECTED && i<attempts; i++ ) {  
    status = WiFi.begin(ssid, password);
    unsigned long begin = millis();
    while(status != WL_CONNECTED && millis()-begin<=timeout);
  }
  return status;
}

void WiFiUtilsClass::printWiFiStatus() {
  // print the SSID of the network you're attached to:
  Serial.print("SSID: ");
  Serial.println(WiFi.SSID());

  // print your board's IP address:
  IPAddress ip = WiFi.localIP();
  Serial.print("IP Address: ");
  Serial.println(ip);

  // print the received signal strength:
  long rssi = WiFi.RSSI();
  Serial.print("signal strength (RSSI):");
  Serial.print(rssi);
  Serial.println(" dBm");
}
WiFiUtilsClass WiFiUtils;