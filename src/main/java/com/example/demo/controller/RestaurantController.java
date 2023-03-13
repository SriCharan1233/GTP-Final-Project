package com.example.demo.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.RestaurantResponseDto;
import com.example.demo.entity.RestaurantModel;
import com.example.demo.service.RestaurantServiceImpl;


@CrossOrigin(origins ="*")
@RestController
@RequestMapping("api/restaurants/")
public class RestaurantController  {
	
	@Autowired
	RestaurantServiceImpl restservice;
	
	@GetMapping("/restaurantlist")
	public ResponseEntity<?> display(){
		
		List<RestaurantModel> restaurents=restservice.displayRestaurants();
		List<RestaurantResponseDto> response =restaurents.stream()
				.map(restaurant->new RestaurantResponseDto(restaurant.getRestaurantId(),restaurant.getRestaurantName()))
				.collect(Collectors.toList());
		
		return ResponseEntity.status(HttpStatus.OK).body(response);
		
	}
	
	@GetMapping("/restaurantname/{restaurantName}")
	public ResponseEntity<?> getRestaurantByName(@PathVariable("restaurantName")String restaurantName) throws Exception{
		
		RestaurantModel restaurant = restservice.getRestaurants(restaurantName);
		return ResponseEntity.status(HttpStatus.OK).body(restaurant) ;
		
	}
	@GetMapping("/restaurant/{userId}")
	public ResponseEntity<?> getRestaurantByUserId(@PathVariable("userId") int id){
		RestaurantModel restaurant = restservice.getRestaurantByUserId(id);
		return ResponseEntity.status(HttpStatus.OK).body(restaurant);
	}
}
