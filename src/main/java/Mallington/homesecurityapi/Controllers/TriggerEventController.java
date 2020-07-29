/*package Mallington.homesecurityapi.Controllers;

import Mallington.homesecurityapi.Data.TriggerEvent;
        import Mallington.homesecurityapi.Data.TriggerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

public abstract class TriggerEventController<trigger extends TriggerEvent> {

    @RequestMapping
    public String index() {
        return "This is a Trigger Event Controller.";
    }

    @RequestMapping("/events")
    public @ResponseBody Iterable<trigger> getEvents(@RequestParam(value = "limit", defaultValue = "10") Integer limit,
                                   @RequestParam(value = "deviceID", defaultValue = "") String deviceID){
        return getRepository().findAll();
    }

    @PostMapping("/create")
    public @ResponseBody String logEvent(@RequestBody trigger student){
        getRepository().save(student);
        return "Saved";
    }

    public abstract TriggerRepository<trigger> getRepository();

}
*/