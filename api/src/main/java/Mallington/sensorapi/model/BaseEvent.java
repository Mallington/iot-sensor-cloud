package Mallington.sensorapi.model;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

@MappedSuperclass
@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, include = JsonTypeInfo.As.PROPERTY, property = "type")
@JsonSubTypes({
        @JsonSubTypes.Type(value = SonicEvent.class, name = "SonicEvent"),
        @JsonSubTypes.Type(value = WaterDepthEvent.class, name = "WaterDepthEvent"),
        @JsonSubTypes.Type(value = IMUSensorEvent.class, name = "IMUSensorEvent")
})
public abstract class BaseEvent implements Identifiable<Integer>{
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;

    @CreationTimestamp
    private Date time;

    private String deviceId;

    public Date getTime() {
        return time;
    }

    public Integer getId() {
        return id;
    }

    public String getDeviceId() {
        return deviceId;
    }
}
