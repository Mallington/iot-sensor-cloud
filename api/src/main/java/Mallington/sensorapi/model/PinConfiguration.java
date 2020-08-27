package Mallington.sensorapi.model;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;

@Entity(name = "PinConfiguration")
@Table(name="pin_configuration")
public class PinConfiguration implements Serializable, Identifiable<String>{
    enum PinType{
        ANALOGUE, DIGITAL
    }
    @Id
    @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    private String id;
    private PinType pinType;
    private Integer hostPin;
    private String nodePin;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="device_id")
    private DeviceInfo deviceInfo;

    public String getId() {
        return id;
    }

    public PinType getPinType() {
        return pinType;
    }

    public Integer getHostPin() {
        return hostPin;
    }

    public String getNodePin() {
        return nodePin;
    }

    public void setDeviceInfo(DeviceInfo deviceInfo) {
        this.deviceInfo = deviceInfo;
    }
}
