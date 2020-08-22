
#ifndef WiFiUtilsClass_h
#define WiFiUtilsClass_h

#include <WiFiNINA.h>
#include <HardwareSerial.h>
class WiFiUtilsClass{

public:
    void printWiFiStatus();
};

extern WiFiUtilsClass WiFiUtils;