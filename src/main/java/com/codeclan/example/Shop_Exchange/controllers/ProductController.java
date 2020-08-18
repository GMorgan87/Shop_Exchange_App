package com.codeclan.example.Shop_Exchange.controllers;


import com.codeclan.example.Shop_Exchange.models.Product;
import com.codeclan.example.Shop_Exchange.models.Status;
import com.codeclan.example.Shop_Exchange.models.User;
import com.codeclan.example.Shop_Exchange.repositories.ProductRepository;
import com.codeclan.example.Shop_Exchange.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    ProductRepository productRepository;

    @Autowired
    UserRepository userRepository;

    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts(){
        return new ResponseEntity<>(productRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value="/{id}")
    public ResponseEntity<Product> getProduct(@PathVariable Long id) {
        return new ResponseEntity(productRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value="/{id}/borrow/{user_id}")
    public ResponseEntity<Product> updateBorrower(@PathVariable Long id,@PathVariable Long user_id){
        Product product = productRepository.findById(id).get();
        User borrower = userRepository.findById(user_id).get();
        borrower.borrowProduct(product);
        productRepository.save(product);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Product> postProduct(@RequestBody Product product) {
        productRepository.save(product);
        return new ResponseEntity<>(product, HttpStatus.CREATED);
    }

    @PutMapping(value="/{id}")
    public ResponseEntity<Product> putProduct(@RequestBody Product product){
        productRepository.save(product);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }


    @DeleteMapping(value="/{id}")
    public ResponseEntity<Long> deleteProduct(@PathVariable Long id){
        productRepository.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }

    @GetMapping(value="/search/{searchString}")
    public ResponseEntity<List<Product>> findProductByNameOrDescription(@PathVariable String searchString){
        return new ResponseEntity<>(productRepository.findDistinctByProductDescriptionNameContainsIgnoreCaseAndProductDescriptionStatusNot(searchString, Status.PRIVATE), HttpStatus.OK);
    }
}
