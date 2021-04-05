package com.tp1.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.tp1.entity.Empresa;
import com.tp1.service.EmpresaServiceImpl;

@RestController
public class EmpresaController extends EmpresaServiceImpl {

	@Autowired
	protected EmpresaServiceImpl service;
	
	@GetMapping
	public ResponseEntity<?> listar() {
		return ResponseEntity.ok().body(service.findAll());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> mostrar(@PathVariable long id){
		Optional<Empresa> o = service.findById(id);
		if(o.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(o.get());
	}
	
	@PostMapping
	public ResponseEntity<?> crear (@RequestBody Empresa empresa) {
		Empresa empresaDb = service.save(empresa);
		return ResponseEntity.status(HttpStatus.CREATED).body(empresaDb);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> eliminar (@PathVariable Long id) {
		service.deleteById(id);
		return ResponseEntity.noContent().build();
	}
	@PutMapping("/{id}")
	public ResponseEntity<?> editar (@RequestBody Empresa empresa, @PathVariable Long id) {
		Optional<Empresa> o = service.findById(id);
		if(o.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		Empresa empresaDb = o.get();
		empresaDb.setDenominacion(empresa.getDenominacion());
		empresaDb.setEmail(empresa.getEmail());
		empresaDb.setDomicilio(empresa.getDomicilio());
		empresaDb.sethAtecion(empresa.gethAtecion());
		empresaDb.setLatitud(empresa.getLatitud());
		empresaDb.setLongitud(empresa.getLongitud());
		empresaDb.setTelefono(empresa.getTelefono());
		empresaDb.setqSomos(empresa.getqSomos());
		
		return ResponseEntity.status(HttpStatus.CREATED).body(service.save(empresaDb));
	}
}
