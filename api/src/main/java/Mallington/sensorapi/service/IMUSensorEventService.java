package Mallington.sensorapi.service;

import Mallington.sensorapi.model.IMUSensorEvent;
import Mallington.sensorapi.model.SonicEvent;
import Mallington.sensorapi.repository.IMUSensorEventRepository;
import Mallington.sensorapi.repository.SonicEventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

@Service
public class IMUSensorEventService extends CRUDServiceBase<IMUSensorEvent, Integer>{
    @Autowired
    IMUSensorEventRepository repository;

    @Override
    public CrudRepository<IMUSensorEvent, Integer> getRepository() {
        return repository;
    }
}
