package com.teameast.tp2.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.teameast.tp2.entity.PaisMDB;

public interface PaisMDBRepository extends MongoRepository<PaisMDB,Integer>{

	@Query("{'region': ?0}")
	public Iterable<PaisMDB> findByRegion(String region);
}
