package Mallington.homesecurityapi.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Hashtable;
import java.util.List;

@Entity(name = "DeviceInfo")
@Table(name="device_info")
public class DeviceInfo implements Identifiable<String>{
    enum DeviceType{
        HOSTS, SENSOR
    }

    @Column(name="device_id")
    @Id @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    private String id;

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
}
