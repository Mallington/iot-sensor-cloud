package Mallington.homesecurityapi.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.*;

public class BaseController <data, primary>{

    @Autowired
    public CrudRepository<data, primary> repository;

    @RequestMapping("/list")
    public @ResponseBody
    Iterable<data> listObjects(){
        return repository.findAll();
    }

    @PostMapping("/create")
    public @ResponseBody String create(@RequestBody data newObject){
        repository.save(newObject);
        return "Saved";
    }
}
