package Mallington.homesecurityapi.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class DeviceInfo {
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Id
    private String deviceID;

    private String deviceName;

    public String getDeviceID() {
        return deviceID;
    }
    public String getDeviceName() {
        return deviceName;
    }
}
