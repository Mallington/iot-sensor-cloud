package Mallington.homesecurityapi.model;

import com.fasterxml.jackson.annotation.JsonTypeInfo;

import javax.persistence.Entity;

@Entity
public class SonicEvent extends BaseEvent {
    private double proximity;
    public double getProximity() {
        return proximity;
    }
}
