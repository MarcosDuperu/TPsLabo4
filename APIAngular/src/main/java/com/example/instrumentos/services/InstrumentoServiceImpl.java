package com.example.instrumentos.services;

import com.example.instrumentos.entities.Instrumento;
import com.example.instrumentos.repositories.BaseRepository;
import com.example.instrumentos.repositories.InstrumentoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class InstrumentoServiceImpl extends BaseServiceImpl<Instrumento, Long> implements InstrumentoService {

    @Autowired
    private InstrumentoRepository instrumentoRepository;

    public InstrumentoServiceImpl(BaseRepository<Instrumento, Long> baseRepository) {
        super(baseRepository);
    }

    @Override
    public List<Instrumento> search(String filtro) throws Exception {
        try {
            List<Instrumento> platos = instrumentoRepository.searchNativo(filtro);
            return  platos;
        } catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public Map<String, Object> search(String filter, int page, int size, String sortBy, String direction) throws Exception {
        try {
            Pageable pageable;
            if (direction.equals("desc")){
                pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, sortBy));
            } else {
                pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.ASC, sortBy));
            }
            Page<Instrumento> entityPage = instrumentoRepository.search(filter, pageable);
            List<Instrumento> entities = entityPage.getContent();
            Map<String, Object> respose = new HashMap<>();
            respose.put("payload", entities);
            respose.put("length", entityPage.getTotalElements());
            return respose;
        } catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }
}
