package Mallington.sensorapi;

import Mallington.sensorapi.model.DeviceInfo;
import Mallington.sensorapi.model.PinConfiguration;
import Mallington.sensorapi.repository.DeviceRepository;
import Mallington.sensorapi.service.DeviceService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.doReturn;
import static org.mockito.ArgumentMatchers.any;

@SpringBootTest
public class DeviceServiceTests {
    /**
     * Autowire in the service we want to test
     */
    @Autowired
    private DeviceService service;

    @MockBean
    private DeviceRepository repository;


    @Test
    @DisplayName("Test getByID Success")
    void testFindById() {
        // Setup our mock repository
        DeviceInfo device = new DeviceInfo("randomUID", "Test Name", DeviceInfo.DeviceType.HOST, 
                null, null, null);

        doReturn(Optional.of(device)).when(repository).findById("randomUID");

        // Execute the service call
        DeviceInfo returnedWidget = service.getByID("randomUID");

        // Assert the response
        Assertions.assertNotNull(returnedWidget, "DeviceInfo was not found!");
        Assertions.assertSame(returnedWidget, device, "The device returned was not the same as the mock");
    }

    @Test
    @DisplayName("Get list")
    void getList(){

    }


}