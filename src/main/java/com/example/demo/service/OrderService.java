package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.entity.MenuItems;
import com.example.demo.entity.Orders;

@Service
public interface OrderService {
	
	public List<Orders> getOrdersByRestaurantId(int id) throws Exception;
	public List<Orders> getOrdersByUserId(int id) throws Exception;
	public Orders getOrderByOrderId(int id);
	public Orders createOrder(Orders order);
	public Orders updateOrder(int id, Orders order);

}
