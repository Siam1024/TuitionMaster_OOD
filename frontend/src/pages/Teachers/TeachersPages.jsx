import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SingleTeacherCard from "./SingleTeacherCard";
const TeachersPages = () => {
  /*  const teacher = {
    teacherId: 8,
    teacherName: "sabbir",
    number: "1234",
    teacherSubject: "English",
    email: "sabbir@gmail.com",
    teacherEducation: "BSC English",
    password: "123456",
    role: "teacher",
    qualification: "Level O",
    institution: "DIU",
    position: "Assistant teacher",
    expertise: 0,
  }; */
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/getAllTeacher`)
      .then((res) => res.json())
      .then((data) => setTeachers(data));
  }, []);

  return (
    <div
      style={{
        minHeight: "70vh",
      }}
    >
      <Container sx={{ padding: "5vh 0" }} maxWidth={"lg"}>
        <Typography
          variant="h5"
          fontFamily={"Poppins"}
          fontWeight={"bold"}
          padding={"5vh 0"}
        >
          All Teachers
        </Typography>
        <Grid container spacing={2}>
          {teachers?.map((teacher) => (
            <SingleTeacherCard teacher={teacher} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default TeachersPages;
