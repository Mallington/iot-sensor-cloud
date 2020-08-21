package Mallington.homesecurityapi.controller;

import Mallington.homesecurityapi.model.DeviceInfo;
import Mallington.homesecurityapi.service.DeviceService;
import org.springframework.web.bind.annotation.*;

@RestController()
@RequestMapping("/devices")
public class DeviceController extends BaseController<DeviceInfo,String, DeviceService> {
}
