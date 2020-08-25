package Mallington.homesecurityapi.model;

import javax.persistence.Entity;

@Entity
public class WaterDepthEvent extends BaseEvent {
    private double depth;
    public double getDepth() {
        return depth;
    }
}
