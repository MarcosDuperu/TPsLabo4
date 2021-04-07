package com.teameast.tp2.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.teameast.tp2.entity.Pais;

@Repository
public interface PaisRepository extends CrudRepository<Pais, Integer> {

}
