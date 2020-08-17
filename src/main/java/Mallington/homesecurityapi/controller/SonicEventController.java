package Mallington.homesecurityapi.controller;

import Mallington.homesecurityapi.model.SonicEvent;


import Mallington.homesecurityapi.service.CRUDServiceBase;
import Mallington.homesecurityapi.service.SonicEventService;
import org.springframework.web.bind.annotation.*;
@RestController()
@RequestMapping("/sonic-events")
public class SonicEventController extends BaseController<SonicEvent, Integer, SonicEventService>{
}
