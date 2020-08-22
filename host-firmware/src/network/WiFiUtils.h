#ifndef WiFiUtilsClass_h
#define WiFiUtilsClass_h

#include <WiFiNINA.h>
#include <HardwareSerial.h>
class WiFiUtilsClass{

public:
    void printWiFiStatus();
    int connectWiFI(char* ssid, char* password, int timeout,int attempts=1);
};

extern WiFiUtilsClass WiFiUtils;
#endif