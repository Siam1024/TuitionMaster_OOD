package com.example.Tuition.Master.model.user;


import jakarta.persistence.*;

@Entity(name = "teachers")
public class TeacherModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "t_id")
    private int teacherId;

    @Column(name = "t_name")
    public String teacherName;

    @Column(name = "number")
    public String number = null;

    @Column(name = "t_subject")
    public String teacherSubject = null;

    @Column(name = "email")
    public String email;

    @Column(name = "t_education")
    public String teacherEducation = null;

    @Column(name = "password")
    public String password;

    @Column(name = "role")
    public String role;

    @Column(name = "qualification")
    public String qualification;

    @Column(name = "institution")
    public String institution;

    @Column(name = "position")
    public String position;

    @Column(name = "expertise")
    public int expertise;


    public String getQualification() {
        return qualification;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public void setQualification(String qualification) {
        this.qualification = qualification;
    }

    public String getInstitution() {
        return institution;
    }

    public void setInstitution(String institution) {
        this.institution = institution;
    }

    public int getExpertise() {
        return expertise;
    }

    public void setExpertise(int expertise) {
        this.expertise = expertise;
    }

    public int getTeacherId() {
        return teacherId;
    }

    public String getPassword() {
        return password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setTeacherId(int teacherId) {
        this.teacherId = teacherId;
    }

    public String getTeacherName() {
        return teacherName;
    }

    public void setTeacherName(String teacherName) {
        this.teacherName = teacherName;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getTeacherSubject() {
        return teacherSubject;
    }

    public void setTeacherSubject(String teacherSubject) {
        this.teacherSubject = teacherSubject;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTeacherEducation() {
        return teacherEducation;
    }

    public void setTeacherEducation(String teacherEducation) {
        this.teacherEducation = teacherEducation;
    }
}
