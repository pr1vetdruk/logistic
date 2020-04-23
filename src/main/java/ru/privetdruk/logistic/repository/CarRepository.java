package ru.privetdruk.logistic.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import ru.privetdruk.logistic.domain.Car;

public interface CarRepository extends JpaRepository<Car, Long> {
    @Override
    @EntityGraph(attributePaths = {"model.mark"})
    Page<Car> findAll(Pageable pageable);
}
