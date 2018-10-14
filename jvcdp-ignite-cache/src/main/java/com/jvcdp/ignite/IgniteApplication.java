package com.jvcdp.ignite;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class IgniteApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(IgniteApplication.class, args);
	}
	
	@Override
	public void run(String... args) {
	//LOG.info("EXECUTING : command line runner");

	for (int i = 0; i < args.length; ++i) {
	//LOG.info("args[{}]: {}", i, args[i]);
	}
}

}
