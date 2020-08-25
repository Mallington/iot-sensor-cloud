package Mallington.homesecurityapi.controller;


import Mallington.homesecurityapi.model.BaseEvent;
import Mallington.homesecurityapi.model.WaterDepthEvent;
import Mallington.homesecurityapi.service.BaseEventService;
import Mallington.homesecurityapi.service.WaterDepthEventService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@RequestMapping("/water-depth-event")
public class WaterDepthEventController extends BaseController<WaterDepthEvent, Integer, WaterDepthEventService>{
}
