package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.MenuItems;
import com.example.demo.exceptionHandling.ExceptionHandling;
import com.example.demo.repository.ItemRepository;

@Service
public class MenuListServiceImpl implements MenuListService {

	@Autowired
	ItemRepository itemrepo;
	@Override
	public List<MenuItems> displayMenuItems() {
	
		return itemrepo.findAll();
	}

	@Override
	public MenuItems updateMenuItemById(int id) {
		
		return itemrepo.findById(id).get();
	}

	@Override
	public MenuItems addMenuItem(MenuItems menuitem) {
     
		return itemrepo.save(menuitem);
	}

	@Override
	public List<MenuItems> searchItem(String itemname) throws Exception {
		
		List<MenuItems> item= itemrepo.getItemByName(itemname);
		
		if(item.size()==0) {
			throw new ExceptionHandling("Item Not Found!!!");
		}
		
		return item;
	}

	@Override
	public List<MenuItems> getItemsByRestauantId(Integer restaurantid) throws Exception {
		
		List<MenuItems> menuitems = itemrepo.getItemByRestaurantId(restaurantid);
		
		if(menuitems.size()==0) {
			throw new ExceptionHandling("Oops!!! No Item is Avilable in this Restaurant...");
		}
		
		return menuitems  ;
	}

	@Override
	public void removeItem(int id) {
		 itemrepo.deleteById(id);
		
	}

	@Override
	public MenuItems getItemById(int id) {
		return itemrepo.findById(id).get();
	}

	@Override
	public MenuItems updateAvilability(int itemId, MenuItems item) {
         item.setItemId(itemId);
		return itemrepo.save(item);
	}

	
	
}
