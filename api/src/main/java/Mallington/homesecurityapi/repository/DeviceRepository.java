package Mallington.homesecurityapi.repository;

import Mallington.homesecurityapi.model.DeviceInfo;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DeviceRepository extends CrudRepository<DeviceInfo, String> {
}
