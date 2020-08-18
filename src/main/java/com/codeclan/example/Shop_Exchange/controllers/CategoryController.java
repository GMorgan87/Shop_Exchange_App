package com.codeclan.example.Shop_Exchange.controllers;

import com.codeclan.example.Shop_Exchange.models.Category;
import com.codeclan.example.Shop_Exchange.models.Product;
import com.codeclan.example.Shop_Exchange.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categories")
public class CategoryController {

    @Autowired
    CategoryRepository categoryRepository;

    @GetMapping
    public ResponseEntity<List<Category>> getAllCategories(){
        return new ResponseEntity<>(categoryRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value="/{id}")
    public ResponseEntity<Category> getCategory(@PathVariable Long id) {
        return new ResponseEntity(categoryRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Category> postCategory(@RequestBody Category category) {
        categoryRepository.save(category);
        return new ResponseEntity<>(category, HttpStatus.CREATED);
    }

    @PutMapping(value="/{id}")
    public ResponseEntity<Category> putCategory(@RequestBody Category category){
        categoryRepository.save(category);
        return new ResponseEntity<>(category, HttpStatus.OK);
    }

    @DeleteMapping(value="/{id}")
    public ResponseEntity<Long> deleteCategory(@PathVariable Long id){
        categoryRepository.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }
}
