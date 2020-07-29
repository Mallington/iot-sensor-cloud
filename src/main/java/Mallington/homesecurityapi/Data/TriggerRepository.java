package Mallington.homesecurityapi.Data;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.NoRepositoryBean;

//@NoRepositoryBean
public interface TriggerRepository extends CrudRepository<UltraSonicEvent, Integer> {
}
