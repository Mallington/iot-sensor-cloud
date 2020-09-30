package Mallington.sensorapi.controller;

import Mallington.sensorapi.model.DeviceConfiguration;
import Mallington.sensorapi.model.DeviceInfo;
import Mallington.sensorapi.service.DeviceConfigurationService;
import Mallington.sensorapi.service.DeviceService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController()
@RequestMapping("/device-configurations")
public class DeviceConfigurationController extends BaseController<DeviceConfiguration,String, DeviceConfigurationService> {
}
