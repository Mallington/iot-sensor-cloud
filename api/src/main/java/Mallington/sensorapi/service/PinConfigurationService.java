package Mallington.sensorapi.service;

import Mallington.sensorapi.model.PinConfiguration;
import Mallington.sensorapi.repository.PinConfigurationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

@Service
public class PinConfigurationService extends CRUDServiceBase<PinConfiguration, String>{
    @Autowired
    PinConfigurationRepository repository;

    @Override
    public CrudRepository<PinConfiguration, String> getRepository() {
        return repository;
    }
}
