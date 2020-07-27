package Mallington.homesecurityapi.Data;

import java.util.Date;

public class TriggerEvent {
    private Date time;
    private long id;


    public TriggerEvent(Date time, long id) {
        this.time = time;
        this.id = id;
    }

    public Date getTime() {
        return time;
    }

    public long getId() {
        return id;
    }
}
