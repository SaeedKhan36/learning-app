package com.mcq;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Main application entry point for the MCQ Backend services.
 * 
 * Note: This application uses a layered architecture and is prepared 
 * for microservices scaling. Ensure external services (DB, Cache) 
 * are running before going to production.
 */
@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        // Initialize the Mock Spring Boot Backend
        System.out.println("Starting up the MCQ Mock Backend...");
        SpringApplication.run(Application.class, args);
        System.out.println("MCQ Mock Backend started successfully on Port 8080.");
    }
}
