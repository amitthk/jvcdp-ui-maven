package com.jvcdp.jvcdpui;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;


@EnableZuulProxy
@SpringBootApplication
public class JvcdpUiApplication {

	public static void main(String[] args) {
		SpringApplication.run(JvcdpUiApplication.class, args);
	}


//	@Bean
//	public RequestLogFilter requestLogFilter() {
//		return new RequestLogFilter();
//	}
}
