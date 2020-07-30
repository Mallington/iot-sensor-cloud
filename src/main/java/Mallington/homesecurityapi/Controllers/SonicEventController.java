package Mallington.homesecurityapi.Controllers;

import Mallington.homesecurityapi.Data.SonicEvent;


import org.springframework.web.bind.annotation.*;
@RestController()
@RequestMapping("/Ultrasonic")
public class SonicEventController extends BaseEventController<SonicEvent> {

    @Override
    public String index() {
        return super.index()+" This is used for storing depth sensor events.";
    }

}
