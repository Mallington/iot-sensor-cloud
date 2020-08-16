package Mallington.homesecurityapi.controller;

import Mallington.homesecurityapi.model.DeviceInfo;
import Mallington.homesecurityapi.service.DeviceService;
import org.springframework.web.bind.annotation.*;

@RestController()
@RequestMapping("/devices")
public class DeviceController extends BaseController<DeviceInfo,String, DeviceService> {
    public DeviceController(){

    }

   /*  @Autowired
    DeviceService service;

   public DeviceService getService() {
        return service;
    } */

    /*@RequestMapping
    public @ResponseBody
    Iterable<DeviceInfo> listObjects(){
        return getService().listObjects();
    }

    @RequestMapping("/latest")
    public @ResponseBody
    DeviceInfo latest(){
        return getService().latest();
    }

    @PostMapping
    public @ResponseBody String create(@RequestBody DeviceInfo newObject){
        return getService().create(newObject);
    } */
}
