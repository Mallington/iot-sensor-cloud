package Mallington.sensorapi.model;

import javax.persistence.Entity;

@Entity
public class WaterDepthEvent extends BaseEvent {
    private int depth;
    public int getDepth() {
        return depth;
    }
}

