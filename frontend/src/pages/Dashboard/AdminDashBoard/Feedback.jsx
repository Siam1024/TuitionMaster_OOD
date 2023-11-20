import { Card, CardContent, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/viewFeedback`)
      .then((res) => res.json())
      .then((data) => setFeedbacks(data));
  }, []);
  console.log(feedbacks);
  return (
    <div>
      <Grid container spacing={1}>
        {feedbacks?.map((feedback, idx) => (
          <Grid item md={4} key={idx}>
            <Card>
              <CardContent>
                <Typography variant="h6" fontFamily={"Poppins"}>
                  Student id : {feedback?.studentId}
                </Typography>
                <Typography variant="h6" fontFamily={"Poppins"}>
                  Teacher id : {feedback.teacherId}
                </Typography>
                <Typography variant="body1" fontFamily={"Roboto"}>
                  {feedback?.feedback}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Feedback;
