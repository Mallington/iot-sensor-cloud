package Mallington.homesecurityapi.Data;

import javax.persistence.*;
import java.util.Date;

@MappedSuperclass
public class TriggerEvent {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;

    private Date time;
    private String deviceID;

    public Date getTime() {
        return time;
    }

    public Integer getId() {
        return id;
    }

    public String getDeviceID() {
        return deviceID;
    }
}
