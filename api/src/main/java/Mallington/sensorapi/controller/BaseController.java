package Mallington.sensorapi.controller;

import Mallington.sensorapi.model.Identifiable;
import Mallington.sensorapi.service.CRUDServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

public class BaseController <data extends Identifiable<primary>, primary, serv extends CRUDServiceInterface<data, primary>>{

    @Autowired
    serv service;

    public CRUDServiceInterface<data, primary> getService(){return service;}

    @PostMapping
    public @ResponseBody primary create(@RequestBody data newObject){
        return getService().create(newObject);
    }

    @RequestMapping
    public @ResponseBody
    Iterable<data> listObjects(){
        return getService().listObjects();
    }

    @RequestMapping("/latest")
    public @ResponseBody
    data latest(){
        return getService().latest();
    }

    @RequestMapping("/{id}")
    public @ResponseBody
    data getByID(@PathVariable primary id){
        return getService().getByID(id);
    }

    @PutMapping
    public @ResponseBody String update(@RequestBody data newObject){
        return getService().update(newObject);
    }

    @DeleteMapping("/{id}")
    public @ResponseBody String delete(@PathVariable primary id){
        return getService().removeByID(id);
    }
}
