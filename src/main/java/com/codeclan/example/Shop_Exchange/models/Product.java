package com.codeclan.example.Shop_Exchange.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;

@Entity
@Table(name="products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnoreProperties(value={"name", "address", "phone_number", "email", "products", "borrowedProducts"})
    @ManyToOne
    @JoinColumn(name="user_id", nullable=false)
    private User user;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="borrower_id")
    private User borrower;


    @ManyToOne
    @JoinColumn(name="description_id", nullable=false)
    private ProductDescription productDescription;


    public Product(User user, ProductDescription productDescription) {
        this.user = user;
        this.borrower = null;
        this.productDescription = productDescription;
    }

    public Product() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public User getBorrower() {
        return borrower;
    }

    public void setBorrower(User borrower) {
        this.borrower = borrower;
    }

    public ProductDescription getProductDescription() {
        return productDescription;
    }

    public void setProductDescription(ProductDescription description) {
        this.productDescription = description;
    }
}
