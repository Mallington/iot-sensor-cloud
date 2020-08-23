#include "network/RestAPI.h"
#include "delay.h"

RestAPI::RestAPI(char* hostPass, int portPass, Client& clientPass){
    client = &clientPass;
    host = hostPass;
    port = portPass;
}

String RestAPI::readJSONString(){
  int openCount =0;
  bool started =false;
  bool quotes = false;
  String recieved = "";

  while (client->available()) {
    char current = (char)client->read();
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
  client->flush();
  return "INVALID";
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

    return readJSONString();
}