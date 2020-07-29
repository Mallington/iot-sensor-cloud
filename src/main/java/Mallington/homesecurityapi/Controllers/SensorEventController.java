package Mallington.homesecurityapi.Controllers;

import Mallington.homesecurityapi.Data.TriggerEvent;
import Mallington.homesecurityapi.Data.TriggerRepository;
import Mallington.homesecurityapi.Data.UltraSonicEvent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@RestController()
@RequestMapping("/Ultrasonic")
public class SensorEventController {
    @Autowired
    private TriggerRepository repository;

    @RequestMapping
    public String index() {
        return "This is a Trigger Event Controller.";
    }

    @RequestMapping("/events")
    public @ResponseBody Iterable<UltraSonicEvent> getEvents(@RequestParam(value = "limit", defaultValue = "10") Integer limit,
                                   @RequestParam(value = "deviceID", defaultValue = "") String deviceID){
        return repository.findAll();
    }

    @PostMapping("/create")
    public @ResponseBody String logEvent(@RequestBody UltraSonicEvent student){
        repository.save(student);
        return "Saved";
    }

}
