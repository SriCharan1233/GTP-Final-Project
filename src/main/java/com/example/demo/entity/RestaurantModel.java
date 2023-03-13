package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="RestaurentList")
public class RestaurantModel {
	
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private Integer restaurantId;
	private String restaurantName;
	@OneToOne
	private UserCredentials user;
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
	public UserCredentials getUser() {
		return user;
	}
	public void setUser(UserCredentials user) {
		this.user = user;
	}
	public RestaurantModel(Integer restaurantId, String restaurantName, UserCredentials user) {
		super();
		this.restaurantId = restaurantId;
		this.restaurantName = restaurantName;
		this.user = user;
	}
	public RestaurantModel() {
		super();
	}
	@Override
	public String toString() {
		return "RestaurantModel [restaurantId=" + restaurantId + ", restaurantName=" + restaurantName + ", user=" + user
				+ "]";
	}
	
	
}
