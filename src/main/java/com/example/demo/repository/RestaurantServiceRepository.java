package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.RestaurantModel;

@Repository
public interface RestaurantServiceRepository extends JpaRepository<RestaurantModel, Integer> {
     
	@Query(value="Select * From restaurent_list where Restaurant_Name=?1",nativeQuery=true)
	public RestaurantModel getRestaurantByName(String restaurantName); 
    
	@Query(value="Select * From restaurent_list where user_id=?1",nativeQuery=true)
	public RestaurantModel getRestaurantByUserId(int userId);
}
