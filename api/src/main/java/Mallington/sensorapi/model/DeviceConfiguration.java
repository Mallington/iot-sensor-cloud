package Mallington.sensorapi.model;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import javax.validation.constraints.Size;

@Entity(name = "DeviceConfiguration")
@Table(name="device_configuration")
public class DeviceConfiguration implements Identifiable<String>{
    public enum FirmwareBuildStatus{
        NOT_BUILT, BUILDING, BUILD_FAILED, COMPLETE
    }
    @Column(name="configuration_id")
    @Id
    @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    private String id;

    private String ssid;
    private String wifiPassword;
    private String apiEndpoint;
    private int port;
    @Column(length = 15000)
    private String firmwareBinaries;
    @Column(nullable = false)
    private FirmwareBuildStatus firmwareStatus = FirmwareBuildStatus.NOT_BUILT;


    public DeviceConfiguration(){}

    public String getSsid() {
        return ssid;
    }

    public void setSsid(String ssid) {
        this.ssid = ssid;
    }

    public String getWifiPassword() {
        return wifiPassword;
    }

    public void setWifiPassword(String wifiPassword) {
        this.wifiPassword = wifiPassword;
    }

    public String getApiEndpoint() {
        return apiEndpoint;
    }

    public void setApiEndpoint(String apiEndpoint) {
        this.apiEndpoint = apiEndpoint;
    }

    public int getPort() {
        return port;
    }

    public void setPort(int port) {
        this.port = port;
    }

    public String getFirmwareBinaries() {
        return firmwareBinaries;
    }

    public void setFirmwareBinaries(String firmwareBinaries) {
        this.firmwareBinaries = firmwareBinaries;
    }

    public void setId(String id) {
        this.id = id;
    }

    public FirmwareBuildStatus getFirmwareStatus() {
        return firmwareStatus;
    }

    public void setFirmwareStatus(FirmwareBuildStatus firmwareStatus) {
        this.firmwareStatus = firmwareStatus;
    }

    @Override
    public String getId() {
        return id;
    }
}
