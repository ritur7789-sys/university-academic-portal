package com.university.academic_portal.controller;


import com.university.academic_portal.entity.Faculty;
import com.university.academic_portal.service.FacultyService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/faculty")
@CrossOrigin(origins = "http://localhost:5173")
public class FacultyController {

    private final FacultyService facultyService;

    public FacultyController(FacultyService facultyService) {
        this.facultyService = facultyService;
    }

    // Get All Faculty
    @GetMapping
    public List<Faculty> getAllFaculty() {
        return facultyService.getAllFaculty();
    }

    // Get Faculty By Id
    @GetMapping("/{id}")
    public Faculty getFacultyById(@PathVariable Long id) {
        return facultyService.getFacultyById(id);
    }

    // Add Faculty
    @PostMapping
    public Faculty saveFaculty(@RequestBody Faculty faculty) {
        return facultyService.saveFaculty(faculty);
    }

    // Update Faculty
    @PutMapping("/{id}")
    public Faculty updateFaculty(@PathVariable Long id,
                                 @RequestBody Faculty faculty) {

        Faculty existing = facultyService.getFacultyById(id);

        existing.setEmpId(faculty.getEmpId());
        existing.setName(faculty.getName());
        existing.setDesignation(faculty.getDesignation());
        existing.setDepartment(faculty.getDepartment());
        existing.setEmail(faculty.getEmail());
        existing.setPhone(faculty.getPhone());
        existing.setPhoto(faculty.getPhoto());

        return facultyService.saveFaculty(existing);
    }

    // Delete Faculty
    @DeleteMapping("/{id}")
    public String deleteFaculty(@PathVariable Long id) {
        facultyService.deleteFaculty(id);
        return "Faculty deleted successfully.";
    }
    
}
