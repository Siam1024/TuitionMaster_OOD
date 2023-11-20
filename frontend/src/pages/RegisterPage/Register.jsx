import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Avatar,
  Button,
  Container,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const successNotify = () => toast.success("Successfully Registered!");
const errorNotify = () => toast.error("Select user!");
const Register = () => {
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const postData = (data) => {
    fetch(
      `http://localhost:8080/api/${
        role === "teacher" ? "registerTeacher" : "registerStudent"
      }?${role === "teacher" ? "teacherName" : "studentName"}=${
        data?.name
      }&email=${data?.email}&password=${data?.password}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.message) {
          setRole("");
          successNotify();
          reset();
        }
      });
  };

  const onSubmit = (data) => {
    if (role.length === 0) {
      errorNotify();
    } else {
      postData(data);
    }
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
        <Toaster />
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
                Register Here
              </Typography>
              {/* Right side grid with the login form */}
              <InputLabel id="demo-simple-select-label">Select User</InputLabel>
              <Select
                fullWidth
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Role"
                value={role}
              >
                <MenuItem onClick={() => setRole("teacher")} value={"teacher"}>
                  Teacher
                </MenuItem>
                <MenuItem onClick={() => setRole("student")} value={"student"}>
                  Student
                </MenuItem>
              </Select>
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  label="Name"
                  variant="outlined"
                  margin="normal"
                  type="text"
                  required
                  fullWidth
                  autoFocus
                  {...register("name", { required: true })}
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  type="email"
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
                  Register Now
                </Button>
              </form>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default Register;
