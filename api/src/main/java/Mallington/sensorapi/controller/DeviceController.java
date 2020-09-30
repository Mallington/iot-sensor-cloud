package Mallington.sensorapi.controller;

import Mallington.sensorapi.model.DeviceConfiguration;
import Mallington.sensorapi.model.DeviceInfo;
import Mallington.sensorapi.service.DeviceConfigurationService;
import Mallington.sensorapi.service.DeviceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController()
@RequestMapping("/devices")
public class DeviceController extends BaseController<DeviceInfo,String, DeviceService> {
    @Autowired
    DeviceConfigurationService configurationService;

    @RequestMapping(params = {"parentId"})
    public @ResponseBody()
    Iterable<DeviceInfo> listObjectsByDeviceID(@RequestParam Optional<String> parentId){
        List<DeviceInfo> filtered = new ArrayList<>();
        for(DeviceInfo device : getService().listObjects()){
            if(parentId.isPresent() && parentId.get().equals(device.getParentId())) filtered.add(device);
        }
        return filtered;
    }
    @RequestMapping(params = {"deviceType"})
    public @ResponseBody()
    Iterable<DeviceInfo> listObjectsByType(@RequestParam Optional<DeviceInfo.DeviceType> deviceType){
        List<DeviceInfo> filtered = new ArrayList<>();
        for(DeviceInfo device : getService().listObjects()){
            if(deviceType.isPresent() && deviceType.get().equals(device.getDeviceType())) filtered.add(device);
        }
        return filtered;
    }

    @RequestMapping("/{id}/configuration")
    public @ResponseBody
    DeviceConfiguration getDeviceConfiguration(@PathVariable String id){
        DeviceInfo device = service.getByID(id);
        if(device==null || device.getDeviceConfigurationID()==null) return null;
        return configurationService.getByID(device.getDeviceConfigurationID());
    }
}
