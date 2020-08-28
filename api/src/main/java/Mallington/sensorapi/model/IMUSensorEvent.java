package Mallington.sensorapi.model;

import javax.persistence.Entity;

@Entity
public class IMUSensorEvent extends BaseEvent {
    float aX, aY, aZ;
    float gX, gY, gZ;

    public float getaX() {
        return aX;
    }

    public float getaY() {
        return aY;
    }

    public float getaZ() {
        return aZ;
    }

    public float getgX() {
        return gX;
    }

    public float getgY() {
        return gY;
    }

    public float getgZ() {
        return gZ;
    }
}

