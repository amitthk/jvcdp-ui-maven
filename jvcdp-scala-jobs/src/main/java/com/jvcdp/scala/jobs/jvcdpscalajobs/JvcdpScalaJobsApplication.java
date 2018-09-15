package com.jvcdp.scala.jobs.jvcdpscalajobs;

import com.jvcdp.scala.jobs.JobProcessor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class JvcdpScalaJobsApplication implements CommandLineRunner {
	private  static  final Logger logger = LoggerFactory.getLogger(JvcdpScalaJobsApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(JvcdpScalaJobsApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		logger.info("Starting Cassandra Embedded. Press CTRL+C to terminate...");
		JobProcessor jobProcessor = new JobProcessor();
		logger.info(jobProcessor.run("test User"));
	}
}
