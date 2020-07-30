package Mallington.homesecurityapi.Controllers;

import Mallington.homesecurityapi.Data.BaseEvent;
import Mallington.homesecurityapi.Data.DeviceInfo;
import org.springframework.web.bind.annotation.RequestMapping;

public class BaseDeviceController<trigger extends DeviceInfo> extends BaseController <trigger, String>{
    /*@Autowired
    CrudRepository<DeviceInfo, Integer> controller;*/

    @RequestMapping
    public String index() {
        return "This is a device controller.";
    }


}
