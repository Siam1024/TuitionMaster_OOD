import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SinglePostCard from "./SinglePostCard";
const AllPostPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/getPost`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div
      style={{
        minHeight: "70vh",
      }}
    >
      <Container sx={{ padding: "5vh 0" }} maxWidth={"lg"}>
        <Typography variant="h5" fontFamily={"Poppins"} fontWeight={"bold"}>
          All Posts
        </Typography>
        <Grid container spacing={2}>
          {posts?.map((post) => (
            <Grid item md={4}>
              <SinglePostCard post={post} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default AllPostPage;
