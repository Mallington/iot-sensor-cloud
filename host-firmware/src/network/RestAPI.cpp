#include "network/RestAPI.h"
#include "delay.h"
#include <Arduino.h>

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

String RestAPI::getRequest(String request, int timeout, bool keepAlive){
    if(!client->connected()){
      if(!client->connect(host, port)) return "NO_CONNECTION";
    }

  client->println(String("GET ")+request+" HTTP/1.1");
  client->println(String("Host: ")+host+":"+port);
  client->println("Connection: "+String((keepAlive)?"Keep-Alive":"close"));
  client->println();

  long start = millis();
  
  while(client->available()<=0){
    if(millis()-start>timeout){
      return "TIMEOUT";
    }
  }
    return readResponse();
}