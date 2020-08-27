package Mallington.sensorapi.controller;

import Mallington.sensorapi.model.SonicEvent;


import Mallington.sensorapi.service.SonicEventService;
import org.springframework.web.bind.annotation.*;
@RestController()
@RequestMapping("/sonic-events")
public class SonicEventController extends BaseController<SonicEvent, Integer, SonicEventService>{
}
