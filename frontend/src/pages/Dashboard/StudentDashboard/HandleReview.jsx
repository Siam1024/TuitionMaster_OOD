import React, { useEffect, useState } from "react";

import { Grid, Typography } from "@mui/material";
import SingleTeacherCard from "../../Teachers/SingleTeacherCard";

const HandleReview = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/getAllTeacher`)
      .then((res) => res.json())
      .then((data) => setTeachers(data));
  }, []);
  return (
    <div>
      <Typography
        variant="h5"
        fontFamily={"Poppins"}
        fontWeight={"bold"}
        padding={"5vh 0"}
      >
        Give feedback
      </Typography>
      <Grid container spacing={2}>
        {teachers?.map((teacher) => (
          <SingleTeacherCard teacher={teacher} />
        ))}
      </Grid>
    </div>
  );
};

export default HandleReview;
