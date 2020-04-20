package ru.privetdruk.logistic.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.privetdruk.logistic.domain.Car;

public interface CarRepository extends JpaRepository<Car, Long> {
}
