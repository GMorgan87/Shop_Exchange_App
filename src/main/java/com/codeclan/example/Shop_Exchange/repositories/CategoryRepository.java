package com.codeclan.example.Shop_Exchange.repositories;

import com.codeclan.example.Shop_Exchange.models.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

    //findbycateogrynamecontainsignorecase

}