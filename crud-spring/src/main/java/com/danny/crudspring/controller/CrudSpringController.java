package com.danny.crudspring.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.danny.crudspring.model.CrudSpringModel;
import com.danny.crudspring.repository.CrudSpringRepository;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/api/crudsprings")
public class CrudSpringController {
 
 
  private final CrudSpringRepository crudseRepository;

  // @RequestMapping(method = RequestMethod.GET)
  @GetMapping
  public @ResponseBody List<CrudSpringModel> list() {
      return crudseRepository.findAll();
  }

  @GetMapping("/{id}")
  public ResponseEntity<CrudSpringModel> findById(@PathVariable Long id) {
      return crudseRepository.findById(id)
              .map(recordFound -> ResponseEntity.ok().body(recordFound))
              .orElse(ResponseEntity.notFound().build());
  }

  // @RequestMapping(method = RequestMethod.POST)
  @PostMapping
  @ResponseStatus(code = HttpStatus.CREATED)
  public CrudSpringModel create(@RequestBody CrudSpringModel course) {
      // System.out.println(course.getName());
      return crudseRepository.save(course);
      // return ResponseEntity.status(HttpStatus.CREATED)
      // .body(courseRepository.save(course));
  }

  @PutMapping("/{id}")
  public ResponseEntity<CrudSpringModel> update(@RequestBody CrudSpringModel cspringModel) {
      return crudseRepository.findById(id).map(recordFound -> {
        recordFound.setName(cspringModel.getName());
                  recordFound.setCategory(cspringModel.getCategory());
                  Course updated = crudseRepository.save(recordFound);
                  return ResponseEntity.ok().body(updated);
              }).orElse(ResponseEntity.notFound().build());
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> delete(@PathVariable Long id) {
      return crudseRepository.findById(id)
              .map(recordFound -> {
                crudseRepository.deleteById(id);
                  return ResponseEntity.noContent().<Void>build();
              })
              .orElse(ResponseEntity.notFound().build());
  }

}
