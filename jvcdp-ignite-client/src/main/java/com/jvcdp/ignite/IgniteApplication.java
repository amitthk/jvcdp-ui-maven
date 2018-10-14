package com.jvcdp.ignite;

import org.apache.ignite.Ignite;
import org.apache.ignite.Ignition;
import org.apache.ignite.configuration.CacheConfiguration;
import org.apache.ignite.spi.discovery.tcp.TcpDiscoverySpi;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.File;

@SpringBootApplication
public class IgniteApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(IgniteApplication.class, args);
	}
	
	@Override
	public void run(String... args) {
		Ignition.setClientMode(true);
		CacheConfiguration cfg = new CacheConfiguration("testCache");
		ClassLoader classLoader = IgniteApplication.class.getClassLoader();
		File file = new File(classLoader.getResource("ignite-client.xml").getFile());
		Ignite ignite = Ignition.start(file.getAbsolutePath());

		ignite.close();
}

//@Override
//	public void run(String... args){
//	val igniteContext = new IgniteContext(sparkContext,
//			() =>{
//			val tcpDiscoverySpi: TcpDiscoverySpi = new TcpDiscoverySpi
//	val ipFinder: TcpDiscoveryVmIpFinder = new TcpDiscoveryVmIpFinder
//	val addressList: java.util.List[String] = new
//			java.util.ArrayList[String]
//	addressList.add("127.0.0.1:47500")
//	ipFinder.setAddresses(addressList)
//	tcpDiscoverySpi.setIpFinder(ipFinder)
//	tcpDiscoverySpi.setLocalAddress("127.0.0.1")
//	val igniteConf : IgniteConfiguration = new
//			IgniteConfiguration().setClientMode(true).setDiscoverySpi(tcpDiscoverySpi)
//	igniteConf})
// }

}
