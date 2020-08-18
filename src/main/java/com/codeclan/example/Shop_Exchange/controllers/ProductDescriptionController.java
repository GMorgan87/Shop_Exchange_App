package com.codeclan.example.Shop_Exchange.controllers;

import com.codeclan.example.Shop_Exchange.models.ProductDescription;
import com.codeclan.example.Shop_Exchange.repositories.ProductDescriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product_description")
public class ProductDescriptionController {

    @Autowired
    ProductDescriptionRepository productDescriptionRepository;

    @GetMapping
    public ResponseEntity<List<ProductDescription>> getAllProductDescription(){
        return new ResponseEntity<>(productDescriptionRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value="/{id}")
    public ResponseEntity<ProductDescription> getProductDescription(@PathVariable Long id) {
        return new ResponseEntity(productDescriptionRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<ProductDescription> postProductDescription(@RequestBody ProductDescription productDescription){
        productDescriptionRepository.save(productDescription);
        return new ResponseEntity<>(productDescription, HttpStatus.CREATED);
    }

    @PutMapping(value="/{id}")
    public ResponseEntity<ProductDescription> putProductDescription(@RequestBody ProductDescription productDescription){
        productDescriptionRepository.save(productDescription);
        return  new ResponseEntity<>(productDescription, HttpStatus.OK);
    }

    @DeleteMapping(value="/{id}")
    public ResponseEntity<Long> deleteProductDescription(@PathVariable Long id){
        productDescriptionRepository.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }


}
