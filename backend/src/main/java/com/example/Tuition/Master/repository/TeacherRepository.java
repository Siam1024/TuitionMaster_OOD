package com.example.Tuition.Master.repository;

import com.example.Tuition.Master.model.user.TeacherModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface TeacherRepository extends JpaRepository<TeacherModel, Integer> {
    TeacherModel findByEmail(String email);

    List<TeacherModel> findByTeacherSubject(String subject);
}
