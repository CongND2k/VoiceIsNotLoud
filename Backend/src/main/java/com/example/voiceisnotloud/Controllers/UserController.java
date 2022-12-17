package com.example.voiceisnotloud.Controllers;

import com.example.voiceisnotloud.Models.User;
import com.example.voiceisnotloud.Repositorys.UserRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<User> list(){
        return userRepository.findAll();
    }
    @GetMapping("{id}")
    public  User getUser(@PathVariable int id){
        return userRepository.getById(id);
    }
    @DeleteMapping("{id}")
    public void deleteUser(@PathVariable int id){
        userRepository.deleteById(id);
    }

    @PostMapping
    public void addUser(@ModelAttribute("User") User user){
            try {
                userRepository.save(user);
            }catch (Exception ignored){

            }
    }

    @PutMapping("{id}")
    public void updateUser(@PathVariable int id, @RequestBody User user){
        User currentUser = userRepository.getById(id);
        BeanUtils.copyProperties(user, currentUser, "user_id");
        userRepository.saveAndFlush(currentUser);
    }

}
