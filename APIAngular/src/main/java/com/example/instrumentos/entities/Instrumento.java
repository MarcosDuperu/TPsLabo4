package com.example.instrumentos.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.envers.Audited;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "instrumentos")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Audited
public class Instrumento extends Base {

    @Column(name = "instrumento")
    private String instrumento;

    @Column(name = "marca")
    private String marca;
    
    @Column(name = "modelo")
    private String modelo;
    
    @Column(name = "precio")
    private String precio;

    @Column(name = "cantidad_vendida")
    private int cantidadVendida;
    
    @Column(name = "costo_envio")
    private String costoEnvio;

    @Column(name = "imagen")
    private String imagen;

    @Column(name = "descripcion")
    private String descripcion;
}
