package com.example.demo.dto;



public class RestaurantResponseDto {

	
	private Integer restaurantId;
	private String restaurantName;
	public Integer getRestaurantId() {
		return restaurantId;
	}
	public void setRestaurantId(Integer restaurantId) {
		this.restaurantId = restaurantId;
	}
	public String getRestaurantName() {
		return restaurantName;
	}
	public void setRestaurantName(String restaurantName) {
		this.restaurantName = restaurantName;
	}
	public RestaurantResponseDto(Integer restaurantId, String restaurantName) {
		super();
		this.restaurantId = restaurantId;
		this.restaurantName = restaurantName;
	}
	public RestaurantResponseDto() {
		super();
	}
	
}
