package com.DHTShop.service;

import com.DHTShop.dao.ProductRepository;
import com.DHTShop.entity.Products;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;


    public List<Products> getProducts() {
        return productRepository.findAll();
    }


}
