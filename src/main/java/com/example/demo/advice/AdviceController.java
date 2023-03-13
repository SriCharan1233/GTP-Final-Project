package com.example.demo.advice;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.example.demo.exceptionHandling.ExceptionHandling;

@ControllerAdvice
public class AdviceController {

	@ExceptionHandler(ExceptionHandling.class)
	public ResponseEntity<String> handleException(ExceptionHandling exception) {
		return new ResponseEntity<String>(exception.getMessage(), HttpStatus.BAD_REQUEST);
	}

}
