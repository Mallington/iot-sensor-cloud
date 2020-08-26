#ifndef MainScheduler_h
#define MainScheduler_h

#include <scheduling/ITask.h>

#define ARDUINOJSON_ENABLE_STD_STRING 0
#define ARDUINOJSON_ENABLE_STD_STREAM 0
#define MAIN_SCHEDULER_MAX_SIZE 1024
#include <ArduinoJson.h>


class MainScheduler{
    public:
        MainScheduler(long waitPeriod);
        int getMaxCount();
        long getWaitPeriod();
        int count();
        void tick();
        void add(ITask* task);
        void setup();
    private:
        int size =0;
        long waitPeriod;
        long last =0;
        ITask* tasks[MAIN_SCHEDULER_MAX_SIZE];
};

#endif
