package Mallington.homesecurityapi.controller;

import Mallington.homesecurityapi.model.BaseEvent;
import Mallington.homesecurityapi.model.SonicEvent;
import Mallington.homesecurityapi.service.BaseEventService;
import Mallington.homesecurityapi.service.SonicEventService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@RequestMapping("/events")
public class BaseEventController extends BaseController<BaseEvent, Integer, BaseEventService>{
}
