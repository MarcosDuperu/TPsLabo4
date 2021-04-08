package com.teameast.tp2.service;

import java.util.Optional;

import com.teameast.tp2.entity.Pais;
import com.teameast.tp2.entity.PaisMDB;

public interface PaisService {

public Iterable<Pais> findAll();
	
	public Optional<Pais> findById(Integer id);
	
	public Pais save(Pais pais);
	
	public void deleteById (Integer id);
	
	public Pais findByCodigoPais(Integer codigoPais);
	
	public PaisMDB saveMDB(PaisMDB paisMDB);
	
	public Optional<PaisMDB> findMDB(Integer codigoPais);
}
