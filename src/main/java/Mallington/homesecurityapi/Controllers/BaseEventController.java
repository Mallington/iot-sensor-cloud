package Mallington.homesecurityapi.Controllers;

import Mallington.homesecurityapi.Data.BaseEvent;
import Mallington.homesecurityapi.Data.DeviceInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.*;

public class BaseEventController<trigger extends BaseEvent> extends BaseController <trigger, Integer>{
    /*@Autowired
    CrudRepository<DeviceInfo, Integer> controller;*/

    @RequestMapping
    public String index() {
        return "This is a Trigger Event Controller.";
    }


}
