package config;

import com.datastax.driver.core.Cluster;
import com.datastax.driver.core.Session;
import org.apache.cassandra.db.KeyspaceNotDefinedException;
import org.cassandraunit.utils.EmbeddedCassandraServerHelper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
//import org.springframework.data.cassandra.core.CassandraTemplate;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import java.time.Duration;

@Configuration
@Component
public class EmbeddedCassandraConfig {

    private  static  final Logger logger = LoggerFactory.getLogger(EmbeddedCassandraConfig.class);

    @Value("${cassandra.startuptimeoutinseconds}")
    private long startupTimeoutInSeconds;

    @Value("${cassandra.contactpoints}")
    private String contactPoints;

    @Value("${cassandra.port}")
    private int port;

    @Value("${cassandra.keyspace}")
    private String keyspace;

    private  static  String KEYSPACE_CREATE_CQL = "CREATE KEYSPACE IF NOT EXISTS %s WITH replication = { 'class' : 'SimpleStrategy' , 'replication_factor' : '%d' };";
    private static String KEYSPACE_ACTIVATE_CQL = "USE %s";

    private static Cluster cluster;
    private static Session session;

    @PostConstruct
    private void initialize() throws Exception {
        logger.info("Starting embedded cassandra server");
        EmbeddedCassandraServerHelper.startEmbeddedCassandra(Duration.ofSeconds(startupTimeoutInSeconds).toMillis());

        logger.info("Connect to embedded db");
        cluster = Cluster.builder().addContactPoints(contactPoints).withPort(port).build();
        session = cluster.connect();

        logger.info("Initialize keyspace");
        session.execute(String.format(KEYSPACE_CREATE_CQL,keyspace,3));
        session.execute(String.format(KEYSPACE_ACTIVATE_CQL, keyspace));
        logger.info("Keyspace created and activated!");

        Thread.sleep(2000);
    }

    @PreDestroy
    public void destroy() throws Exception {
        if (cluster != null) {
            cluster.close();
            cluster = null;
        }
        EmbeddedCassandraServerHelper.cleanDataEmbeddedCassandra(keyspace);
    }

    @Bean
    public Session session(){
        final Session session = cluster.connect();
        return session;
    }


}
