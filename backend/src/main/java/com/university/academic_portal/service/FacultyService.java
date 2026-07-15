package com.university.academic_portal.service;



import com.university.academic_portal.entity.Faculty;
import com.university.academic_portal.repository.FacultyRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FacultyService {

    private final FacultyRepository facultyRepository;

    public FacultyService(FacultyRepository facultyRepository) {
        this.facultyRepository = facultyRepository;
    }

    public List<Faculty> getAllFaculty() {
        return facultyRepository.findAll();
    }

    public Faculty getFacultyById(Long id) {
        return facultyRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Faculty not found"));
    }

    public Faculty saveFaculty(Faculty faculty) {
        return facultyRepository.save(faculty);
    }

    public Faculty updateFaculty(Long id, Faculty faculty) {

        Faculty existing = getFacultyById(id);

        existing.setEmpId(faculty.getEmpId());
        existing.setName(faculty.getName());
        existing.setDesignation(faculty.getDesignation());
        existing.setDepartment(faculty.getDepartment());
        existing.setEmail(faculty.getEmail());
        existing.setPhone(faculty.getPhone());
        existing.setPhoto(faculty.getPhoto());

        return facultyRepository.save(existing);
    }

    public void deleteFaculty(Long id) {
        facultyRepository.deleteById(id);
    }

}
