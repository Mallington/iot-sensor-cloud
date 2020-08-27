package Mallington.sensorapi.service;

import Mallington.sensorapi.model.WaterDepthEvent;
import Mallington.sensorapi.repository.WaterDepthEventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

@Service
public class WaterDepthEventService extends CRUDServiceBase<WaterDepthEvent, Integer>{
    @Autowired
    WaterDepthEventRepository repository;

    @Override
    public CrudRepository<WaterDepthEvent, Integer> getRepository() {
        return repository;
    }
}
