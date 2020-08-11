package Mallington.homesecurityapi.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class DeviceInfo implements Identifiable<String>{

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private String id;

    private String deviceName;

    public String getDeviceName() {
        return deviceName;
    }

    public String getId() {
        return id;
    }
}
