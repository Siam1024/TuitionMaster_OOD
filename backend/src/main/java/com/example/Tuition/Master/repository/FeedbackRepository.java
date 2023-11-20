package com.example.Tuition.Master.repository;

import com.example.Tuition.Master.model.student.FeedbackModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface FeedbackRepository extends JpaRepository<FeedbackModel,Integer> {
}
