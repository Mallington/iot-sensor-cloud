package Mallington.sensorapi.service;

import Mallington.sensorapi.model.DeviceConfiguration;
import Mallington.sensorapi.model.DeviceInfo;
import Mallington.sensorapi.repository.DeviceConfigurationRepository;
import Mallington.sensorapi.repository.DeviceRepository;
import Mallington.sensorapi.repository.PinConfigurationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

@Service
public class DeviceConfigurationService extends CRUDServiceBase<DeviceConfiguration, String>{
    @Autowired
    DeviceConfigurationRepository repository;

    @Override
    public CrudRepository<DeviceConfiguration, String> getRepository() {
        return repository;
    }
}
