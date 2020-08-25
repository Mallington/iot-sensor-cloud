package Mallington.homesecurityapi.service;

import Mallington.homesecurityapi.model.SonicEvent;
import Mallington.homesecurityapi.model.WaterDepthEvent;
import Mallington.homesecurityapi.repository.SonicEventRepository;
import Mallington.homesecurityapi.repository.WaterDepthEventRepository;
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
