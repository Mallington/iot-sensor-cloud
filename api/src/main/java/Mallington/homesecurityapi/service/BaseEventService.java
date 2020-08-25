package Mallington.homesecurityapi.service;

import Mallington.homesecurityapi.model.BaseEvent;
import Mallington.homesecurityapi.model.DeviceInfo;
import Mallington.homesecurityapi.model.SonicEvent;
import Mallington.homesecurityapi.model.WaterDepthEvent;
import Mallington.homesecurityapi.repository.BaseEventRepository;
import Mallington.homesecurityapi.repository.DeviceRepository;
import Mallington.homesecurityapi.repository.SonicEventRepository;
import Mallington.homesecurityapi.repository.WaterDepthEventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class BaseEventService  implements CRUDServiceInterface<BaseEvent, Integer>{
    @Autowired
    WaterDepthEventRepository waterDepthEventRepository;
    @Autowired
    SonicEventRepository sonicEventRepository;

    private Iterable<BaseEvent> appendRepositories(CrudRepository ...repositories){
        List<BaseEvent> events = new ArrayList<BaseEvent>();
        for(CrudRepository<BaseEvent, Integer> repo : repositories) for(BaseEvent event : repo.findAll()) events.add(event);
        return events;
    }

    @Override
    @Transactional
    public Iterable<BaseEvent> listObjects() {
        return appendRepositories( waterDepthEventRepository, sonicEventRepository);
    }

    @Override
    public BaseEvent latest() {
        return null;
    }

    @Override
    @Transactional
    public Integer create(BaseEvent newObject) {
        return null;
    }

    @Override
    public BaseEvent getByID(Integer id) {
        return null;
    }

    @Override
    public String update(BaseEvent newObject) {
        return null;
    }

    @Override
    public String removeByID(Integer id) {
        return null;
    }
}
