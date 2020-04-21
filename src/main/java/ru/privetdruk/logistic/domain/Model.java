package ru.privetdruk.logistic.domain;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Model {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;

    @ManyToOne
    private Mark mark;
}
