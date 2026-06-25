package com.university.academic_portal.entity;

import com.university.academic_portal.enums.Role;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String employeeId;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String repeatPassword;

    @Enumerated(EnumType.STRING)
    private Role role; // ADMIN, FACULTY, STUDENT

    private String department;

    private String university;
}
