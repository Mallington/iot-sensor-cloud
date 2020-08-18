package Mallington.homesecurityapi.repository;

import Mallington.homesecurityapi.model.DeviceInfo;
import Mallington.homesecurityapi.model.PinConfiguration;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PinConfigurationRepository extends CrudRepository<PinConfiguration, String> {
}
