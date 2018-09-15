package com.jvcdp.ignite.config;

import java.util.Arrays;

import org.apache.ignite.Ignite;
import org.apache.ignite.IgniteException;
import org.apache.ignite.Ignition;
import org.apache.ignite.configuration.BinaryConfiguration;
import org.apache.ignite.configuration.ConnectorConfiguration;
import org.apache.ignite.configuration.IgniteConfiguration;
import org.apache.ignite.configuration.PersistentStoreConfiguration;
import org.apache.ignite.spi.discovery.tcp.TcpDiscoverySpi;
import org.apache.ignite.spi.discovery.tcp.ipfinder.vm.TcpDiscoveryVmIpFinder;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration
public class IgniteServerConfig {

    @Value("${enableFilePersistence}")
    private boolean enableFilePersistence;
    @Value("${igniteConnectorPort}")
    private int igniteConnectorPort;
    @Value("${igniteServerPortRange}")
    private String igniteServerPortRange;
    @Value("${ignitePersistenceFilePath}")
    private String ignitePersistenceFilePath;
    @Value("${igniteInstanceName}")
    private String igniteInstanceName;
    @Bean
    IgniteConfiguration igniteConfiguration() {
        IgniteConfiguration igniteConfiguration = new IgniteConfiguration();
        igniteConfiguration.setClientMode(false);
        // durable file memory persistence
        if(enableFilePersistence){
            PersistentStoreConfiguration persistentStoreConfiguration = new PersistentStoreConfiguration();
            persistentStoreConfiguration.setPersistentStorePath("./data/store");
            persistentStoreConfiguration.setWalArchivePath("./data/walArchive");
            persistentStoreConfiguration.setWalStorePath("./data/walStore");
            igniteConfiguration.setPersistentStoreConfiguration(persistentStoreConfiguration);
        }
        // connector configuration
        ConnectorConfiguration connectorConfiguration=new ConnectorConfiguration();
        connectorConfiguration.setPort(igniteConnectorPort);
        // common ignite configuration
        igniteConfiguration.setMetricsLogFrequency(0);
        igniteConfiguration.setQueryThreadPoolSize(2);
        igniteConfiguration.setDataStreamerThreadPoolSize(1);
        igniteConfiguration.setManagementThreadPoolSize(2);
        igniteConfiguration.setPublicThreadPoolSize(2);
        igniteConfiguration.setSystemThreadPoolSize(2);
        igniteConfiguration.setRebalanceThreadPoolSize(1);
        igniteConfiguration.setAsyncCallbackPoolSize(2);
        igniteConfiguration.setPeerClassLoadingEnabled(false);
        igniteConfiguration.setIgniteInstanceName(igniteInstanceName);
        BinaryConfiguration binaryConfiguration = new BinaryConfiguration();
        binaryConfiguration.setCompactFooter(false);
        igniteConfiguration.setBinaryConfiguration(binaryConfiguration);
        // cluster tcp configuration
        TcpDiscoverySpi tcpDiscoverySpi=new TcpDiscoverySpi();
        TcpDiscoveryVmIpFinder tcpDiscoveryVmIpFinder=new TcpDiscoveryVmIpFinder();
        // need to be changed when it come to real cluster
        tcpDiscoveryVmIpFinder.setAddresses(Arrays.asList("127.0.0.1:47500..47509"));
        tcpDiscoverySpi.setIpFinder(tcpDiscoveryVmIpFinder);
        igniteConfiguration.setDiscoverySpi(new TcpDiscoverySpi());
//        // cache configuration
//        CacheConfiguration alerts=new CacheConfiguration();
//        alerts.setCopyOnRead(false);
//        // as we have one node for now
//        alerts.setBackups(0);
//        alerts.setAtomicityMode(CacheAtomicityMode.ATOMIC);
//        alerts.setName("MetricSet");
//        alerts.setIndexedTypes(String.class,MetricSet.class);
//
//        CacheConfiguration alertsConfig=new CacheConfiguration();
//        alertsConfig.setCopyOnRead(false);
//        // as we have one node for now
//        alertsConfig.setBackups(0);
//        alertsConfig.setAtomicityMode(CacheAtomicityMode.ATOMIC);
//        alertsConfig.setName("MetricBeat");
//        alertsConfig.setIndexedTypes(String.class,MetricBeat.class);
//        igniteConfiguration.setCacheConfiguration(alerts,alertsConfig);
        return igniteConfiguration;
    }

    @Bean(destroyMethod = "close")
    Ignite ignite(IgniteConfiguration igniteConfiguration) throws IgniteException {
        final Ignite start = Ignition.start(igniteConfiguration);
        start.active(true);
        return start;
    }



}
