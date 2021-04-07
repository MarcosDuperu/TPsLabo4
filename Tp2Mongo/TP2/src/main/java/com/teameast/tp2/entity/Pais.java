package com.teameast.tp2.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "pais")
public class Pais {

	@Id
	@Column(name = "codigo_pais", unique = true)
	private int codigoPais;
	
	@Column(name = "nombre_pais", nullable = false, length = 50)
	private String nombrePais;
	
	@Column(name = "capital_pais", nullable = false, length = 50)
	private String capitalPais;
	 
	@Column(name = "region", nullable = false, length = 50)
	private String region;
	
	@Column(name = "poblacion", nullable = false)
	private Long poblacion;
	
	@Column(name = "latitud", nullable = false)
	private Double latitud;
	
	@Column(name = "longitud", nullable = false)
	private Double longitud;

	public int getCodigoPais() {
		return codigoPais;
	}

	public void setCodigoPais(int codigoPais) {
		this.codigoPais = codigoPais;
	}

	public String getNombrePais() {
		return nombrePais;
	}

	public void setNombrePais(String nombrePais) {
		this.nombrePais = nombrePais;
	}

	public String getCapitalPais() {
		return capitalPais;
	}

	public void setCapitalPais(String capitalPais) {
		this.capitalPais = capitalPais;
	}

	public String getRegion() {
		return region;
	}

	public void setRegion(String region) {
		this.region = region;
	}

	public Long getPoblacion() {
		return poblacion;
	}

	public void setPoblacion(Long poblacion) {
		this.poblacion = poblacion;
	}

	public double getLatitud() {
		return latitud;
	}

	public void setLatitud(double latitud) {
		this.latitud = latitud;
	}

	public double getLongitud() {
		return longitud;
	}

	public void setLongitud(double longitud) {
		this.longitud = longitud;
	}

	@Override
	public String toString() {
		String objeto = this.nombrePais + "/" + this.capitalPais + "/" + this.region + "/" + this.codigoPais +
				"/" + this.poblacion + "/" + this.latitud + "/" + this.longitud;
		return objeto;
	}
	
	
}
