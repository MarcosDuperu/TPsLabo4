package com.proyecto.react.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "instrumento")
public class Instrumento {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idInstrumento")
	private Long id;

	@Column(name = "instrumento")
	private String instrumento;

	@Column(name = "modelo")
	private String modelo;

	@Column(name = "precio")
	private double precio;

	@Column(name = "costoEnvio")
	private double costoEnvio;

	@Column(name = "canidadVendida")
	private int cantidadVendida;

	@Column(name = "descripcion")
	private String descripcion;

	@Lob
	@JsonIgnore
	private byte[] imagen;

	public Integer getFotoHashCode() {
		return (this.imagen != null) ? this.imagen.hashCode() : null;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getInstrumento() {
		return instrumento;
	}

	public void setInstrumento(String instrumento) {
		this.instrumento = instrumento;
	}

	public String getModelo() {
		return modelo;
	}

	public void setModelo(String modelo) {
		this.modelo = modelo;
	}

	public double getPrecio() {
		return precio;
	}

	public void setPrecio(double precio) {
		this.precio = precio;
	}

	public double getCostoEnvio() {
		return costoEnvio;
	}

	public void setCostoEnvio(double costoEnvio) {
		this.costoEnvio = costoEnvio;
	}

	public int getCantidadVendida() {
		return cantidadVendida;
	}

	public void setCantidadVendida(int cantidadVendida) {
		this.cantidadVendida = cantidadVendida;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public byte[] getImagen() {
		return imagen;
	}

	public void setImagen(byte[] imagen) {
		this.imagen = imagen;
	}

}
