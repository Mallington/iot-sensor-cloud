package Mallington.sensorapi.model;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity(name = "DeviceConfiguration")
@Table(name="device_configuration")
public class DeviceConfiguration implements Identifiable<String>{

    @Column(name="configuration_id")
    @Id
    @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    private String id;

    private String ssid;
    private String wifiPassword;
    private String apiEndpoint;
    private int port;
    private String firmwareBinaries;


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

    @Override
    public String getId() {
        return id;
    }
}
