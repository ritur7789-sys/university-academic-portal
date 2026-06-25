package com.university.academic_portal.controller;

import com.university.academic_portal.dto.LoginRequest;
import com.university.academic_portal.dto.RegisterRequest;
import com.university.academic_portal.entity.User;
import com.university.academic_portal.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = "http://localhost:5178")
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public String register(@RequestBody RegisterRequest registerRequest){

        if (!registerRequest.getPassword()
                .equals(registerRequest.getRepeatPassword())) {

            return "Password and Repeat Password do not match";
        }

        User user = User.builder()
                .employeeId(registerRequest.getEmployeeId())
                .name(registerRequest.getName())
                .password(registerRequest.getPassword())
                .repeatPassword(registerRequest.getRepeatPassword())
                .department(registerRequest.getDepartment())
                .university(registerRequest.getUniversity())
                .role(registerRequest.getRole())
                .build();

        userRepository.save(user);

        return "User created successfully";
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest loginRequest){
        Optional<User> user = userRepository.findByEmployeeId(loginRequest.getEmployeeId());

        if (user.isPresent() && user.get().getPassword().equals(loginRequest.getPassword())){
            return "Login Successfully";
        }

        return "Invalid Id or Password";
    }
}
