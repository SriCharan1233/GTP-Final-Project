package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.entity.MenuItems;

@Service
public interface MenuListService {
	
	public List<MenuItems> displayMenuItems();
	public MenuItems updateMenuItemById(int id);
	public MenuItems addMenuItem(MenuItems menuitem);
	public List<MenuItems> searchItem(String itemname) throws Exception;
	public void removeItem(int id);
	public MenuItems getItemById(int id);
	public List<MenuItems> getItemsByRestauantId(Integer restaurantid) throws Exception;
	public MenuItems updateAvilability(int itemId, MenuItems item);
	

}
