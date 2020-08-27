package Mallington.sensorapi.controller;


import Mallington.sensorapi.model.WaterDepthEvent;
import Mallington.sensorapi.service.WaterDepthEventService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@RequestMapping("/water-depth-event")
public class WaterDepthEventController extends BaseController<WaterDepthEvent, Integer, WaterDepthEventService>{
}
