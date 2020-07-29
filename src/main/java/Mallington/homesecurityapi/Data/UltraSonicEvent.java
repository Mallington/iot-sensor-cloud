package Mallington.homesecurityapi.Data;

import javax.persistence.Entity;
import java.util.Date;
@Entity
public class UltraSonicEvent extends TriggerEvent{
    private double proximity;
    public double getProximity() {
        return proximity;
    }
}
