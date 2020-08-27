package Mallington.sensorapi.repository;

import Mallington.sensorapi.model.WaterDepthEvent;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WaterDepthEventRepository extends CrudRepository<WaterDepthEvent, Integer> {
}
