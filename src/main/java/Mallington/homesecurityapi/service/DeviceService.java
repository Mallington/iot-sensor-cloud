package Mallington.homesecurityapi.service;

import Mallington.homesecurityapi.model.DeviceInfo;
import Mallington.homesecurityapi.repository.DeviceRepository;
import Mallington.homesecurityapi.repository.PinConfigurationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

@Service
public class DeviceService extends CRUDServiceBase<DeviceInfo, String>{
    @Autowired
    DeviceRepository repository;
    @Autowired
    PinConfigurationRepository pinRepository;

    @Override
    public CrudRepository<DeviceInfo, String> getRepository() {
        return repository;
    }

    @Override
    public String create(DeviceInfo newObject) {
    /*    if(newObject.getPinMap().size()>0){
            newObject.getPinMap().stream().forEach( object -> {
                object.set;
            } );
        } */
        return super.create(newObject);
    }

    @Override
    public String update(DeviceInfo newObject) {
        return super.update(newObject);
    }
}
