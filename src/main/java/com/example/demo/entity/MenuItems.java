package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name="MenuItems")
public class MenuItems {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer itemId;
	private String itemName;
	private Integer price;
	private boolean avilability;
	@ManyToOne
	@JoinColumn(name="restaurantId")
	public RestaurantModel restaurant;
	@Override
	public String toString() {
		return "MenuItems [itemId=" + itemId + ", itemName=" + itemName + ", price=" + price + ", avilability="
				+ avilability + ", restaurant=" + restaurant + "]";
	}
	
	
	
}
