package com.DHTShop.dao;

import com.DHTShop.entity.Products;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(path = "Products", collectionResourceRel = "Products")
public interface ProductRepository extends JpaRepository<Products, Long> {
//    @Query(value = "SELECT * FROM dbo.Products", nativeQuery = true)
//    List<Products> findAllProduct();
}
