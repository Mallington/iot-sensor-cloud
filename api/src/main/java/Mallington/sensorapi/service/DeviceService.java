package Mallington.sensorapi.service;

import Mallington.sensorapi.model.DeviceInfo;
import Mallington.sensorapi.repository.DeviceRepository;
import Mallington.sensorapi.repository.PinConfigurationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
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
