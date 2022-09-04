package com.danny.crudspring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.danny.crudspring.model.CrudSpringModel;

@Repository
public interface CrudSpringRepository extends JpaRepository<CrudSpringModel,Long> {
  
}
