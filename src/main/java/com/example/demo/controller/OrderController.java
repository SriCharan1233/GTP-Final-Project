package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Orders;
import com.example.demo.service.OrderServiceImpl;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/orders")
public class OrderController {
	
	@Autowired
	OrderServiceImpl orderservice;
	
	@GetMapping("/byrestaurant/{id}")
	public ResponseEntity<?> getOrdersByRestaurantId(@PathVariable int id) throws Exception{
		List<Orders> orders = orderservice.getOrdersByRestaurantId(id);
		return ResponseEntity.status(HttpStatus.OK).body(orders);
		
	}
	
	@GetMapping("/byuser/{id}")
	public ResponseEntity<?> getOrdersByUserId(@PathVariable int id) throws Exception{
		List<Orders> orders = orderservice.getOrdersByUserId(id);
		return ResponseEntity.status(HttpStatus.OK).body(orders);
		
	}
	
	@GetMapping("/byorder/{id}")
	public ResponseEntity<?> getOrderByOrderId(@PathVariable int id){
		Orders orders = orderservice.getOrderByOrderId(id);
		return ResponseEntity.status(HttpStatus.OK).body(orders);
		
	}
	
	@PostMapping("/saveorder")
	public ResponseEntity<?> createOrder(@RequestBody Orders order){
		Orders orders = orderservice.createOrder(order);
		return ResponseEntity.status(HttpStatus.OK).body(orders);
		
	}
	
	@PostMapping("/updateorder/{id}")
	public ResponseEntity<?> updateOrder(@PathVariable int id){
		Orders order = orderservice.getOrderByOrderId(id);
		order.setStatus("Delivered");
		Orders updatedOrder=orderservice.updateOrder(id, order);
		return ResponseEntity.status(HttpStatus.OK).body(updatedOrder);
		
	}
	

}
