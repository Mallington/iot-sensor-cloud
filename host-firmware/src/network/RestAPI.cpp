#include "network/RestAPI.h"
#include "delay.h"
#include <Arduino.h>
#include <ArduinoJson.h>

RestAPI::RestAPI(char* hostPass, int portPass, Client& clientPass){
    client = &clientPass;
    host = hostPass;
    port = portPass;
}

String RestAPI::readResponse(){
  int openCount =0;
  bool started =false;
  bool quotes = false;
  

  client->find("\r\n\r\n");
  char input[16];
  int count =0;
  char h;
  while(isHexadecimalDigit(h=client->read())){
    input[count++]=h;
  }
  input[count] = '\0';

  long countNum = strtol(input, 0, 16);

  int recievedCount =0;
  String recieved = "";
  while (client->available()&&recievedCount<=countNum) {
    char current = (char)client->read();
    recieved+=current;
    recievedCount++;
  }
  
  client->flush();
  client->stop();
  return recieved;
}
void RestAPI::printHeader(String type, String request){
  client->println(String(type+" ")+request+" HTTP/1.1");
  client->println(String("Host: ")+host+":"+port);
  client->println("Connection: close");
}
bool RestAPI::connect(){
  if(!client->connected()){
      if(!client->connect(host, port)) return false;
  }
  return true;
}

bool RestAPI::waitForResponce(int timeout){
  long start = millis();
    while(client->available()<=0){
      if(millis()-start>timeout){
        return false;
      }
    }
    return true;
}
String RestAPI::getRequest(String request, int timeout){
    if(!connect())return "NO_CONNECTION";

    printHeader("GET", request);
    client->println();

    if(!waitForResponce(timeout)) return "TIMEOUT";
    return readResponse();
}

String RestAPI::postRequest(String request, String content, String contentType, int timeout){
    if(!connect())return "NO_CONNECTION";
    
    printHeader("POST", request);
    client->println("Content-Type: "+contentType);
    client->print("Content-Length: ");
    client->println(content.length());
    client->println();
    client->println(content);

    if(!waitForResponce(timeout)) return "TIMEOUT";
    return readResponse();
}