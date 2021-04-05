package com.tp1;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient
@SpringBootApplication
public class MicroservicioNoticiaApplication {

	public static void main(String[] args) {
		SpringApplication.run(MicroservicioNoticiaApplication.class, args);
	}

}
