package Mallington.sensorapi.repository;

import Mallington.sensorapi.model.BaseEvent;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BaseEventRepository extends CrudRepository<BaseEvent, Integer> {
}
