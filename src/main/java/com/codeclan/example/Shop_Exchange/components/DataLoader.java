package com.codeclan.example.Shop_Exchange.components;

import  com.codeclan.example.Shop_Exchange.models.*;
import com.codeclan.example.Shop_Exchange.repositories.CategoryRepository;
import com.codeclan.example.Shop_Exchange.repositories.ProductDescriptionRepository;
import com.codeclan.example.Shop_Exchange.repositories.ProductRepository;
import com.codeclan.example.Shop_Exchange.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    CategoryRepository categoryRepository;

    @Autowired
    ProductRepository productRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    ProductDescriptionRepository productDescriptionRepository;

    public DataLoader(){

    }

    public void run(ApplicationArguments args) throws Exception {

        Category vases = new Category("vases");
        categoryRepository.save(vases);

        Category baskets = new Category("baskets");
        categoryRepository.save(baskets);

        Category arches = new Category("arches");
        categoryRepository.save(arches);

        Category sundries = new Category("sundries");
        categoryRepository.save(sundries);

        User lilyPad = new User("Lily Pad", "2 Warrender Park Road EH9 2HQ", "0131 00000", "lilypadflowers@aol.com");
        userRepository.save(lilyPad);

        User vasileiosFlowers = new User("Vasileios Flowers","7/37 Princes Street EH1 2JJ","0131 141414","vs@gmail.com");
        userRepository.save(vasileiosFlowers);

        User ggSunflowers = new User("GG Flowers","6 Millar Place, EH10 2HQ","0131 14 14 14","gg@hotmail.com");
        userRepository.save(ggSunflowers);

        ProductDescription fishBowl20 = new ProductDescription("fish bowl 20cm", "It's a fish bowl", vases, Status.LEND, RentCondition.CLEAN, ReplaceStatus.NEW, 10);
        productDescriptionRepository.save(fishBowl20);

        ProductDescription fluteVase20 = new ProductDescription("flute vase 20cm","It is a flute vase",vases,Status.RENT,RentCondition.DIRTY,ReplaceStatus.FEE,23);
        productDescriptionRepository.save(fluteVase20);

        ProductDescription fishBasket30 = new ProductDescription("fish basket 30cm", "It's a fish basket", baskets,Status.RENT, RentCondition.CLEAN, ReplaceStatus.NEW, 10);
        productDescriptionRepository.save(fishBasket30);

        ProductDescription fluteVase70 = new ProductDescription("flute vase 70cm","It is a flute vase",vases,Status.LEND,RentCondition.DIRTY,ReplaceStatus.FEE,50);
        productDescriptionRepository.save(fluteVase70);


        Product prod1 = new Product(lilyPad,fishBowl20);
        productRepository.save(prod1);

        Product prod2 = new Product(lilyPad,fishBowl20);
        productRepository.save(prod2);

        Product prod3 = new Product(lilyPad,fishBowl20);
        productRepository.save(prod3);

        Product prod4 = new Product(lilyPad,fishBowl20);
        productRepository.save(prod4);

        Product prod5 = new Product(lilyPad, fluteVase20);
        productRepository.save(prod5);

        Product prod6 = new Product(lilyPad, fluteVase20);
        productRepository.save(prod6);

        Product prod7 = new Product(lilyPad, fluteVase20);
        productRepository.save(prod7);

        Product prod8 = new Product(lilyPad, fluteVase20);
        productRepository.save(prod8);

        vasileiosFlowers.borrowProduct(prod8);
        productRepository.save(prod8);

    }



}
