package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.entity.RestaurantModel;


@Service
public interface RestaurantService {
	
	public RestaurantModel getRestaurants(String restaurantName) throws Exception;
	public List<RestaurantModel> displayRestaurants();
	public RestaurantModel getRestaurantByUserId(int id);

}
