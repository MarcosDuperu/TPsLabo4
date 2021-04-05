package com.tp1.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tp1.entity.Noticia;
import com.tp1.repository.NoticiaRepository;

@Service
public class NoticiaServiceImpl implements NoticiaService {

	@Autowired
	protected NoticiaRepository noticiaRepository;
	
	@Override
	@Transactional( readOnly = true)
	public Iterable<Noticia> findAll() {
		return noticiaRepository.findAll();
	}

	@Override
	@Transactional( readOnly = true)
	public Optional<Noticia> findById(Long id) {
		return noticiaRepository.findById(id);
	}

	@Override
	@Transactional
	public Noticia save(Noticia noticia) {
		return noticiaRepository.save(noticia);
	}

	@Override
	@Transactional
	public void deleteById(Long id) {
		noticiaRepository.deleteById(id);
	}
}
