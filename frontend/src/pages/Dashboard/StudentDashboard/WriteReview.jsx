import { Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const WriteReview = () => {
  const params = useParams();
  const retrievedUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(retrievedUser);
  const [feedback, setFeedback] = useState("");
  const navigate = useNavigate();
  const successNotify = () => toast.success("Feedback submitted!");
  const postData = () => {
    fetch(
      `http://localhost:8080/api/giveFeedback?teacherId=${params?.id}&studentId=${user?.studentId}&feedback=${feedback}`,
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
          successNotify();
        }
      });
  };

  return (
    <div style={{ minHeight: "80vh" }}>
      <Container maxWidth={"lg"} style={{ padding: "10vh 0" }}>
        <Toaster />
        <div>
          <Typography variant="h6">Write your feedback:</Typography>
          <textarea
            onChange={(e) => setFeedback(e.target.value)}
            style={{
              width: "600px",
              fontFamily: "Roboto",
              fontSize: "16px",
            }}
            rows={10}
          />
        </div>
        <Button variant="contained" onClick={postData}>
          {" "}
          Submit{" "}
        </Button>
      </Container>
    </div>
  );
};

export default WriteReview;
