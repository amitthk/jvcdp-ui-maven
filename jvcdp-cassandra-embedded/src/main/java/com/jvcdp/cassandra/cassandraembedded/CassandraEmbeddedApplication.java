package com.jvcdp.cassandra.cassandraembedded;

import com.datastax.driver.core.Session;
import config.EmbeddedCassandraConfig;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CassandraEmbeddedApplication implements CommandLineRunner {

	private  static  final Logger logger = LoggerFactory.getLogger(CassandraEmbeddedApplication.class);

	@Bean
	EmbeddedCassandraConfig embeddedCassandraConfig(){
		return new EmbeddedCassandraConfig();
	}

	public static void main(String[] args) {
		SpringApplication.run(CassandraEmbeddedApplication.class, args);
	}

	@Override
	public void run(String... args) {
		logger.info("Starting Cassandra Embedded. Press CTRL+C to terminate...");
		try {
			Session session = embeddedCassandraConfig().session();
		} catch (Exception e) {
			logger.error(e.getStackTrace().toString());
		}
	}
}
