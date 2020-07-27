package Mallington.homesecurityapi.Data;

import java.util.Date;

public class UltraSonicEvent extends TriggerEvent{
    private double proximity;
    public UltraSonicEvent(Date time, long id, double proximity) {
        super(time, id);
        this.proximity = proximity;
    }

    public double getProximity() {
        return proximity;
    }
}
