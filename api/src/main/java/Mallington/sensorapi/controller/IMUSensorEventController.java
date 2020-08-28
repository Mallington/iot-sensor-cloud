package Mallington.sensorapi.controller;

import Mallington.sensorapi.model.IMUSensorEvent;
import Mallington.sensorapi.model.SonicEvent;
import Mallington.sensorapi.service.IMUSensorEventService;
import Mallington.sensorapi.service.SonicEventService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@RequestMapping("/imu-sensor-event")
public class IMUSensorEventController extends BaseController<IMUSensorEvent, Integer, IMUSensorEventService>{
}
