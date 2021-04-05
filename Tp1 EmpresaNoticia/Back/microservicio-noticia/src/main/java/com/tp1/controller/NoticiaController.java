package com.tp1.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.tp1.entity.Noticia;
import com.tp1.service.NoticiaServiceImpl;

@RestController
public class NoticiaController {

	
	@Autowired
	protected NoticiaServiceImpl service;
	
	@GetMapping("/noticia")
	public ResponseEntity<?> listarNoticias() {
		return ResponseEntity.ok().body(service.findAll());
	}

	
	@GetMapping("/noticia/{id}")
	public ResponseEntity<?> mostrarNoticia(@PathVariable long id){
		Optional<Noticia> o = service.findById(id);
		if(o.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(o.get());
	}
	
	@PostMapping("/noticia")
	public ResponseEntity<?> crearNoticia (@RequestBody Noticia noticia) {
		Noticia noticiaDB = service.save(noticia);
		return ResponseEntity.status(HttpStatus.CREATED).body(noticiaDB);
	}
	
	@DeleteMapping("/noticia/{id}")
	public ResponseEntity<?> eliminarNoticia (@PathVariable Long id) {
		service.deleteById(id);
		return ResponseEntity.noContent().build();
	}
	@PutMapping("/noticia/{id}")
	public ResponseEntity<?> editarNoticia (@RequestBody Noticia noticia, @PathVariable Long id) {
		Optional<Noticia> o = service.findById(id);
		if(o.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		Noticia noticiaDB = o.get();
		noticiaDB.setTituloNoticia(noticia.getTituloNoticia());
		noticiaDB.setResumenNoticia(noticia.getResumenNoticia());
		noticiaDB.setFoto(noticia.getFoto());
		noticiaDB.setContHtml(noticia.getContHtml());
		noticiaDB.setPublicada(noticia.getPublicada());
		noticiaDB.setFecha(noticia.getFecha());
		
		return ResponseEntity.status(HttpStatus.CREATED).body(service.save(noticiaDB));
	}
	
	/*public ResponseEntity<?> validar(BindingResult result) {
		Map<String, Object> errores = new HashMap<>();
		result.getFieldErrors().forEach(err -> {
			errores.put(err.getField(), " El campo " + err.getField() + " " + err.getDefaultMessage());
		});
		return ResponseEntity.badRequest().body(errores);
	}*/
	
	//UPLOADS FOTO
	
	@GetMapping("/uploads/img/{id}")
	public ResponseEntity<?> verFoto(@PathVariable Long id){
	
		Optional<Noticia> o = service.findById(id);
		
		if(o.isEmpty() || o.get().getFoto() == null) {
			return ResponseEntity.notFound().build();
		}
		
		Resource imagen = new ByteArrayResource(o.get().getFoto()); // pasamos bytes como argumentos
		
		return ResponseEntity.ok()
				.contentType(MediaType.IMAGE_JPEG)
				.body(imagen);
	}
	
	
	
	/*@PostMapping("/crear-con-foto")
	public ResponseEntity<?> crearConFoto(@Valid Noticia noticia, BindingResult result, 
			@RequestParam MultipartFile archivo) throws IOException {
		if(!archivo.isEmpty()) {
			noticia.setFoto(archivo.getBytes());
		}
		return super.crear(noticia, result);
	}
	
	@PutMapping("/editar-con-foto/{id}")
	public ResponseEntity<?> editarConFoto(@Valid Noticia noticia, BindingResult result, @PathVariable Long id,
			@RequestParam MultipartFile archivo) throws IOException{
		
		if(result.hasErrors()) {
			return this.validar(result);
		}
		
		Optional<Noticia> o = service.findById(id);
		
		if(o.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		
		Noticia noticiaDB = o.get();
		noticiaDB.setTituloNoticia(noticia.getTituloNoticia());
		noticiaDB.setResumenNoticia(noticia.getResumenNoticia());
		noticiaDB.setFoto(noticia.getFoto());
		noticiaDB.setContHtml(noticia.getContHtml());
		noticiaDB.setPublicada(noticia.getPublicada());
		noticiaDB.setFecha(noticia.getFecha());
		
		if(!archivo.isEmpty()) {
			noticiaDB.setFoto(archivo.getBytes());
		}
		
		return ResponseEntity.status(HttpStatus.CREATED).body(service.save(noticiaDB));
	}*/
	
	
	
}
