import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const successNotify = () => toast.success("Successfully Registered!");

const LoginPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const postData = (inData) => {
    fetch(
      `http://localhost:8080/api/login?email=${inData?.email}&password=${inData?.password}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.email) {
          // To set an item in local storage
          localStorage.setItem("user", JSON.stringify(data));

          successNotify();
          reset();
          navigate("/");
          window.location.reload();
        }
      });
  };

  const onSubmit = (data) => {
    console.log(data);
    postData(data);
  };
  return (
    <div
      style={{
        minHeight: "80vh",
        backgroundColor: "#F5F8FF",
        padding: "5vh 0px",
      }}
    >
      <Container component="main" maxWidth="md">
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <img
                src="/login-photo.png"
                alt="login-image"
                style={{ width: "100%", height: "auto" }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Avatar sx={{ m: 1, bgcolor: "#2B99FF" }}>
                  <LockOutlinedIcon />
                </Avatar>
              </div>
              <Typography component="h1" variant="h5" textAlign={"center"}>
                Login
              </Typography>
              {/* Right side grid with the login form */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  label="Email"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  autoFocus
                  {...register("email", { required: true })}
                />
                <TextField
                  label="Password"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  type="password"
                  {...register("password", { required: true })}
                />
                <Button
                  type="submit"
                  backgroundColor={"#2B99FF"}
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
              </form>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default LoginPage;
