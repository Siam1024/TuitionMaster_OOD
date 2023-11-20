import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleTeacherCard from "../Teachers/SingleTeacherCard";

const SearchTeacher = () => {
  const params = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      `http://localhost:8080/api/searchTeacher?subject=${params?.subjectName}`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div
      style={{
        minHeight: "70vh",
      }}
    >
      <Container sx={{ padding: "5vh 0" }} maxWidth={"lg"}>
        <Typography variant="h5" fontFamily={"Poppins"} padding={"5vh 0"}>
          Search for = {params?.subjectName}
        </Typography>
        <Grid container spacing={2}>
          {data?.map((teacher) => (
            <SingleTeacherCard teacher={teacher} />
          ))}
          {data?.length === 0 && <p>No teacher found</p>}
        </Grid>
      </Container>
    </div>
  );
};

export default SearchTeacher;
