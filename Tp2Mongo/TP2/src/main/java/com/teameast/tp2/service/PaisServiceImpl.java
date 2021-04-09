package com.teameast.tp2.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.teameast.tp2.entity.Pais;
import com.teameast.tp2.entity.PaisMDB;
import com.teameast.tp2.repository.PaisMDBRepository;
import com.teameast.tp2.repository.PaisRepository;

@Service
public class PaisServiceImpl implements PaisService {

	@Autowired
	protected PaisRepository paisRepository;
	
	@Autowired
	protected PaisMDBRepository paisMDBRepository;
	
	@Autowired
	protected MongoTemplate mongoTemplate;
	
	@Override
	@Transactional( readOnly = true)
	public Iterable<Pais> findAll() {
		return paisRepository.findAll();
	}

	@Override
	@Transactional( readOnly = true)
	public Optional<Pais> findById(Integer id) {
		return paisRepository.findById(id);
	}

	@Override
	@Transactional
	public Pais save(Pais pais) {
		return paisRepository.save(pais);
	}

	@Override
	@Transactional
	public void deleteById(Integer id) {
		paisRepository.deleteById(id);
	}

	@Override
	@Transactional( readOnly = true)
	public Pais findByCodigoPais(Integer codigoPais) {
		return paisRepository.findByCodigoPais(codigoPais);
	}

	@Override
	public PaisMDB saveMDB(PaisMDB paisMDB) {
		return paisMDBRepository.insert(paisMDB);
	}

	@Override
	public Optional<PaisMDB> findMDB(Integer codigoPais) {
		return paisMDBRepository.findById(codigoPais);
	}

	@Override
	public Iterable<PaisMDB> findByRegion(String region) {
		return paisMDBRepository.findByRegion(region);
	}

	@Override
	public Iterable<PaisMDB> findByAmericaPob() {
		Query query = new Query();
		query.addCriteria(Criteria
				.where("region").is("Americas")
				.andOperator(Criteria.where("poblacion").gt(100000000)));
		Iterable<PaisMDB> americas = mongoTemplate.find(query, PaisMDB.class);
		return americas;
	}

	@Override
	public Iterable<PaisMDB> findByNeAfrica() {
		Query query = new Query();
		query.addCriteria(Criteria.where("region").ne("Africa"));
		Iterable<PaisMDB> africa = mongoTemplate.find(query, PaisMDB.class);
		return africa;
	}
	
	@Override
	public PaisMDB updateEgypt(){
		Update update = new Update();
		update.set("nombrePais", "Egipto");
		update.set("poblacion", 95000000);
		
		Query query = new Query(Criteria.where("nombrePais").is("Egypt"));
		mongoTemplate.upsert(query, update, PaisMDB.class);
		
		Query query1 = new Query(Criteria.where("nombrePais").is("Egipto"));
		PaisMDB egipto = mongoTemplate.findOne(query1, PaisMDB.class);
		return egipto;
	}

	@Override
	public void deleteOne() {
		Query query = new Query(Criteria.where("codigoPais").is(258));
		mongoTemplate.remove(query, PaisMDB.class);
	}

	@Override
	public Iterable<PaisMDB> findByPoblacion() {
		Query query = new Query(Criteria.where("poblacion").lt(150000000).gt(50000000));
		Iterable<PaisMDB> poblacion = mongoTemplate.find(query, PaisMDB.class);
		return poblacion;
	} 
	
	@Override
	public List<PaisMDB> findByAsc() {
		List<PaisMDB> paisMDB = paisMDBRepository.findAll(
				Sort.by(Sort.Direction.ASC,"nombrePais"));
		return paisMDB;
	}
	
	@Override
	public Iterable<PaisMDB> findSkip(Integer num) {
		Query query = new Query();
		query.skip(num);
		Iterable<PaisMDB> paises = mongoTemplate.find(query, PaisMDB.class);
		return paises;
	}
	
}

