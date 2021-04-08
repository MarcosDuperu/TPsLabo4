package com.teameast.tp2.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.teameast.tp2.entity.Pais;

@Repository
public interface PaisRepository extends CrudRepository<Pais, Integer> {

	@Query("SELECT * FROM `pais` WHERE pais.`codigo_pais`=%:codigoPais%")
	public Pais findByCodigoPais(Integer codigoPais);
}
