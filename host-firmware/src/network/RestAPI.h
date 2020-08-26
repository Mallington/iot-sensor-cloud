#ifndef RestAPI_h
#define RestAPI_h
#include "Client.h"

#define ARDUINOJSON_ENABLE_STD_STRING 0
#define ARDUINOJSON_ENABLE_STD_STREAM 0
#include <ArduinoJson.h>
class RestAPI{

public:
    RestAPI(char* hostPass, int portPass, Client& clientPass);
    String getRequest(String request, int timeout);
    String postRequest(String request, String content, String contentType, int timeout);
private:
    Client* client;
    char* host;
    int port;
    String readResponse();
    void printHeader(String type, String request);
    bool connect();
    bool waitForResponce(int timeout);
};
#endif