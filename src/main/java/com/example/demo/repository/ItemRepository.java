package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.entity.MenuItems;


public interface ItemRepository extends JpaRepository<MenuItems, Integer> {
	
	@Query(value="Select * From menu_items where item_name=?1",nativeQuery=true)
	public List<MenuItems> getItemByName(String itemName); 
	
	@Query(value="Select * From menu_items where restaurant_id=?1",nativeQuery=true)
	public List<MenuItems> getItemByRestaurantId(Integer restaurant_id);
	
}
