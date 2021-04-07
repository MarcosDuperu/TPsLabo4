package com.teameast.tp2.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.teameast.tp2.entity.Pais;
import com.teameast.tp2.service.PaisServiceImpl;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "api/v1/pais")
public class PaisController {
	
	protected PaisServiceImpl service;
	
	@PostMapping("/guardar")
	public ResponseEntity<?> persistir(@RequestBody Pais pais) {
		System.out.println(pais.toString());
		//Pais paisDb = service.save(pais);
		return ResponseEntity.status(HttpStatus.CREATED).body(service.save(pais));
	}
}
