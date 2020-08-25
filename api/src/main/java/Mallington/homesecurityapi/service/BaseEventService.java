package Mallington.homesecurityapi.service;

import Mallington.homesecurityapi.model.BaseEvent;
import Mallington.homesecurityapi.model.SonicEvent;
import Mallington.homesecurityapi.model.WaterDepthEvent;
import Mallington.homesecurityapi.repository.SonicEventRepository;
import Mallington.homesecurityapi.repository.WaterDepthEventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sun.reflect.generics.reflectiveObjects.NotImplementedException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class BaseEventService  implements CRUDServiceInterface<BaseEvent, Integer>{
    @Autowired
    WaterDepthEventRepository waterDepthEventRepository;
    @Autowired
    SonicEventRepository sonicEventRepository;


    private CrudRepository[] getIncludedRepositories(){
        return new CrudRepository[]{this.waterDepthEventRepository, this.sonicEventRepository};
    }
    private Iterable<BaseEvent> appendRepositories(CrudRepository ...repositories){
        List<BaseEvent> events = new ArrayList<BaseEvent>();
        for(CrudRepository<BaseEvent, Integer> repo : repositories) for(BaseEvent event : repo.findAll()) events.add(event);
        return events;
    }
    private void removeFromRepositories(Integer id, CrudRepository ...repositories){
        for(CrudRepository<BaseEvent, Integer> repo : repositories) repo.deleteById(id);
    }
    private <T extends BaseEvent> CrudRepository<T, Integer> getRepository(Class<T> event){
        if(event.equals(WaterDepthEvent.class)) return (CrudRepository<T, Integer>) waterDepthEventRepository;
        else if(event.equals(SonicEvent.class)) return (CrudRepository<T, Integer>) sonicEventRepository;
        return null;
    }

    private BaseEvent getByIDPrivate(Integer id){
        List<BaseEvent> events = new ArrayList<BaseEvent>();
        for(CrudRepository<BaseEvent, Integer> repo : getIncludedRepositories()) {
            if(repo!=null) {
                Optional<BaseEvent> optional = repo.findById(id);
                if (optional.isPresent()) return optional.get();
            }
        };
        return null;
    }
    private CrudRepository<BaseEvent, Integer> getRepositoryByID(Integer id){
        List<BaseEvent> events = new ArrayList<BaseEvent>();
        for(CrudRepository<BaseEvent, Integer> repo : getIncludedRepositories()) {
            if(repo!=null) {
                Optional<BaseEvent> optional = repo.findById(id);
                if (optional != null && optional.isPresent()) return repo;
            }
        };
        return null;
    }

    @Override
    @Transactional
    public Iterable<BaseEvent> listObjects() {

        return appendRepositories( sonicEventRepository);
    }
    //Not implemented
    @Override
    public BaseEvent latest() {
        throw new NotImplementedException();
    }

    private  <T extends BaseEvent> Integer createPrivate(T newObject) {
        CrudRepository<T, Integer> repository = (CrudRepository<T, Integer>) getRepository(newObject.getClass());
        return repository.save(newObject).getId();
    }
    private  <T extends BaseEvent> String updatePrivate(T newObject) {
        CrudRepository<T, Integer> repository = (CrudRepository<T, Integer>) getRepository(newObject.getClass());

        if(repository.findById(newObject.getId()).isPresent()){
            repository.save(newObject);
            return "Updated";
        }
        else{
            return "ID not found";
        }
    }

    @Override
    public Integer create(BaseEvent newObject) {
        return createPrivate(newObject);
    }
    @Override
    public BaseEvent getByID(Integer id) {
        return getByIDPrivate(id);
    }

    @Override
    public String update(BaseEvent newObject) {
        return updatePrivate(newObject);
    }

    @Override
    public String removeByID(Integer id) {
        CrudRepository<?,Integer> repository = getRepositoryByID(id);

        if(repository==null) return "ID not found";

        repository.deleteById(id);
        return "Removed";
    }


}
