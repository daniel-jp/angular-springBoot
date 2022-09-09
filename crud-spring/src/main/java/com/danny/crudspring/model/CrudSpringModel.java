package com.danny.crudspring.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.boot.context.properties.ConstructorBinding;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import lombok.Data;

@Data 
@Entity
@Setter
@Getter
@ToString



@NoArgsConstructor
@ConstructorBinding
public class CrudSpringModel {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)

  @JsonProperty("_id")
  private Long id;
  @Column(length =200, nullable = false)
  private String name;
  @Column(length =10, nullable = false) 
  private String category;
}
