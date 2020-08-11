package Mallington.homesecurityapi.service;

import Mallington.homesecurityapi.model.DeviceInfo;
import Mallington.homesecurityapi.model.SonicEvent;
import Mallington.homesecurityapi.repository.DeviceRepository;
import Mallington.homesecurityapi.repository.SonicEventRepository;
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
