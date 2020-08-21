package Mallington.homesecurityapi.repository;

import Mallington.homesecurityapi.model.SonicEvent;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SonicEventRepository extends CrudRepository<SonicEvent, Integer> {
}
