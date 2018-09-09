package com.jvcdp.serverstats.jvcdpserverstats;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class JvcdpServerstatsApplication {

	public static void main(String[] args) {
		SpringApplication.run(JvcdpServerstatsApplication.class, args);
	}
}
