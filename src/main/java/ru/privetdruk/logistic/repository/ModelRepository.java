package ru.privetdruk.logistic.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import ru.privetdruk.logistic.domain.Model;

public interface ModelRepository extends JpaRepository<Model, Long> {
    @Override
    @EntityGraph(attributePaths = {"mark"})
    Page<Model> findAll(Pageable pageable);
}
