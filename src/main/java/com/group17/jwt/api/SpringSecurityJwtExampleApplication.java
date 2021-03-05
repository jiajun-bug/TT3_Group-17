package com.group17.jwt.api;

import com.group17.jwt.api.entity.User;
import com.group17.jwt.api.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@SpringBootApplication
public class SpringSecurityJwtExampleApplication {
    @Autowired
    private UserRepository repository;

    @PostConstruct
    public void initUsers() {
        List<User> users = Stream.of(new User(1, "Group 17", "OTse0IGJ3lVvuDF", "sampleemail@email.com"),
                new User(2, "user2", "password2", "user2@email.com"), new User(3, "3", "password3", "user2@email.com"),
                new User(4, "user4", "password4", "user4@email.com")).collect(Collectors.toList());
        repository.saveAll(users);
    }

    public static void main(String[] args) {
        SpringApplication.run(SpringSecurityJwtExampleApplication.class, args);
    }

}
