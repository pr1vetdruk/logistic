package ru.privetdruk.logistic.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.privetdruk.logistic.domain.Car;
import ru.privetdruk.logistic.repository.CarRepository;

@RestController
@RequestMapping("/api/car")
public class CarController extends AbstractRestController<Car, CarRepository> {
    public CarController(CarRepository repository) {
        super(repository);
    }
}
