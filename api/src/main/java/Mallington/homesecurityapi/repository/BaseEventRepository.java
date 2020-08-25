package Mallington.homesecurityapi.repository;

import Mallington.homesecurityapi.model.BaseEvent;
import Mallington.homesecurityapi.model.SonicEvent;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BaseEventRepository extends CrudRepository<BaseEvent, Integer> {
}
