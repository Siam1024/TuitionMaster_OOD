import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
const successNotify = () => toast.success("Successfully updated!");
const UpdateTeacherProfile = () => {
  const retrievedUser = JSON.parse(localStorage.getItem("user"));
  const [initialData, setUser] = useState(retrievedUser);
  const { handleSubmit, control, setValue, register } = useForm();

  useEffect(() => {
    // Set initial data when the component mounts
    if (initialData) {
      Object.keys(initialData).forEach((key) => {
        setValue(key, initialData[key]);
      });
    }
  }, [initialData, setValue]);

  const updateData = () => {
    fetch(
      `http://localhost:8080/api/login?email=${initialData?.email}&password=${initialData?.password}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.email) {
          // To set an item in local storage
          localStorage.setItem("user", JSON.stringify(data));
          successNotify();
        }
      });
  };

  const postData = (data) => {
    fetch(
      `http://localhost:8080/api/updateTeacherProfile?email=${initialData?.email}&number=${data?.number}&subject=${data?.teacherSubject}&education=${data?.teacherEducation}&qualification=""&institution=${data?.institution}&position=${data?.position}&expertise=${data?.expertise}`,
      {
        method: "PUT",
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
          updateData();
        }
      });
  };

  const onSubmit = (data) => {
    postData(data);
    console.log(data);
  };

  return (
    <div style={{ minHeight: "70vh" }}>
      <Toaster />
      <Container maxWidth={"lg"} sx={{ padding: "5vh 0" }}>
        <Typography variant="h5" textAlign={"center"} paddingY={3}>
          Update your profile
        </Typography>
        <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            {" "}
            <Grid item md={6}>
              <label htmlFor="" style={{ fontFamily: "Poppins" }}>
                Name:
              </label>
              <Controller
                name="teacherName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    style={{ margin: "10px 0px" }}
                    fullWidth
                    {...register("teacherName")}
                    {...field}
                  />
                )}
              />
              <label htmlFor="" style={{ fontFamily: "Poppins" }}>
                Phone Number:
              </label>
              <Controller
                name="number"
                control={control}
                style={{ width: "100%" }}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    style={{ margin: "10px 0px" }}
                    fullWidth
                    {...register("number")}
                    {...field}
                  />
                )}
              />
              <label htmlFor="" style={{ fontFamily: "Poppins" }}>
                Education:
              </label>
              <Controller
                name="teacherEducation"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    style={{ margin: "10px 0px" }}
                    fullWidth
                    {...register("teacherEducation")}
                    {...field}
                  />
                )}
              />
              <label htmlFor="" style={{ fontFamily: "Poppins" }}>
                Experience:
              </label>
              <Controller
                name="expertise"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    style={{ margin: "10px 0px" }}
                    fullWidth
                    {...register("expertise")}
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item md={6}>
              <label htmlFor="" style={{ fontFamily: "Poppins" }}>
                Recent institution:
              </label>
              <Controller
                name="institution"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    style={{ margin: "10px 0px" }}
                    fullWidth
                    {...register("institution")}
                    {...field}
                  />
                )}
              />
              <label htmlFor="" style={{ fontFamily: "Poppins" }}>
                Position:
              </label>
              <Controller
                name="position"
                control={control}
                style={{ width: "100%" }}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    style={{ margin: "10px 0px" }}
                    fullWidth
                    {...register("position")}
                    {...field}
                  />
                )}
              />
              <label htmlFor="" style={{ fontFamily: "Poppins" }}>
                Subject:
              </label>
              <Controller
                name="teacherSubject"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    style={{ margin: "10px 0px" }}
                    {...field}
                    fullWidth
                    {...register("teacherSubject")}
                  />
                )}
              />
            </Grid>
          </Grid>

          <Button type="submit" variant="contained" color="primary">
            Update Profile
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default UpdateTeacherProfile;
