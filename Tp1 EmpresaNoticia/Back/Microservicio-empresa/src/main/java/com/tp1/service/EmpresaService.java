package com.tp1.service;

import java.util.Optional;

import com.tp1.entity.Empresa;

public interface EmpresaService {

	public Iterable<Empresa> findAll();
	
	public Optional<Empresa> findById(Long id);
	
	public Empresa save(Empresa empresa);
	
	public void deleteById (Long id);
}
