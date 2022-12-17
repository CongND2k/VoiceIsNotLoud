package com.example.voiceisnotloud.Services;

import com.example.voiceisnotloud.Models.User;
import com.example.voiceisnotloud.Repositorys.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<User> list(){
        return userRepository.findAll();
    }
}
