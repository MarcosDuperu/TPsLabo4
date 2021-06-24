package com.example.instrumentos.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.instrumentos.entities.Instrumento;

import java.util.List;

@Repository
public interface InstrumentoRepository extends  BaseRepository<Instrumento, Long>{

    List<Instrumento> findByinstrumentoContaining(String instrumento);

    Page<Instrumento> findByinstrumentoContaining(String instrumento, Pageable pageable);

    @Query(value = "SELECT p FROM Instrumento p WHERE p.instrumento LIKE %:filtro%")
    List<Instrumento> search(@Param("filtro") String filtro);

    @Query(value = "SELECT p FROM Instrumento p WHERE p.instrumento LIKE %:filtro%")
    Page<Instrumento> search(@Param("filtro") String filtro, Pageable pageable);

    @Query(value = "SELECT * FROM Instrumento WHERE Instrumento.instrumento LIKE %:filtro%", nativeQuery = true)
    List<Instrumento> searchNativo(@Param("filtro") String filtro);

    @Query(
            value = "SELECT * FROM Instrumento WHERE Instrumento.instrumento LIKE %:filtro%",
            countQuery = "SELECT count(*) FROM Instrumento",
            nativeQuery = true
    )
    Page<Instrumento> searchNativo(@Param("filtro") String filtro, Pageable pageable);
}
