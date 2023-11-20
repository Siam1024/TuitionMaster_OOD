import { Container, Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div
      style={{ backgroundColor: "#2A1332", minHeight: "40vh", padding: "5vh" }}
    >
      <Container maxWidth={"xl"}>
        <Grid container>
          <Grid item md={4}>
            <Typography
              variant="h3"
              color={"white"}
              fontFamily={"Poppins"}
              fontWeight={"bold"}
            >
              Tuition Master
            </Typography>
            <Typography
              variant="subtitle1"
              color={"white"}
              textAlign={"justify"}
            >
              {" "}
              Welcome to Tuition Master, where learning knows no bounds.
              Discover expert tutors tailored to your unique needs and goals.
              Whether it's acing exams, mastering a new skill, or exploring a
              passion, we connect you with the perfect tutor for the journey.
              Transform your learning experience today!
            </Typography>
          </Grid>
          <Grid item md={2}></Grid>
          <Grid item md={6}>
            <Typography
              variant="h6"
              color={"white"}
              fontFamily={"Poppins"}
              fontWeight={"bold"}
            >
              Get Mobile App
            </Typography>
            <Typography
              variant="subtitle1"
              color={"white"}
              textAlign={"justify"}
            >
              Take education on the go. Get our mobile app for FREE! on your
              Apple and android devices
            </Typography>
            <img
              src="/android.png"
              alt=""
              srcset=""
              style={{ margin: "0px 10px" }}
            />
            <img src="/ios.png" alt="" srcset="" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
