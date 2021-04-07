package com.teameast.tp2.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.teameast.tp2.entity.Pais;
import com.teameast.tp2.repository.PaisRepository;

@Service
public class PaisServiceImpl implements PaisService {

	@Autowired
	protected PaisRepository paisRepository;
	
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

}
