package com.tp1.service;

import java.util.Optional;

import com.tp1.entity.Noticia;

public interface NoticiaService {

public Iterable<Noticia> findAll();
	
	public Optional<Noticia> findById(Long id);
	
	public Noticia save(Noticia empresa);
	
	public void deleteById (Long id);
}
