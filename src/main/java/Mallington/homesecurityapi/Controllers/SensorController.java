package Mallington.homesecurityapi.Controllers;
import java.time.Instant;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

import Mallington.homesecurityapi.Data.UltraSonicEvent;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@RequestMapping("/Ultrasonic")
public class SensorController extends TriggerEventController<UltraSonicEvent>{

}
