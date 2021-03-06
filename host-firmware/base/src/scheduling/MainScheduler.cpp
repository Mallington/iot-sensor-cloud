#include <scheduling/MainScheduler.h>
MainScheduler::MainScheduler(long waitPeriodPass, RestAPI& apiPass){
    waitPeriod = waitPeriodPass;
    api = &apiPass;
}
int MainScheduler::getMaxCount(){
    return MAIN_SCHEDULER_MAX_SIZE;
}
long MainScheduler::getWaitPeriod(){
    return waitPeriod;
}
int MainScheduler::count(){
    return size;
}

void MainScheduler::tick(){
    if(millis()-last>=waitPeriod){
        last = millis();

        DynamicJsonDocument doc(1024);
        for(int i=0; i< count(); i++){
            bool needsUpdate = tasks[i]->getData(&doc); 

            if(needsUpdate){
                 doc["deviceId"]= tasks[i]->getDeviceID();
                String output;
                serializeJson(doc, output);
                String res = api->postRequest("/events/",output, "application/json", 100);
            }

            doc.clear();
        }

        long duration = millis()-last;
        if(duration>waitPeriod) Serial.println("Took too long!");
        Serial.println(String("Round took: ")+duration+" ms");
    }
}
void MainScheduler::add(ITask* task){
    if(count()<getMaxCount()){
        tasks[size] = task;
        size++;
    }
}

void MainScheduler::setup(){
    DynamicJsonDocument doc(1);
    for(int i=0; i< count(); i++){
            String deviceID = tasks[i]->getDeviceID(); 
            tasks[i]->setup(&doc);
        }
}