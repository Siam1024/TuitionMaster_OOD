import SearchIcon from "@mui/icons-material/Search";
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";

import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
const Home = () => {
  /* features data */
  const featuresData = [
    {
      icon: "/icon-1.png",
      title: "Offering All types of Courses",
      des: "Explore a diverse spectrum of courses tailored to your needs on our comprehensive tutor finder platform.",
    },
    {
      icon: "/icon-2.png",
      title: "Online consultation for all",
      des: "Access personalized online consultations with expert tutors to enhance your learning experience.",
    },
    {
      icon: "/icon-3.png",
      title: "A great investment for future",
      des: "Invest in your future success with a wealth of educational opportunities available at your fingertips.",
    },
    {
      icon: "/icon-4.png",
      title: "Best results guranteed",
      des: "Enjoy a guarantee of optimal results through our platform's commitment to excellence in tutoring.",
    },
    {
      icon: "/icon-5.png",
      title: "Easy to connect with anyone",
      des: "Seamlessly connect with tutors and peers, ensuring a smooth and interactive learning environment for all.",
    },
    {
      icon: "/icon-6.png",
      title: "All verified tutors for you",
      des: "Discover the assurance of quality education with our platform's selection of verified and proficient tutors.",
    },
  ];
  const [searchText, setSearchText] = useState("");

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/searchTeacher/${searchText}`);
    // TODO: Implement search functionality here
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      {/* Hero */}
      <div
        style={{
          minHeight: "90vh",
          backgroundColor: "#F5F8FF",
        }}
      >
        <Container maxWidth={"xl"}>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <div
                style={{
                  minHeight: "90vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div style={{ width: "100%" }}>
                  <Typography sx={{ textTransform: "capitalize" }} variant="h2">
                    Find the best <br />
                    <span style={{ fontWeight: "bold", color: "#2B99FF" }}>
                      Teacher{" "}
                    </span>{" "}
                    For You
                  </Typography>
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      textAlign: "justify",
                      width: "95% ",
                      padding: "4vh 0px",
                    }}
                    variant="subtitle1"
                  >
                    Welcome to Tuition Master, where learning knows no bounds.
                    Discover expert tutors tailored to your unique needs and
                    goals. Whether it's acing exams, mastering a new skill, or
                    exploring a passion, we connect you with the perfect tutor
                    for the journey. Transform your learning experience today!
                  </Typography>
                  <FormControl
                    style={{ width: "90%" }}
                    sx={{ m: 1, width: "25ch" }}
                    fullWidth
                    variant="outlined"
                  >
                    <InputLabel htmlFor="outlined-adornment-password">
                      Search
                    </InputLabel>
                    <OutlinedInput
                      onChange={(e) => setSearchText(e.target.value)}
                      fullWidth
                      id="outlined-adornment-password"
                      type={"text"}
                      endAdornment={
                        <InputAdornment position="end">
                          <Button
                            onClick={handleSearch}
                            variant="contained"
                            startIcon={<SearchIcon />}
                            size="large"
                            disableElevation
                            sx={{ backgroundColor: "#2B99FF" }}
                          >
                            Search Teacher
                          </Button>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </div>
              </div>
            </Grid>
            <Grid item md={6}>
              <div
                style={{
                  minHeight: "90vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src="/hero-image.png" alt="" srcset="" width={"100%"} />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>

      {/* Features Section */}
      <Container style={{ padding: "10vh 0" }} maxWidth="xl">
        <div className="features_heading" style={{ textAlign: "center" }}>
          <img src="/bar.svg" alt="" srcset="" />
          <Typography variant="h6">Better Learning , Better Result</Typography>
          <Typography variant="h3" padding={"3vh 0px"} fontFamily={"Poppins"}>
            Online tutor finder for all
          </Typography>
          <Typography variant="subtitle1">
            Empower your learning journey with our inclusive online education
            platform, designed to cater to all learners. Whether you're a
            student, professional, or lifelong learner, access a diverse range
            of courses and resources tailored to your needs. Join a dynamic
            community committed to making education accessible to everyone,
            anytime, anywhere.
          </Typography>
        </div>
        <Grid container spacing={3} padding={"5vh 0px"}>
          {featuresData?.map((feature) => (
            <Grid item md={4}>
              <Card>
                <CardContent>
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={`${feature.icon}`}
                        width={"50px"}
                        alt=""
                        style={{ marginRight: "20px" }}
                        srcset=""
                      />
                    </div>
                    <div>
                      <Typography
                        variant="h6"
                        fontFamily={"Poppins"}
                      >{`${feature.title}`}</Typography>
                      <Typography variant="subtitle1">
                        {`${feature.des}`}
                      </Typography>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <NavLink
            to={"/login"}
            style={{ color: "white", textDecoration: "none" }}
          >
            <Button variant="contained" size="large">
              Join with us
            </Button>
          </NavLink>
        </div>
      </Container>
    </div>
  );
};

export default Home;
