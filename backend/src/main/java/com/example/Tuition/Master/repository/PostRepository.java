package com.example.Tuition.Master.repository;

import com.example.Tuition.Master.model.student.StudentPostModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<StudentPostModel, Integer> {

    @Query("from student_posts where status = ?1")
    List<StudentPostModel> getPost(String status);
}
