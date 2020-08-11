package Mallington.homesecurityapi.service;

import Mallington.homesecurityapi.model.DeviceInfo;
import Mallington.homesecurityapi.repository.DeviceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

@Service
public class DeviceService extends CRUDServiceBase<DeviceInfo, String>{
    @Autowired
    DeviceRepository repository;

    @Override
    public CrudRepository<DeviceInfo, String> getRepository() {
        return repository;
    }
}
