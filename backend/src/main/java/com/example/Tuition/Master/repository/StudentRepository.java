package com.example.Tuition.Master.repository;


import com.example.Tuition.Master.model.user.StudentModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<StudentModel, Integer> {
    StudentModel findByEmail(String email);
}
