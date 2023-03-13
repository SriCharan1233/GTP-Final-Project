package com.example.demo.entity;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
@Entity
@Table(name="orders")
public class Orders {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer orderid;
	@OneToMany
	private List<MenuItems> items;
	@ManyToOne
	private RestaurantModel restaurant;
	@ManyToOne
	private UserCredentials user;
	private String status;
	public Integer getOrderid() {
		return orderid;
	}
	public void setOrderid(Integer orderid) {
		this.orderid = orderid;
	}
	public List<MenuItems> getItems() {
		return items;
	}
	public void setItems(List<MenuItems> items) {
		this.items = items;
	}
	public RestaurantModel getRestaurant() {
		return restaurant;
	}
	public void setRestaurant(RestaurantModel restaurant) {
		this.restaurant = restaurant;
	}
	public UserCredentials getUser() {
		return user;
	}
	public void setUser(UserCredentials user) {
		this.user = user;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Orders() {
		super();
	}
	@Override
	public String toString() {
		return "Orders [orderid=" + orderid + ", items=" + items + ", restaurant=" + restaurant + ", user=" + user
				+ ", status=" + status + "]";
	}
	
	public Orders(Integer orderid, List<MenuItems> items, RestaurantModel restaurant, UserCredentials user,
			String status) {
		super();
		this.orderid = orderid;
		this.items = items;
		this.restaurant = restaurant;
		this.user = user;
		this.status = status;
	}
	
	
    
	
}
