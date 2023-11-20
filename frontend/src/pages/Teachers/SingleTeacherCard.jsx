import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const SingleTeacherCard = ({ teacher }) => {
  console.log(teacher);
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <Grid item md={4}>
        <Card sx={{ minWidth: "300px" }}>
          <CardContent>
            <Avatar
              // alt={name}
              src={"/teacher.png"}
              sx={{
                width: 100,
                height: 100,
                margin: "auto",
                backgroundColor: "#2B99FF",
              }}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{
                mt: 2,
                textAlign: "center",
                textTransform: "capitalize",
              }}
            >
              {teacher?.teacherName}
            </Typography>
            <Typography color="textSecondary" sx={{ textAlign: "center" }}>
              <span style={{ fontWeight: "bold" }}>Email: </span>
              {teacher?.email} ,{" "}
              <span style={{ fontWeight: "bold" }}>Phn: </span>
              {teacher?.number}
            </Typography>
            <Typography variant="body2" sx={{ mt: 2, textAlign: "left" }}>
              <span style={{ fontWeight: "bold" }}>Education:</span>{" "}
              {teacher?.teacherEducation} <br />
              <span style={{ fontWeight: "bold" }}>Qualification:</span>{" "}
              {teacher?.qualification} <br />
              <span style={{ fontWeight: "bold" }}>Position:</span>{" "}
              {teacher?.position} <br />
              <span style={{ fontWeight: "bold" }}>Institution:</span>{" "}
              {teacher?.institution} <br />
              <span style={{ fontWeight: "bold" }}>Experience:</span>
              {teacher?.expertise} <br />
            </Typography>
          </CardContent>
          <CardActionArea>
            {location?.pathname === "/studentDashboard" && (
              <NavLink to={`/writeReview/${teacher?.teacherId}`}>
                {" "}
                <Button variant="outlined" sx={{ width: "100%" }}>
                  Write Feedback
                </Button>
              </NavLink>
            )}
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
};

export default SingleTeacherCard;
