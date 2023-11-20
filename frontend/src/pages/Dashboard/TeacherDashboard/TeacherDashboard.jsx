import { Button, Container, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { NavLink } from "react-router-dom";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const successNotify = () => toast.success("Payment done !");

const TeacherDashboard = () => {
  const retrievedUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(retrievedUser);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleBtn = () => {
    handleClose();
    successNotify();
  };
  return (
    <div style={{ minHeight: "70vh", backgroundColor: "#F5F8FF" }}>
      <Typography
        variant="h5"
        textAlign={"center"}
        paddingY={5}
        fontWeight={"bold"}
      >
        {" "}
        Teacher Dashboard{" "}
      </Typography>
      <Container maxWidth="xl">
        <Toaster />
        <div>
          <NavLink to={"/updateTeacher"}>
            {" "}
            <Button variant="outlined">Update profile</Button>
          </NavLink>
          <Button
            onClick={handleOpen}
            variant="outlined"
            sx={{ margin: "0 10px" }}
          >
            Pay For Last Job
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Pay with{" "}
                <img src="/nagad.png" alt="" srcset="" width={"60px"} /> 100 tk
                charge
              </Typography>

              <TextField
                fullWidth
                placeholder="Number"
                variant="outlined"
              ></TextField>
              <Button
                variant="contained"
                style={{ marginTop: "20px" }}
                disableElevation
                onClick={handleBtn}
              >
                Pay now
              </Button>
            </Box>
          </Modal>
        </div>
      </Container>
    </div>
  );
};

export default TeacherDashboard;
