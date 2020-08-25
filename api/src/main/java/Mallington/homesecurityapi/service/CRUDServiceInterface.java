package Mallington.homesecurityapi.service;

import Mallington.homesecurityapi.model.Identifiable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;

public interface CRUDServiceInterface<data extends Identifiable<primary>, primary> {
    @Transactional
    Iterable<data> listObjects();

    @Transactional
    data latest();

    @Transactional
    primary create(@RequestBody data newObject);

    @Transactional
    data getByID(@RequestBody primary id);

    @Transactional
    String update(@RequestBody data newObject);

    @Transactional
    String removeByID(@RequestBody primary id);

}
