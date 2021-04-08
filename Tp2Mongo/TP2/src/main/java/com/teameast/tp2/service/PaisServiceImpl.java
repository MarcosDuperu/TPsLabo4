package com.teameast.tp2.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.teameast.tp2.entity.Pais;
import com.teameast.tp2.entity.PaisMDB;
import com.teameast.tp2.repository.PaisMDBRepository;
import com.teameast.tp2.repository.PaisRepository;

@Service
public class PaisServiceImpl implements PaisService {

	@Autowired
	protected PaisRepository paisRepository;
	
	@Autowired
	protected PaisMDBRepository paisMDBRepository;
	
	@Override
	@Transactional( readOnly = true)
	public Iterable<Pais> findAll() {
		return paisRepository.findAll();
	}

	@Override
	@Transactional( readOnly = true)
	public Optional<Pais> findById(Integer id) {
		return paisRepository.findById(id);
	}

	@Override
	@Transactional
	public Pais save(Pais pais) {
		return paisRepository.save(pais);
	}

	@Override
	@Transactional
	public void deleteById(Integer id) {
		paisRepository.deleteById(id);
	}

	@Override
	@Transactional( readOnly = true)
	public Pais findByCodigoPais(Integer codigoPais) {
		return paisRepository.findByCodigoPais(codigoPais);
	}

	@Override
	public PaisMDB saveMDB(PaisMDB paisMDB) {
		return paisMDBRepository.insert(paisMDB);
	}

	@Override
	public Optional<PaisMDB> findMDB(Integer codigoPais) {
		return paisMDBRepository.findById(codigoPais);
	}
	

}
