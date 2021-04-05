package com.tp1.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;


@Entity
@Table(name = "empresa")
public class Empresa {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;
	
	private String denominacion;
	
	private String telefono;
	
	@Column(name = "hsAtencion")
	private String hAtecion;
	
	@Column(name = "queSomos")
	private String qSomos;
	
	private Double longitud;
	
	private Double latitud;
	
	private String domicilio;
	
	@NotEmpty
	@Email
	private String email;
	
	public Empresa() {}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDenominacion() {
		return denominacion;
	}

	public void setDenominacion(String denominacion) {
		this.denominacion = denominacion;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public String gethAtecion() {
		return hAtecion;
	}

	public void sethAtecion(String hAtecion) {
		this.hAtecion = hAtecion;
	}

	public String getqSomos() {
		return qSomos;
	}

	public void setqSomos(String qSomos) {
		this.qSomos = qSomos;
	}

	public Double getLongitud() {
		return longitud;
	}

	public void setLongitud(Double longitud) {
		this.longitud = longitud;
	}

	public Double getLatitud() {
		return latitud;
	}

	public void setLatitud(Double latitud) {
		this.latitud = latitud;
	}

	public String getDomicilio() {
		return domicilio;
	}

	public void setDomicilio(String domicilio) {
		this.domicilio = domicilio;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
}
