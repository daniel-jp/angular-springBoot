package com.danny.crudspring;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.repository.CrudRepository;

import com.danny.crudspring.model.CrudSpringModel;

@SpringBootApplication 
public class CrudSpringApplication{

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	} 


	@Bean
	 CommandLineRunner initDatabase(CrudRepository cRepository){

		return args -> {
      cRepository.deleteAll();
			CrudSpringModel c = new CrudSpringModel();
			c.setName("Angular");
			c.setCategory("Front-end");

       cRepository.save(c);
     
	 };

	}
}
