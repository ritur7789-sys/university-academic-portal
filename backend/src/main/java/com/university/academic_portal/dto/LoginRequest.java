package com.university.academic_portal.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginRequest {

    private String employeeId;
    private String password;
}
