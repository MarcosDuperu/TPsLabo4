package com.teameast.tp2.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.teameast.tp2.entity.Pais;
import com.teameast.tp2.entity.PaisMDB;
import com.teameast.tp2.service.PaisServiceImpl;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "api/v1/pais")
public class PaisController {
	
	@Autowired
	protected PaisServiceImpl service;
	
	@PostMapping("/guardar")
	public ResponseEntity<?> persistir(@RequestBody Pais pais) {
		System.out.println(pais.toString());
		Pais paisDb = service.save(pais);
		return ResponseEntity.status(HttpStatus.CREATED).body(paisDb);
	}
	
	@GetMapping("/buscar/codigo/{id}")
	public ResponseEntity<?> buscarPorCodigo(@PathVariable Integer id) {
		Optional<Pais> o = Optional.ofNullable(service.findByCodigoPais(id));
		if(o.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(o.get());
	}
	
	@PostMapping("/guardarmdb")
	public ResponseEntity<?> persistirMDB(@RequestBody PaisMDB paisMDB) {
		PaisMDB paisMDBdb= service.saveMDB(paisMDB);
		return ResponseEntity.status(HttpStatus.CREATED).body(paisMDBdb);
	}
	
	@GetMapping("/buscarmdb/codigo/{id}")
	public ResponseEntity<?> buscarPorCodigoMDB(@PathVariable Integer id) {
		Optional<PaisMDB> o = service.findMDB(id);
		if(o.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(o.get());
	}
}
