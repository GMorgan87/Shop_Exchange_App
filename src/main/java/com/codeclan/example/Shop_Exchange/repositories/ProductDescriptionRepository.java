package com.codeclan.example.Shop_Exchange.repositories;

import com.codeclan.example.Shop_Exchange.models.ProductDescription;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductDescriptionRepository extends JpaRepository<ProductDescription,Long> {

    //finddescriptioncontaingignorecase
    //find all ignorecase contains

}
