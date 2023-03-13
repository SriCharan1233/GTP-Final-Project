package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import com.example.demo.service.MenuListServiceImpl;

@SpringBootApplication
public class RestaurantServiceApplication {

	public static void main(String[] args) {
		ConfigurableApplicationContext a=SpringApplication.run(RestaurantServiceApplication.class, args);
		MenuListServiceImpl menu = a.getBean(MenuListServiceImpl.class, args);
	}

}
