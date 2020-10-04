package Mallington.sensorapi.service;

import Mallington.sensorapi.model.Identifiable;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.BeanWrapper;
import org.springframework.beans.BeanWrapperImpl;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;
import java.util.concurrent.atomic.AtomicReference;

public abstract class CRUDServiceBase<data extends Identifiable<primary>, primary> implements CRUDServiceInterface<data, primary> {

        public abstract CrudRepository<data, primary> getRepository();

        public  void copyNonNullProperties(data src, data target) {
            BeanUtils.copyProperties(src, target, getNullPropertyNames(src));
        }

        public  String[] getNullPropertyNames (Object source) {
            final BeanWrapper src = new BeanWrapperImpl(source);
            java.beans.PropertyDescriptor[] pds = src.getPropertyDescriptors();

            Set<String> emptyNames = new HashSet<String>();
            for(java.beans.PropertyDescriptor pd : pds) {
                Object srcValue = src.getPropertyValue(pd.getName());
                if (srcValue == null) emptyNames.add(pd.getName());
            }
            String[] result = new String[emptyNames.size()];
            return emptyNames.toArray(result);
        }

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
        public primary create(@RequestBody data newObject){
            System.out.println("This one 0");return getRepository().save(newObject).getId();
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
            System.out.println("This one 1");
            Optional<data> ret = getRepository().findById(newObject.getId());
            if(ret.isPresent()){
                data existing =  ret.get();
                copyNonNullProperties(newObject, ret.get());
                getRepository().save(existing);
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
