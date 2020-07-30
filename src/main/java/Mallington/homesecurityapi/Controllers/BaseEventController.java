package Mallington.homesecurityapi.Controllers;

import Mallington.homesecurityapi.Data.BaseEvent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.*;

public class BaseEventController<trigger extends BaseEvent> {
    @Autowired
    CrudRepository<trigger, Integer> controller;

    @RequestMapping
    public String index() {
        return "This is a Trigger Event Controller.";
    }

    @RequestMapping("/events")
    public @ResponseBody Iterable<trigger> getEvents(@RequestParam(value = "limit", defaultValue = "10") Integer limit,
                                   @RequestParam(value = "deviceID", defaultValue = "") String deviceID){
        return controller.findAll();
    }

    @PostMapping("/create")
    public @ResponseBody String logEvent(@RequestBody trigger student){
        controller.save(student);
        return "Saved";
    }

}
