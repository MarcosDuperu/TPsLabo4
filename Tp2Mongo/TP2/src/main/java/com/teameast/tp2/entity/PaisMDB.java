package com.teameast.tp2.entity;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "paises")
public class PaisMDB extends Pais{

	private Long superficie;

	public Long getSuperficie() {
		return superficie;
	}

	public void setSuperficie(Long superficie) {
		this.superficie = superficie;
	}
	
}
