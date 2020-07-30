package Mallington.homesecurityapi.Data;

import javax.persistence.Entity;

@Entity
public class SonicEvent extends BaseEvent {
    private double proximity;
    public double getProximity() {
        return proximity;
    }
}
