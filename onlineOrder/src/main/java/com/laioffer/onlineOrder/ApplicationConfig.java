package com.laioffer.onlineOrder;

import java.util.Properties;
import javax.sql.DataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

//hide personal information on line 27-29!!
//alter table customers drop index UK_9presqvlsrgil0twjmvns5rcy;
//alter table customers add constraint UK_9presqvlsrgil0twjmvns5rcy unique (cart_id);
//alter table customers add constraint FK1y63n6caw4ic3oofwgammh3b7 foreign key (cart_id) references cart (id);
//alter table menuitem add constraint FKleb3srv2x4aoa6c8vivhi5qj foreign key (restaurant_id) references restaurant (id);
//alter table orderitem add constraint FK4wkjkqa9nfydm2sd2xc7xblk foreign key (cart_id) references cart (id);
//alter table orderitem add constraint FK5k1874g5xr2hgifj8gpdjsy77 foreign key (menuitem_id) references menuitem (id);

@Configuration
@EnableWebMvc
public class ApplicationConfig {

    @Bean(name = "sessionFactory")
    public LocalSessionFactoryBean sessionFactory() {
        String PACKAGE_NAME = "";
        LocalSessionFactoryBean sessionFactory = new LocalSessionFactoryBean();
        sessionFactory.setDataSource(dataSource());
        sessionFactory.setPackagesToScan(PACKAGE_NAME);
        sessionFactory.setHibernateProperties(hibernateProperties());
        return sessionFactory;
    }

    @Bean(name = "dataSource")
    public DataSource dataSource() {
        String RDS_ENDPOINT = "";
        String USERNAME = "";
        String PASSWORD = "";
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
        dataSource.setUrl("jdbc:mysql://" + RDS_ENDPOINT + ":3306/onlineOrder?createDatabaseIfNotExist=true&serverTimezone=UTC");
        dataSource.setUsername(USERNAME);
        dataSource.setPassword(PASSWORD);

        return dataSource;
    }

    private final Properties hibernateProperties() {
        Properties hibernateProperties = new Properties();
        hibernateProperties.setProperty("hibernate.hbm2ddl.auto", "update");
        hibernateProperties.setProperty("hibernate.dialect", "org.hibernate.dialect.MySQL5InnoDBDialect");
        hibernateProperties.setProperty("hibernate.show_sql", "true");
        return hibernateProperties;
    }
}


