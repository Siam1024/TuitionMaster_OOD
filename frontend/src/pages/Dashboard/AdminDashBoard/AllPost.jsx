import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SinglePostCard from "../../Posts/SinglePostCard";

const AllPost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/getPost`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
    return (
      <div>
        <Container sx={{ padding: "5vh 0" }} maxWidth={"lg"}>
          <Typography variant="h5" fontFamily={"Poppins"} fontWeight={"bold"}>
            Handle Students Post
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

export default AllPost;
