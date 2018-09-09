package com.jvcdp.serverstats.jvcdpserverstats.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/home")
public class HomeController {
    @GetMapping(value = "")
    public List<String> list() {
        return new ArrayList<>(Arrays.asList("Hello","I come from serverstats controller"));
    }

}
