#include <scheduling/ITask.h>

ITask::ITask(String deviceIDPass){
     deviceID = deviceIDPass;
}
String ITask::getDeviceID(){
    return deviceID;
} 