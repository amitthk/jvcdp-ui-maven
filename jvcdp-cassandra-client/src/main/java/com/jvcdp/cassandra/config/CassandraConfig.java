package com.jvcdp.cassandra.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.cassandra.config.CassandraClusterFactoryBean;
import org.springframework.data.cassandra.config.SchemaAction;
import org.springframework.data.cassandra.config.java.AbstractCassandraConfiguration;
import org.springframework.data.cassandra.convert.CassandraConverter;
import org.springframework.data.cassandra.convert.MappingCassandraConverter;
import org.springframework.data.cassandra.core.CassandraAdminOperations;
import org.springframework.data.cassandra.core.CassandraAdminTemplate;
import org.springframework.data.cassandra.core.CassandraTemplate;
import org.springframework.data.cassandra.mapping.BasicCassandraMappingContext;
import org.springframework.data.cassandra.mapping.CassandraMappingContext;
import org.springframework.data.cassandra.repository.config.EnableCassandraRepositories;

@Configuration
@EnableCassandraRepositories(basePackages = "com.jvcdp.cassandra")
public class CassandraConfig extends AbstractCassandraConfiguration{

    private  static  final Logger logger = LoggerFactory.getLogger(CassandraConfig.class);

    @Value("${cassandra.startuptimeoutinseconds}")
    private long startupTimeoutInSeconds;

    @Value("${cassandra.contactpoints}")
    private String contactPoints;

    @Value("${cassandra.port}")
    private int port;

    @Value("${cassandra.keyspace}")
    private String keyspace;

    @Value("${cassandra.entityBasePackages}")
    private String[] entityBasePackages;

    @Bean
    public CassandraClusterFactoryBean cluster(){
        CassandraClusterFactoryBean cluster = new CassandraClusterFactoryBean();
        cluster.setContactPoints(contactPoints);
        cluster.setPort(port);
        return cluster;
    }

    @Bean
    public CassandraMappingContext mappingContext(){
        return  new BasicCassandraMappingContext();
    }

    @Bean
    public CassandraConverter converter(){
        return  new MappingCassandraConverter(mappingContext());
    }

    @Bean
    public CassandraAdminOperations cassandraTemplate() throws ClassNotFoundException {
        return  new CassandraAdminTemplate(this.session().getObject(),this.cassandraConverter());
    }

    @Override
    public SchemaAction getSchemaAction(){
        return SchemaAction.CREATE_IF_NOT_EXISTS;
    }

    @Override
    public String[] getEntityBasePackages(){
        return entityBasePackages;
    }

    @Override
    protected String getKeyspaceName() {
        return keyspace;
    }
}
