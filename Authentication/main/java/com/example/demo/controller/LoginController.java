package com.example.demo.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/test")
public class LoginController {

    @GetMapping("/all")
    public String allAccess() {
        return "Public Content!!!";
    }

    @GetMapping("/user")
    @PreAuthorize("hasAuthority('USER')")
    public String userAccess() {
        return "User Content!!!";
    }


    @GetMapping("/restaurant")
    @PreAuthorize("hasAuthority('RESTAURANT')")
    public String adminAccess() {
        return "Restaurant Board!!!";
    }
}
