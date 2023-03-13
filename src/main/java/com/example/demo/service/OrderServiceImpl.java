package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Orders;
import com.example.demo.exceptionHandling.ExceptionHandling;
import com.example.demo.repository.OrdersRepository;

@Service
public class OrderServiceImpl implements OrderService{

	@Autowired
	OrdersRepository orderrepo;
	
	@Override
	public List<Orders> getOrdersByRestaurantId(int id) throws Exception{
		List<Orders> orders = orderrepo.getOrdersByRestaurantId(id);
		
		if(orders.size()==0) {
			throw new ExceptionHandling("You Don't have any Orders");
		}
		return orders;
		
	}

	@Override
	public List<Orders> getOrdersByUserId(int id) throws Exception {
    List<Orders> orders = orderrepo.getOrdersByUserId(id);
		
		if(orders.size()==0) {
			throw new ExceptionHandling("You haven't ordered anything yet");
		}
		return orders;
		
	}

	@Override
	public Orders getOrderByOrderId(int id) {
		
		return orderrepo.findById(id).get();
	}

	@Override
	public Orders createOrder(Orders order) {
	
		return orderrepo.save(order);
	}

	@Override
	public Orders updateOrder(int id, Orders order) {
		order.setOrderid(id);
		return orderrepo.save(order);
	}

	

}
