package Mallington.sensorapi.controller;

import Mallington.sensorapi.model.DeviceInfo;
import Mallington.sensorapi.service.DeviceService;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController()
@RequestMapping("/devices")
public class DeviceController extends BaseController<DeviceInfo,String, DeviceService> {

    @RequestMapping(params = {"parentId"})
    public @ResponseBody()
    Iterable<DeviceInfo> listObjectsByDeviceID(@RequestParam Optional<String> parentId){
        List<DeviceInfo> filtered = new ArrayList<>();
        for(DeviceInfo device : getService().listObjects()){
            if(parentId.isPresent() && parentId.get().equals(device.getParentId())) filtered.add(device);
        }
        return filtered;
    }
}
