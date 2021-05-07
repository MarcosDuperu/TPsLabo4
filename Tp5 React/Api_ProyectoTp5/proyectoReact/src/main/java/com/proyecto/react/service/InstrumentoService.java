package com.proyecto.react.service;

import java.util.Optional;

import com.proyecto.react.entity.Instrumento;

public interface InstrumentoService {

public Iterable<Instrumento> findAll();
	
	public Optional<Instrumento> findById(Long id);
	
	public Instrumento save(Instrumento instrumento);
	
	public void deleteById (Long id);
	
}
