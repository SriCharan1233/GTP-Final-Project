package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.MenuItems;
import com.example.demo.entity.Orders;
import com.example.demo.service.MenuListServiceImpl;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/MenuItems/")

public class MenuItemController {

	@Autowired
	MenuListServiceImpl menu;

	@GetMapping("/allitems")
	public ResponseEntity<?> displayMenuItems() {
		List<MenuItems> menuitems = menu.displayMenuItems();
		return ResponseEntity.status(HttpStatus.OK).body(menuitems);

	}

	@PostMapping("/additems")
	public ResponseEntity<?> addMenuItem(@RequestBody MenuItems menuitems) {
		menu.addMenuItem(menuitems);
		return ResponseEntity.status(HttpStatus.CREATED).body("Item Added Successfully");
	}

	@GetMapping("/searchitem/{itemname}")
	public ResponseEntity<?> searchItem(@PathVariable String itemname) throws Exception {
		List<MenuItems> items = menu.searchItem(itemname);
		return ResponseEntity.status(HttpStatus.OK).body(items);

	}

	@GetMapping("/getitembyid/{restaurantid}")
	public ResponseEntity<List<?>> getItemByRestaurantId(@PathVariable Integer restaurantid) throws Exception {
		List<MenuItems> items = menu.getItemsByRestauantId(restaurantid);
		return ResponseEntity.status(HttpStatus.OK).body(items);

	}

	@DeleteMapping("/removeitem/{itemid}")
	public ResponseEntity<?> removeItem(@PathVariable Integer itemid) {
		menu.removeItem(itemid);
		return ResponseEntity.status(HttpStatus.OK).body("Item removed");

	}

	@GetMapping("/getItemByItemId/{itemId}")
	public ResponseEntity<?> getItemById(@PathVariable Integer itemId) {
		MenuItems item = menu.getItemById(itemId);
		return ResponseEntity.status(HttpStatus.OK).body(item);

	}

	@PostMapping("/update/{id}")
	public ResponseEntity<?> updateAvilability(@PathVariable int id) {
		MenuItems item = menu.getItemById(id);
		if (item.isAvilability()) {
			item.setAvilability(false);
		} else {
			item.setAvilability(true);
		}
		MenuItems updatedItem = menu.updateAvilability(id, item);
		return ResponseEntity.status(HttpStatus.OK).body(updatedItem);

	}

}
