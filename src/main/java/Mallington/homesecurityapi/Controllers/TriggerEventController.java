/*package Mallington.homesecurityapi.Controllers;
        import java.time.Instant;
        import java.util.ArrayList;
        import java.util.Arrays;
        import java.util.Date;
        import java.util.List;
        import java.util.concurrent.atomic.AtomicLong;

        import Mallington.homesecurityapi.Data.TriggerEvent;
        import Mallington.homesecurityapi.Data.TriggerRepository;
        import Mallington.homesecurityapi.Data.UltraSonicEvent;
        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.data.repository.CrudRepository;
        import org.springframework.web.bind.annotation.*;

public class TriggerEventController<trigger extends TriggerEvent> {
    @Autowired
    private TriggerRepository<trigger> repository;

    @RequestMapping
    public String index() {
        return "This is a Trigger Event Controller.";
    }

    @RequestMapping("/events")
    public @ResponseBody Iterable<trigger> getEvents(@RequestParam(value = "limit", defaultValue = "10") Integer limit,
                                   @RequestParam(value = "deviceID", defaultValue = "") String deviceID){
        return repository.findAll();
    }

    @PostMapping("/create")
    public @ResponseBody String logEvent(@RequestBody trigger student){
        repository.save(student);
        return "Saved";
    }

}
*/