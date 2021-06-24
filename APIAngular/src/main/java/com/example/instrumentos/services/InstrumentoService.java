package com.example.instrumentos.services;

import java.util.List;
import java.util.Map;

import com.example.instrumentos.entities.Instrumento;

public interface InstrumentoService extends BaseService<Instrumento, Long> {
    List<Instrumento> search(String filtro) throws Exception;
    public Map<String, Object> search(String filter, int page, int size, String sortBy, String direction) throws Exception;
}
