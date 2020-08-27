package Mallington.sensorapi.repository;

import Mallington.sensorapi.model.PinConfiguration;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PinConfigurationRepository extends CrudRepository<PinConfiguration, String> {
}
