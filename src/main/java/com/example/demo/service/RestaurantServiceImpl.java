package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.RestaurantModel;
import com.example.demo.exceptionHandling.ExceptionHandling;
import com.example.demo.repository.RestaurantServiceRepository;

@Service
public class RestaurantServiceImpl implements RestaurantService {

	@Autowired
	RestaurantServiceRepository restraurent;

	@Override
	public RestaurantModel getRestaurants(String restaurantName) throws Exception {
		RestaurantModel restaurant= restraurent.getRestaurantByName(restaurantName);
		if(restaurant==null) {
			throw new ExceptionHandling("Restaurant Not Found!!!");
		}
		
		return restaurant;
	}

	@Override
	public List<RestaurantModel> displayRestaurants() {
		
		return restraurent.findAll();
	}

	@Override
	public RestaurantModel getRestaurantByUserId(int id) {
	
		return restraurent.getRestaurantByUserId(id);
	}

}
