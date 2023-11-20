package com.example.Tuition.Master.repository;

import com.example.Tuition.Master.model.user.AdminModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface AdminRepository extends JpaRepository<AdminModel, Integer> {
    AdminModel findByEmail(String email);
}
