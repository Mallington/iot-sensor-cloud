package Mallington.sensorapi.repository;

import Mallington.sensorapi.model.IMUSensorEvent;
import Mallington.sensorapi.model.SonicEvent;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IMUSensorEventRepository extends CrudRepository<IMUSensorEvent, Integer> {

}
