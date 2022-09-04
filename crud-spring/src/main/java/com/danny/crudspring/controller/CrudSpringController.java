package com.danny.crudspring.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.danny.crudspring.model.CrudSpringModel;
import com.danny.crudspring.repository.CrudSpringRepository;

import lombok.AllArgsConstructor;

@RestController

@AllArgsConstructor
@RequestMapping("/api/crudsprings")
//@CrossOrigin(origins = "http://localhost:4200")
public class CrudSpringController {
 
 
  private final CrudSpringRepository cSpringRepository;

  @GetMapping
  public List<CrudSpringModel> list(){

    return cSpringRepository.findAll();
  }

  @PostMapping
  @ResponseStatus(code =HttpStatus.CREATED)
  public CrudSpringModel  create (@RequestBody CrudSpringModel cspring){

 
   // System.out.println(cspring.getName());

   return cSpringRepository.save(cspring);
  //return ResponseEntity.status(HttpStatus.CREATED)
 // .body(cSpringRepository.save(cspring));

  }


}
