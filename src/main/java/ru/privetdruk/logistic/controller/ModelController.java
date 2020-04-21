package ru.privetdruk.logistic.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.privetdruk.logistic.domain.Model;
import ru.privetdruk.logistic.repository.ModelRepository;

@RestController
@RequestMapping("/api/model")
public class ModelController extends AbstractRestController<Model, ModelRepository> {
    public ModelController(ModelRepository repository) {
        super(repository);
    }
}
