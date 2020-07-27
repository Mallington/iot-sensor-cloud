package Mallington.homesecurityapi.Controllers;
        import java.time.Instant;
        import java.util.Arrays;
        import java.util.Date;
        import java.util.List;
        import java.util.concurrent.atomic.AtomicLong;

        import Mallington.homesecurityapi.Data.TriggerEvent;
        import org.springframework.web.bind.annotation.RequestMapping;
        import org.springframework.web.bind.annotation.RequestParam;
        import org.springframework.web.bind.annotation.RestController;

public class TriggerEventController<trigger extends TriggerEvent> {

    @RequestMapping
    public String index() {
        return "Welcome to the home security API";
    }

    @RequestMapping("/getEvents/")
    public List<trigger> getEvents(@RequestParam(value = "limit", defaultValue = Integer.MAX_VALUE+"") Integer limit){
        List<trigger> mocks = Arrays.asList(null,null,null,null,null);
        return mocks;
    }

    @RequestMapping("/logEvent")
    public List<trigger> logEvent(){
        List<trigger> mocks = Arrays.asList(null,null,null,null,null);
        return mocks;
    }

}
