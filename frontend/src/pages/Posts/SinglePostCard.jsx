import { Button, CardActionArea, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLocation } from "react-router-dom";

const successNotify = () => toast.success("Done !");
const errorNotify = () => toast.error("Please login as teacher!");
const errorNotify1 = () => toast.error("You are not teacher!");
const SinglePostCard = ({ post }) => {
  const retrievedUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(retrievedUser);
  const location = useLocation();

  const deletePost = () => {
    fetch(
      `http://localhost:8080/api/deletePost?email=admin@gmail.com&postId=${post?.id}`,
      {
        method: "DELETE",
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
        }
      });
  };

  const submitApply = () => {
    fetch(
      `http://localhost:8080/api/applyPost?postId=${post?.id}&teacherId=${user?.teacherId}&studentId=${post?.studentId}`,
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
        }
      });
  };

  const handleJobApply = () => {
    if (!user) {
      errorNotify();
    } else if (user?.role === "student") {
      errorNotify1();
    } else {
      submitApply();
    }
  };
  console.log(post);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Toaster />
      <CardHeader
        avatar={
          <Avatar sx={{ backgroundColor: "#2B99FF" }} aria-label="recipe">
            T
          </Avatar>
        }
        title={`${post?.studentName}`}
        subheader={`${post?.studentEmail}`}
      />

      <CardContent>
        <Typography variant="h6" fontWeight={"bold"}>
          {post?.title}
        </Typography>
        <Typography variant="body1">{post?.description}</Typography>
      </CardContent>
      <CardActionArea>
        {location?.pathname !== "/adminDashboard" ? (
          <Button sx={{ width: "100%" }} onClick={handleJobApply}>
            Apply Now
          </Button>
        ) : (
          <Button sx={{ width: "100%", color: "red" }} onClick={deletePost}>
            Delete
          </Button>
        )}
      </CardActionArea>
    </Card>
  );
};

export default SinglePostCard;
