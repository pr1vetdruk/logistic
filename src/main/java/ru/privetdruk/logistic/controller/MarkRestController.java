package ru.privetdruk.logistic.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.privetdruk.logistic.domain.Mark;
import ru.privetdruk.logistic.repository.MarkRepository;

@RestController
@RequestMapping("/api/mark")
public class MarkRestController extends AbstractRestController<Mark, MarkRepository> {
    public MarkRestController(MarkRepository repository) {
        super(repository);
    }
}
