package Mallington.homesecurityapi.model;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;

import javax.persistence.*;
import java.util.Date;

@MappedSuperclass
@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, include = JsonTypeInfo.As.PROPERTY, property = "type")
@JsonSubTypes({
        @JsonSubTypes.Type(value = SonicEvent.class, name = "SonicEvent"),
        @JsonSubTypes.Type(value = WaterDepthEvent.class, name = "WaterDepthEvent")
})
public abstract class BaseEvent implements Identifiable<Integer>{
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
