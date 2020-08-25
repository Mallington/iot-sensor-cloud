package Mallington.homesecurityapi.repository;

import Mallington.homesecurityapi.model.SonicEvent;
import Mallington.homesecurityapi.model.WaterDepthEvent;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WaterDepthEventRepository extends CrudRepository<WaterDepthEvent, Integer> {
}
