package Mallington.homesecurityapi.repository;

import Mallington.homesecurityapi.model.BaseEvent;
import Mallington.homesecurityapi.model.SonicEvent;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BaseEventRepository extends CrudRepository<BaseEvent, Integer> {
}
