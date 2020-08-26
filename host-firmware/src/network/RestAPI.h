#ifndef RestAPI_h
#define RestAPI_h
#include "Client.h"
class RestAPI{

public:
    RestAPI(char* hostPass, int portPass, Client& clientPass);
    String getRequest(String request, int timeout, bool keepAlive);
private:
    String readResponse();
    Client* client;
    char* host;
    int port;
};
#endif