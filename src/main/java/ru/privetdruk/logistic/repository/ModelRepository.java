package ru.privetdruk.logistic.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.privetdruk.logistic.domain.Model;

public interface ModelRepository extends JpaRepository<Model, Long> {
}
