package Mallington.homesecurityapi.service;

import Mallington.homesecurityapi.model.Identifiable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Optional;
import java.util.concurrent.atomic.AtomicReference;

public abstract class CRUDServiceBase<data extends Identifiable<primary>, primary> implements CRUDServiceInterface<data, primary> {


        public abstract CrudRepository<data, primary> getRepository();

        @Override
        @Transactional
        public Iterable<data> listObjects(){
            return getRepository().findAll();
        }

        @Override
        @Transactional
        public data latest(){
            AtomicReference<data> last = new AtomicReference<>();
            getRepository().findAll().forEach(data -> last.set(data));
            return last.get();
        }

        @Override
        @Transactional
        public String create(@RequestBody data newObject){
            getRepository().save(newObject);
            return "Saved";
        }

        @Override
        public data getByID(primary id) {
            Optional<data> ret = getRepository().findById(id);
            if(ret.isPresent()){
                return getRepository().findById(id).get();
            }
            else{
                return null;
            }
        }

        @Override
        public String update(data newObject) {
            Optional<data> ret = getRepository().findById(newObject.getId());
            if(ret.isPresent()){
                getRepository().save(newObject);
                return "Updated";
            }
            else{
                return "ID not found";
            }
        }

        @Override
        public String removeByID(primary id) {
            Optional<data> ret = getRepository().findById(id);
            if(ret.isPresent()){
                getRepository().deleteById(id);
                return "Removed";
            }
            else{
                return "ID not found";
            }
        }

}
