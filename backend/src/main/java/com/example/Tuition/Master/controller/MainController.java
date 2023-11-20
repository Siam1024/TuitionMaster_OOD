package com.example.Tuition.Master.controller;


import com.example.Tuition.Master.model.message.MessageModel;
import com.example.Tuition.Master.model.student.FeedbackModel;
import com.example.Tuition.Master.model.student.StudentPostModel;
import com.example.Tuition.Master.model.teacher.ApplyPostModel;
import com.example.Tuition.Master.model.user.AdminModel;
import com.example.Tuition.Master.model.user.StudentModel;
import com.example.Tuition.Master.model.user.TeacherModel;
import com.example.Tuition.Master.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class MainController {

    @Autowired
    StudentRepository studentRepository;
    @Autowired
    TeacherRepository teacherRepository;
    @Autowired
    PostRepository postRepository;
    @Autowired
    ApplyPostRepository applyPostRepository;
    @Autowired
    FeedbackRepository feedbackRepository;
    @Autowired
    AdminRepository adminRepository;


    @PostMapping("/registerStudent")
    public Object registerStudent(@ModelAttribute StudentModel studentModel) {
        try {
            studentModel.setRole("student");
            studentRepository.save(studentModel);
            return new MessageModel("student registration success");
        } catch (Error e) {
            return new MessageModel("something went wrong");
        }
    }

    @PostMapping("/registerTeacher")
    public Object registerTeacher(@ModelAttribute TeacherModel teacherModel) {
        try {
            teacherModel.setRole("teacher");
            teacherRepository.save(teacherModel);
            return new MessageModel("teacher registration success");
        } catch (Error e) {
            return new MessageModel("something went wrong");
        }
    }


    @GetMapping("/login")
    public Object loginStudent(@RequestParam String email, @RequestParam String password) {
        try {
            StudentModel studentModel = studentRepository.findByEmail(email);
            if (studentModel == null) {
                TeacherModel teacherModel = teacherRepository.findByEmail(email);
                if (teacherModel == null) {
                    AdminModel adminModel = adminRepository.findByEmail(email);
                    if (adminModel == null) {
                        return new MessageModel("no account found");
                    } else {
                        return adminModel;
                    }
                } else {
                    if (teacherModel.password.equalsIgnoreCase(password)) return teacherModel;
                    else return new MessageModel("invalid credential");
                }
            } else {
                if (studentModel.password.equalsIgnoreCase(password)) return studentModel;
                else return new MessageModel("invalid credential");
            }
        } catch (Error e) {
            return new MessageModel("something went wrong");
        }
    }

    @GetMapping("/getProfile")
    public Object getProfile(@RequestParam String email) {
        try {
            StudentModel studentModel = studentRepository.findByEmail(email);
            if (studentModel == null) {
                TeacherModel teacherModel = teacherRepository.findByEmail(email);
                if (teacherModel == null) {
                    return new MessageModel("no account found");
                } else {
                    return teacherModel;
                }
            } else {
                return studentModel;
            }
        } catch (Error e) {
            return new MessageModel("something went wrong");
        }
    }

    @PutMapping("/updateStudentProfile")
    public Object updateStudentProfile(@RequestParam String email, @RequestParam String number, @RequestParam String gender, @RequestParam String sClass, @RequestParam String group) {
        try {
            StudentModel studentModel = studentRepository.findByEmail(email);

            studentModel.setNumber(number == null ? studentModel.number : number);
            studentModel.setStudentGender(gender == null ? studentModel.studentGender : gender);
            studentModel.setStudentClass(sClass == null ? studentModel.studentClass : sClass);
            studentModel.setStudentGroup(group == null ? studentModel.studentGroup : group);
            studentRepository.save(studentModel);
            return new MessageModel("profile updated");

        } catch (Error e) {
            return new MessageModel("something went wrong");
        }
    }


    @PutMapping("/updateTeacherProfile")
    public Object updateTeacherProfile(@RequestParam String email, @RequestParam String number, @RequestParam String subject, @RequestParam String education, @RequestParam String qualification, @RequestParam String institution, @RequestParam String position, @RequestParam int expertise) {
        try {
            TeacherModel teacherModel = teacherRepository.findByEmail(email);

            teacherModel.setNumber(number == null ? teacherModel.number : number);
            teacherModel.setTeacherSubject(subject == null ? teacherModel.teacherSubject.toLowerCase() : subject.toLowerCase());
            teacherModel.setTeacherEducation(education == null ? teacherModel.teacherEducation : education);
            teacherModel.setQualification(qualification == null ? teacherModel.qualification : qualification);
            teacherModel.setInstitution(institution == null ? teacherModel.institution : institution);
            teacherModel.setPosition(position == null ? teacherModel.position : position);
            teacherModel.setExpertise(expertise >= 0 ? teacherModel.expertise : expertise);

            teacherRepository.save(teacherModel);
            return new MessageModel("profile updated");

        } catch (Error e) {
            return new MessageModel("something went wrong");
        }
    }


    //........................................................................//


    //........................................................................//
    @PostMapping("/makePost")
    public Object makePost(@ModelAttribute StudentPostModel studentPostModel) {
        try {
            studentPostModel.setStatus("pending");
            postRepository.save(studentPostModel);
            return new MessageModel("make post success");
        } catch (Error e) {
            return new MessageModel("something went wrong");
        }
    }

    @GetMapping("/getRequest")
    public Object getRequest(@RequestParam int studentId) {
        try {
            List<ApplyPostModel> applyPostModels = applyPostRepository.findAllByStudentIdAndApproved(studentId, false);
            return applyPostModels;
        } catch (Error e) {
            return new MessageModel("something went wrong");
        }
    }

    @PutMapping("/approveRequest")
    public Object approveRequest(@RequestParam int requestId) {
        try {
            Optional<ApplyPostModel> result = applyPostRepository.findById(requestId);
            if (result.isPresent()) {
                ApplyPostModel applyPostModel = result.get();
                applyPostModel.setApproved(true);
                applyPostRepository.save(applyPostModel);
                return new MessageModel("approved");
            } else return new MessageModel("no request found");
        } catch (Error e) {
            return new MessageModel("something went wrong");
        }
    }

    @PostMapping("/giveFeedback")
    public Object giveFeedback(@ModelAttribute FeedbackModel feedbackModel) {
        try {
            feedbackRepository.save(feedbackModel);
            return new MessageModel("success");
        } catch (Error e) {
            return new MessageModel("something went wrong");
        }
    }


    @GetMapping("/searchTeacher")
    public Object searchTeacher(@RequestParam String subject) {
        try {
            List<TeacherModel> teacherModels = teacherRepository.findByTeacherSubject(subject.toLowerCase());
            return teacherModels;
        } catch (Error e) {
            return new MessageModel("something went wrong");
        }
    }

    //........................................................................//

    @GetMapping("/getPost")
    public Object getPost() {
        try {
            List<StudentPostModel> posts = postRepository.getPost("pending");
            return posts;
        } catch (Error e) {
            return new MessageModel("something went wrong");
        }
    }

    @PostMapping("/applyPost")
    public Object applyPost(@ModelAttribute ApplyPostModel applyPostModel) {
        try {
            Optional<StudentPostModel> posts = postRepository.findById(applyPostModel.getPostId());
            if (posts.isPresent()) {
                StudentPostModel postModel = posts.get();
                postModel.setStatus("complete");
                postRepository.save(postModel);
                applyPostModel.setApproved(false);
                applyPostRepository.save(applyPostModel);
                return new MessageModel("success");
            } else return new MessageModel("no post found");

        } catch (Error e) {
            return new MessageModel("something went wrong");
        }
    }

    //.................................................................//


    @DeleteMapping("/deletePost")
    public Object deletePost(@RequestParam String email, @RequestParam int postId) {
        try {
            AdminModel adminModel = adminRepository.findByEmail(email);
            if (adminModel == null) {
                return new MessageModel("only admin can delete post");
            } else {
                postRepository.deleteById(postId);
                return new MessageModel("success");
            }
        } catch (Error e) {
            return new MessageModel("something went wrong");
        }
    }

    @DeleteMapping("/deleteTeacher")
    public Object deleteTeacher(@RequestParam String email, @RequestParam int teacherId) {
        try {
            AdminModel adminModel = adminRepository.findByEmail(email);
            if (adminModel == null) {
                return new MessageModel("only admin can delete post");
            } else {
                teacherRepository.deleteById(teacherId);
                return new MessageModel("success");
            }
        } catch (Error e) {
            return new MessageModel("something went wrong");
        }
    }

    @DeleteMapping("/deleteStudent")
    public Object deleteStudent(@RequestParam String email, @RequestParam int studentId) {
        try {
            AdminModel adminModel = adminRepository.findByEmail(email);
            if (adminModel == null) {
                return new MessageModel("only admin can delete post");
            } else {
                studentRepository.deleteById(studentId);
                return new MessageModel("success");
            }
        } catch (Error e) {
            return new MessageModel("something went wrong");
        }
    }


    @GetMapping("/viewFeedback")
    public Object viewFeedback() {
        try {
            List<FeedbackModel> feedbackModels = feedbackRepository.findAll();
            return feedbackModels;
        } catch (Error e) {
            return new MessageModel("something went wrong");
        }
    }


    @GetMapping("/getAllTeacher")
    public Object getAllTeacher() {
        try {
            List<TeacherModel> teachers = teacherRepository.findAll();
            return teachers;
        } catch (Error e) {
            return new MessageModel("something went wrong");
        }
    }


    @GetMapping("/getAllStudent")
    public Object getAllStudent() {
        try {
            List<StudentModel> students = studentRepository.findAll();
            return students;
        } catch (Error e) {
            return new MessageModel("something went wrong");
        }
    }


}
