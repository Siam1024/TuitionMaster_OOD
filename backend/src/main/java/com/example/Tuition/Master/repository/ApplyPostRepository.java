package com.example.Tuition.Master.repository;

import com.example.Tuition.Master.model.teacher.ApplyPostModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ApplyPostRepository extends JpaRepository<ApplyPostModel, Integer> {
    List<ApplyPostModel> findAllByStudentIdAndApproved(int postId, boolean approved);
}
