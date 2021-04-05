package com.tp1.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name = "noticias")
public class Noticia {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="idNoticia")
	private Long id;
	
	@Column(name="tituloNoticia")
	private String tituloNoticia;
	
	@Column(name="resumenNoticia")
	private String resumenNoticia;
	
	/*@Column(name="imag")
	private String imag;*/
	
	@Lob
	@JsonIgnore
	private byte[] foto;

	
	@Column(name="contenidoHTML")
	private String contHtml;
	
	@Column(name="publicidad")
	private char publicada;
	
	@Column(name="fecha")
	@Temporal(TemporalType.TIMESTAMP)
	private Date fecha;

	//clave foranea
	//@Column(name = "empresa")
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "empresa_id")
	private Empresa em = new Empresa();

	public Noticia () {
		
		super();
	}
	
	@PrePersist
	public void prePersist() {
		this.fecha = new Date();
	}

	public Integer getFotoHashCode() {
		return (this.foto != null) ? this.foto.hashCode() : null;
	}

	
	
	//METODOS GET Y SET
	
	public byte[] getFoto() {
		return foto;
	}


	public void setFoto(byte[] foto) {
		this.foto = foto;
	}
	
	public Empresa getEm() {
		return em;
	}

	public void setEm(Empresa em) {
		this.em = em;
	}

	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTituloNoticia() {
		return tituloNoticia;
	}

	public void setTituloNoticia(String tituloNoticia) {
		this.tituloNoticia = tituloNoticia;
	}

	public String getResumenNoticia() {
		return resumenNoticia;
	}

	public void setResumenNoticia(String resumenNoticia) {
		this.resumenNoticia = resumenNoticia;
	}

	/*public String getImag() {
		return imag;
	}

	public void setImag(String imag) {
		this.imag = imag;
	}*/

	public String getContHtml() {
		return contHtml;
	}

	public void setContHtml(String contHtml) {
		this.contHtml = contHtml;
	}

	public char getPublicada() {
		return publicada;
	}

	public void setPublicada(char publicada) {
		this.publicada = publicada;
	}

	public Date getFecha() {
		return fecha;
	}

	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}
	
	

	
}
