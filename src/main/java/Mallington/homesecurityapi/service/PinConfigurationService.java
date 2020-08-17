package Mallington.homesecurityapi.service;

import Mallington.homesecurityapi.model.PinConfiguration;
import Mallington.homesecurityapi.model.SonicEvent;
import Mallington.homesecurityapi.repository.PinConfigurationRepository;
import Mallington.homesecurityapi.repository.SonicEventRepository;
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
