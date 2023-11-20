import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useEffect, useState } from "react";
import HandlePostSingleRow from "./HandlePostSingleRow";

const HandlePostRequest = () => {
  const retrievedUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(retrievedUser);
  const [postData, setPostData] = useState();
  useEffect(() => {
    fetch(`http://localhost:8080/api/getRequest?studentId=${user?.studentId}`)
      .then((res) => res.json())
      .then((data) => setPostData(data));
  }, []);

  return (
    <div>
      <Typography
        variant="h6"
        fontFamily={"Poppins"}
        textAlign={"center"}
        paddingY={2}
      >
        Handle Teachers Request
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Post ID</TableCell>
              <TableCell align="right">
                Teacher ID 
              </TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
           
            {postData?.map((post) => (
              <HandlePostSingleRow post={post} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default HandlePostRequest;
