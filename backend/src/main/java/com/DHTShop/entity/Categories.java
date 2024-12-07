package com.DHTShop.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Data
@Table(name = "Categories", schema = "dbo")
@Getter
@Setter
public class Categories {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CategoryID")
    private Long categoryID;
    @Column(name = "CategoryName")
    private String categoryName;
    @Column(name = "Description")
    private String description;

}
