package ru.privetdruk.logistic.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.privetdruk.logistic.domain.Mark;

@Repository
public interface MarkRepository extends JpaRepository<Mark, Long> {
}
