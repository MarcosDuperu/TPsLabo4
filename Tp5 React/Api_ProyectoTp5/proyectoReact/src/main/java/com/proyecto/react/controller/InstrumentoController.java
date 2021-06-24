package com.proyecto.react.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import javax.validation.Valid;

import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.proyecto.react.entity.Instrumento;
import com.proyecto.react.service.InstrumentoServiceImpl;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "api/instrumento/")
public class InstrumentoController {

	@Autowired
	protected InstrumentoServiceImpl service;

	@GetMapping("/listar-instrumentos") //listar todos
	public ResponseEntity<?> listarInstrumentos() {
		return ResponseEntity.status(HttpStatus.OK).body(service.findAll());
	}

	//listar 1
	@GetMapping("/mostrar-instrumento/{id}") //listar 1
	public ResponseEntity<?> listarPorId(@PathVariable long id) {
		Optional<Instrumento> o = service.findById(id);
		if (o.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.status(HttpStatus.OK).body(o.get());
	}

	//save
	@PostMapping("/guardar-instrumento") //para guardar
	public ResponseEntity<?> guardarInstrumento(@RequestBody Instrumento instrumento, BindingResult result) {
		Instrumento instrumentoDB = service.save(instrumento);
		return ResponseEntity.status(HttpStatus.OK).body(instrumentoDB);
	}

	//para eliminar
	@DeleteMapping("{id}") //eliminar por id
	public ResponseEntity<?> eliminarInstrumento(@PathVariable Long id) {
		service.deleteById(id);
		return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
	}

	//capaz no se use
	@PutMapping("/editar-instrumento/{id}") //editar por id
	public ResponseEntity<?> editarInstrumento(@RequestBody Instrumento instrumento, @PathVariable Long id) {
		Optional<Instrumento> o = service.findById(id);
		if (o.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		Instrumento instrumentoDB = o.get();
		instrumentoDB.setInstrumento(instrumento.getInstrumento());
		instrumentoDB.setCantidadVendida(instrumento.getCantidadVendida());
		instrumentoDB.setCostoEnvio(instrumento.getCostoEnvio());
		instrumentoDB.setDescripcion(instrumento.getDescripcion());
		instrumentoDB.setModelo(instrumento.getModelo());
		instrumentoDB.setMarca(instrumento.getMarca());
		instrumentoDB.setPrecio(instrumento.getPrecio());
		instrumentoDB.setImagen(instrumento.getImagen());

		return ResponseEntity.status(HttpStatus.CREATED).body(service.save(instrumentoDB));
	}
	
	@PutMapping("/{id}")//actualizar "update"
	public ResponseEntity<?> actualizar(@Valid @PathVariable Long id,@RequestBody Instrumento instrumento,BindingResult result){
	    	if (result.hasErrors()) {
				return this.validar(result);
			}
	        try {
	            return ResponseEntity.status(HttpStatus.OK).body(service.update(id,instrumento));

	        }catch (Exception e){
	            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("{\"error\":\"error por favor intente mas tarde.\"}");
	        }
	    }
  
	protected ResponseEntity<?> validar(BindingResult result) {
			Map<String, Object> errores = new HashMap<>();
			result.getFieldErrors().forEach(err -> {
				errores.put(err.getField(), " El campo " + err.getField() + " " + err.getDefaultMessage());
			});
			return ResponseEntity.badRequest().body(errores);
		}

	// PARA CREAR Y EDITAR EL INSTRUMENTO CON IMAGENES// me quede aca

	@PostMapping("/crear-con-imagen")// crear con imagens
	public ResponseEntity<?> crearInsConImag(@Valid Instrumento instrumento, BindingResult result,
			@RequestParam MultipartFile archivo) throws IOException {
		if(!archivo.isEmpty()) {
			try {
				
				instrumento.setImagen(archivo.getBytes());
			} catch (Exception e) {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("{\"error\":\"falla al obtener la imagen.\"}"+e.getMessage());
			}
		}
		try {
			//sino guardarInstrumento
			return crear(instrumento, result);
			
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("{\"error\":\"falla al insertar en la db.\"}"+e.getMessage());
		}
	}

	//pued que se use
	@PostMapping
	public ResponseEntity<?> crear(@Valid @RequestBody Instrumento instrumento, BindingResult result) {

		if (result.hasErrors()) {
			return this.validar(result);
		}
		Instrumento instrumentoDB = service.save(instrumento);
		return ResponseEntity.status(HttpStatus.CREATED).body(instrumentoDB);
	}

	@PutMapping("/editar-con-foto/{id}") //editar con imagen 
	public ResponseEntity<?> editarConFoto(@Valid Instrumento instrumento, BindingResult result, @PathVariable Long id,
			@RequestParam MultipartFile archivo) throws IOException {

		Optional<Instrumento> i;
		try {
			 i = service.findById(id);
			 			
		}
		catch(Exception e){
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("{\"error\":\"error por favor intente mas tarde.\"}");
						
		}

		Instrumento instrumentoDB = i.get();
		instrumentoDB.setInstrumento(instrumento.getInstrumento());
		instrumentoDB.setCantidadVendida(instrumento.getCantidadVendida());
		instrumentoDB.setCostoEnvio(instrumento.getCostoEnvio());
		instrumentoDB.setDescripcion(instrumento.getDescripcion());
		instrumentoDB.setModelo(instrumento.getModelo());
		instrumentoDB.setMarca(instrumento.getMarca());
		instrumentoDB.setPrecio(instrumento.getPrecio());

		if (!archivo.isEmpty()) {
			instrumentoDB.setImagen(archivo.getBytes());
		}

		return ResponseEntity.status(HttpStatus.CREATED).body(service.save(instrumentoDB));
	}

	
	
	


}
