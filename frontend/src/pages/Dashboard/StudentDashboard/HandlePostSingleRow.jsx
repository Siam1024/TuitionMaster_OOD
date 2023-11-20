import { Button, TableCell, TableRow } from "@mui/material";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
const successNotify = () => toast.success("Post submitted!");
const HandlePostSingleRow = ({ post }) => {
  console.log(post);
  const approvedRequest = () => {
    fetch(
      `http://localhost:8080/api/approveRequest?requestId=${post?.id}`,
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
          successNotify();
          //   window.location.reload();
        }
      });
  };

  return (
    <>
      <Toaster />
      <TableRow>
        <TableCell>{post?.postId}</TableCell>
        <TableCell align="right">{post?.teacherId}</TableCell>
        <TableCell align="right">
          {post?.approved ? "Approved" : "Not Approved"}
        </TableCell>
        <TableCell align="right">
          <Button variant="outlined" onClick={approvedRequest}>
            Approve Request
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
};

export default HandlePostSingleRow;
