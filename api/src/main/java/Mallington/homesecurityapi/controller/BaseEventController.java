package Mallington.homesecurityapi.controller;

import Mallington.homesecurityapi.model.BaseEvent;
import Mallington.homesecurityapi.model.SonicEvent;
import Mallington.homesecurityapi.service.BaseEventService;
import Mallington.homesecurityapi.service.SonicEventService;
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
    @RequestMapping(params = {"deviceID", "type"})
    public @ResponseBody()
    Iterable<BaseEvent> listObjectsByParams(@RequestParam Optional<String> deviceID,
                                    @RequestParam Optional<String> type){
        List<BaseEvent> filtered = new ArrayList<BaseEvent>();
        for(BaseEvent event : getService().listObjects()){
            if((deviceID.isPresent() && deviceID.get().equals(event.getDeviceID()) || !deviceID.isPresent()) &&
                    (type.isPresent() && type.get().equals(event.getClass().getSimpleName()) || !type.isPresent())) {
                filtered.add(event);
            }
        }

        return filtered;
    }
    @RequestMapping(params = {"deviceID"})
    public @ResponseBody()
    Iterable<BaseEvent> listObjectsByDeviceID(@RequestParam Optional<String> deviceID){
        List<BaseEvent> filtered = new ArrayList<BaseEvent>();
        for(BaseEvent event : getService().listObjects()){
            if(deviceID.isPresent() && deviceID.get().equals(event.getDeviceID())) filtered.add(event);
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
