import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
const successNotify = () => toast.success("Post submitted!");
const MakePost = () => {
  const retrievedUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(retrievedUser);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const postData = (data) => {
    fetch(
      `http://localhost:8080/api/makePost?title=${data?.title}&studentName=${user?.studentName}&studentEmail=${user?.email}&description=${data?.description}&studentId=${user?.studentId}`,
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
        console.log(data);
        if (data?.message) {
          successNotify();
          reset();
        }
      });
  };

  const onSubmit = (data) => {
    console.log(data);
    postData(data);
  };
  return (
    <div>
      <Toaster />
      <Typography
        variant="h6"
        fontFamily={"Poppins"}
        textAlign={"center"}
        paddingY={2}
      >
        Submit your post for finding best Teacher
      </Typography>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {" "}
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "500px" }}>
          <TextField
            label="Title"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            backgroundColor={"white"}
            autoFocus
            {...register("title", { required: true })}
          />
          <textarea
            placeholder="Description"
            variant="outlined"
            margin="normal"
            required
            rows={7}
            style={{
              width: "100% ",
              fontSize: "16px",
              padding: "5px",
              fontFamily: "Roboto",
            }}
            type="text"
            {...register("description", { required: true })}
          />
          <Button
            type="submit"
            backgroundColor={"#2B99FF"}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit Post
          </Button>
        </form>
      </div>
    </div>
  );
};

export default MakePost;
