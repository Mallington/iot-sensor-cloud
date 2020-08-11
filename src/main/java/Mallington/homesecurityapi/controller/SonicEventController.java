package Mallington.homesecurityapi.controller;

import Mallington.homesecurityapi.model.SonicEvent;


import Mallington.homesecurityapi.service.CRUDServiceBase;
import Mallington.homesecurityapi.service.SonicEventService;
import org.springframework.web.bind.annotation.*;
@RestController()
@RequestMapping("/sonic-events")
public class SonicEventController extends BaseController<SonicEvent, Integer, SonicEventService>{
  /*  @Autowired
    SonicEventService service;

    public CRUDServiceInterface<SonicEvent, Integer> getService() {
        return service;
    } */
    /*@RequestMapping
    public @ResponseBody
    Iterable<SonicEvent> listObjects(){
        return getService().listObjects();
    }

    @RequestMapping("/latest")
    public @ResponseBody
    SonicEvent latest(){
        return getService().latest();
    }

    @PostMapping
    public @ResponseBody String create(@RequestBody  SonicEvent newObject){
        return getService().create(newObject);
    } */
}
