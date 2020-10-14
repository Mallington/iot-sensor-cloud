#include <sensors/IMUSensor.h>
IMUSensor::IMUSensor(String deviceIDPass):ITask(deviceIDPass){}
bool IMUSensor::setup(DynamicJsonDocument* deviceJSON){
	Serial.println("Setting up IMU");
    if (!IMU.begin()) {
    	Serial.println("Failed to initialize IMU!");
    return false;
  } 

  Serial.println("IMU initialized!");
    return true;
}

bool IMUSensor::getData(DynamicJsonDocument* outputDocument){
		Serial.println("IMU");
		if (! (IMU.accelerationAvailable() && IMU.gyroscopeAvailable())) return false;
		Serial.println("Reading Data");
		IMU.readAcceleration(aX, aY, aZ);
		IMU.readGyroscope(gX, gY, gZ);

		const char * spacer = ", ";
		Serial.print(aX); Serial.print(spacer);
		Serial.print(aY); Serial.print(spacer);
		Serial.print(aZ); Serial.print(spacer);
		Serial.print(gX); Serial.print(spacer);
		Serial.print(gY); Serial.print(spacer);
		Serial.println(gZ);
		
		(*outputDocument)["type"]= "IMUSensorEvent";
		(*outputDocument)["aX"]= aX;
		(*outputDocument)["aY"]= aY;
		(*outputDocument)["aZ"]= aZ;
		(*outputDocument)["gX"]= gX;
		(*outputDocument)["gY"]= gY;
		(*outputDocument)["gZ"]= gZ; 

		return true;

}
bool IMUSensor::updateState(DynamicJsonDocument* deviceJSON){
    return false;
}