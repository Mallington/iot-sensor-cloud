package Mallington.sensorapi.service;

import Mallington.sensorapi.model.SonicEvent;
import Mallington.sensorapi.repository.SonicEventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

@Service
public class SonicEventService extends CRUDServiceBase<SonicEvent, Integer>{
    @Autowired
    SonicEventRepository repository;

    @Override
    public CrudRepository<SonicEvent, Integer> getRepository() {
        return repository;
    }
}
