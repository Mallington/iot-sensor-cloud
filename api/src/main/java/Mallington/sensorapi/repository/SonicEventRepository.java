package Mallington.sensorapi.repository;

import Mallington.sensorapi.model.SonicEvent;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SonicEventRepository extends CrudRepository<SonicEvent, Integer> {
}
