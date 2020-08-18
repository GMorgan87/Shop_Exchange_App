package com.codeclan.example.Shop_Exchange.models;

import com.codeclan.example.Shop_Exchange.repositories.ProductRepository;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="name")
    private String name;

    @Column(name="address")
    private String address;

    @Column(name="phone_number")
    private String phone_number;

    @Column(name="email")
    private String email;

//    @JsonIgnore
//    @JsonBackReference
    @OneToMany(mappedBy = "user")
    private List<Product> products;

//    @JsonIgnore
//    @JsonBackReference
    @OneToMany(mappedBy = "borrower")
    private List<Product> borrowedProducts;

    public User(String name, String address, String phone_number, String email) {
        this.name = name;
        this.address = address;
        this.phone_number = phone_number;
        this.email = email;
        this.products = new ArrayList<>();
        this.borrowedProducts = new ArrayList<>();
    }

    public User() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone_number() {
        return phone_number;
    }

    public void setPhone_number(String phone_number) {
        this.phone_number = phone_number;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }

    public List<Product> getBorrowedProducts() {
        return borrowedProducts;
    }

    public void setBorrowedProducts(List<Product> borrowedProducts) {
        this.borrowedProducts = borrowedProducts;
    }

    public void addProduct(Product product){
        this.products.add(product);
    }

    public void borrowProduct(Product product){
        this.borrowedProducts.add(product);
        product.setBorrower(this);
    }

    public void deleteProduct(Product product){
        this.products.remove(product);
    }

    public void returnProduct(Product product){
        this.borrowedProducts.remove(product);
    }
}


