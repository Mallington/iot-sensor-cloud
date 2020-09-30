package Mallington.sensorapi.model;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.List;

@Entity(name = "DeviceInfo")
@Table(name="device_info")
public class DeviceInfo implements Identifiable<String>{

    public DeviceInfo() {
    }

    public DeviceInfo(String id, String deviceName, DeviceType deviceType, String parentId, String outputDataType, List<PinConfiguration> pinMap) {
        this.id = id;
        this.deviceName = deviceName;
        this.deviceType = deviceType;
        this.parentId = parentId;
        this.outputDataType = outputDataType;
        this.pinMap = pinMap;
    }

    public enum DeviceType{
        HOST, SENSOR
    }

    @Column(name="device_id")
    @Id @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    private String id;

    @Column(nullable = false)
    private String deviceConfigurationId;

    private String deviceName;

    private DeviceType deviceType;

    private String parentId;

    private String outputDataType;

    @OneToMany(
            mappedBy = "deviceInfo",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )

    private List<PinConfiguration> pinMap;

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

    public List<PinConfiguration> getPinMap() {
        return pinMap;
    }

    public void setPinMap(List<PinConfiguration> pinMap) {
        this.pinMap = pinMap;
        pinMap.forEach(entity -> entity.setDeviceInfo(this));
    }

    public String getDeviceConfigurationID() {
        return deviceConfigurationId;
    }

    public void setDeviceConfigurationID(String deviceConfigurationID) {
        this.deviceConfigurationId = deviceConfigurationID;
    }
}
