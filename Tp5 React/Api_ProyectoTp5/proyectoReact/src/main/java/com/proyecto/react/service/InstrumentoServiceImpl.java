package com.proyecto.react.service;

import java.util.Optional;


import org.springframework.transaction.annotation.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto.react.entity.Instrumento;
import com.proyecto.react.repository.InstrumentoRepository;

@Service
public class InstrumentoServiceImpl implements InstrumentoService {
	
	@Autowired
	protected InstrumentoRepository instrumentoRepository;
	
	@Override
	@Transactional( readOnly = true)
	public Iterable<Instrumento> findAll() {
		return instrumentoRepository.findAll();
	}

	@Override
	@Transactional( readOnly = true)
	public Optional<Instrumento> findById(Long id) {
		return instrumentoRepository.findById(id);
	}

	@Override
	@Transactional
	public Instrumento save(Instrumento instrumento) {
		return instrumentoRepository.save(instrumento);
	}

	@Override
	@Transactional
	public void deleteById(Long id) {
		instrumentoRepository.deleteById(id);
	}
	
	@Override
	@Transactional
	public Instrumento update(Long id, Instrumento instrumento) throws Exception {
		try {
			Optional<Instrumento> instrumentoOptional = instrumentoRepository.findById(id);
			Instrumento inst = instrumentoOptional.get();
			inst = instrumentoRepository.save(instrumento);
			return inst;
			
				
		}catch (Exception e) {
			throw new Exception(e.getMessage());
		}
	}

}
