package Mallington.sensorapi.repository;

import Mallington.sensorapi.model.DeviceConfiguration;
import Mallington.sensorapi.model.DeviceInfo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DeviceConfigurationRepository extends CrudRepository<DeviceConfiguration, String> {
}
