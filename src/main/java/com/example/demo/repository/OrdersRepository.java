package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Orders;


@Repository
public interface OrdersRepository extends JpaRepository<Orders, Integer>{
	@Query(value="Select * From orders where restaurant_restaurant_id=?1",nativeQuery=true)
	public List<Orders> getOrdersByRestaurantId(int restaurant_id);
	
	@Query(value="Select * From orders where user_id=?1",nativeQuery=true)
	public List<Orders> getOrdersByUserId(int user_id);
}
