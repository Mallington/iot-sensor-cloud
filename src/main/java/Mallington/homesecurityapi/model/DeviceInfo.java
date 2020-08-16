package Mallington.homesecurityapi.model;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class DeviceInfo implements Identifiable<String>{
    enum DeviceType{
        HOSTS, SENSOR
    }

    @Id @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    private String id;

    private String deviceName;

    private DeviceType deviceType;

    private String parentId;

    private String outputDataType;

    public String getDeviceName() {
        return deviceName;
    }

    public String getId() {
        return id;
    }

    public DeviceType getDeviceType() {
        return deviceType;
    }

    public String getParentId() {
        return parentId;
    }

    public String getOutputDataType() {
        return outputDataType;
    }
}
