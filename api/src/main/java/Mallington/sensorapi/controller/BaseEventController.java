package Mallington.sensorapi.controller;

import Mallington.sensorapi.model.BaseEvent;
import Mallington.sensorapi.service.BaseEventService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController()
@RequestMapping("/events")
public class BaseEventController extends BaseController<BaseEvent, Integer, BaseEventService>{
    @RequestMapping(params = {"deviceId", "type"})
    public @ResponseBody()
    Iterable<BaseEvent> listObjectsByParams(@RequestParam Optional<String> deviceId,
                                    @RequestParam Optional<String> type){
        List<BaseEvent> filtered = new ArrayList<BaseEvent>();
        for(BaseEvent event : getService().listObjects()){
            if((deviceId.isPresent() && deviceId.get().equals(event.getDeviceId()) || !deviceId.isPresent()) &&
                    (type.isPresent() && type.get().equals(event.getClass().getSimpleName()) || !type.isPresent())) {
                filtered.add(event);
            }
        }

        return filtered;
    }
    @RequestMapping(params = {"deviceId"})
    public @ResponseBody()
    Iterable<BaseEvent> listObjectsByDeviceID(@RequestParam Optional<String> deviceId){
        List<BaseEvent> filtered = new ArrayList<BaseEvent>();
        for(BaseEvent event : getService().listObjects()){
            if(deviceId.isPresent() && deviceId.get().equals(event.getDeviceId())) filtered.add(event);
        }

        return filtered;
    }
    @RequestMapping(params = {"type"})
    public @ResponseBody()
    Iterable<BaseEvent> listObjectsByType(@RequestParam Optional<String> type){
        List<BaseEvent> filtered = new ArrayList<BaseEvent>();
        for(BaseEvent event : getService().listObjects()){
            if(type.isPresent() && type.get().equals(event.getClass().getSimpleName())) filtered.add(event);
        }

        return filtered;
    }
}
