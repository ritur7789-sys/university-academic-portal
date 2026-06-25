package com.university.academic_portal.dto;

import com.university.academic_portal.enums.Role;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RegisterRequest {

    private String employeeId;
    private String name;
    private String password;
    private String repeatPassword;
    private String department;
    private String university;
    private Role role;
}
