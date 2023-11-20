// import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
const NavigationBar = () => {
  const retrievedUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(retrievedUser);
  const [load, setLoad] = useState(user ? true : false);
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <div>
        <AppBar
          position="sticky"
          sx={{
            backgroundColor: "#fff",
            padding: "0px",
            margin: "0px",
            color: "#00BBFE",
          }}
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Tuition Master
            </Typography>
            <Button color="inherit">
              <NavLink
                to={"/"}
                style={{ color: "#00BBFE", textDecoration: "none" }}
              >
                Home
              </NavLink>
            </Button>
            <Button color="inherit">
              <NavLink
                to={"/posts"}
                style={{ color: "#00BBFE", textDecoration: "none" }}
              >
                Posts
              </NavLink>
            </Button>
            <Button color="inherit">
              <NavLink
                to={"/teachers"}
                style={{ color: "#00BBFE", textDecoration: "none" }}
              >
                Teachers
              </NavLink>
            </Button>

            {user?.email ? (
              <>
                <Button color="inherit">
                  <NavLink
                    to={
                      user?.role === "teacher"
                        ? "/teacherDashboard"
                        : user?.role === "admin"
                        ? "/adminDashboard"
                        : "studentDashboard"
                    }
                    style={{ color: "#00BBFE", textDecoration: "none" }}
                  >
                    Dashboard
                  </NavLink>
                </Button>
                <Button
                  style={{ backgroundColor: "red" }}
                  onClick={handleLogOut}
                >
                  <NavLink
                    to={"/"}
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    Logout
                  </NavLink>
                </Button>
              </>
            ) : (
              <>
                {" "}
                <Button color="inherit">
                  <NavLink
                    to={"/login"}
                    style={{ color: "#00BBFE", textDecoration: "none" }}
                  >
                    Login
                  </NavLink>
                </Button>
                <Button color="inherit">
                  <NavLink
                    to={"/register"}
                    style={{ color: "#00BBFE", textDecoration: "none" }}
                  >
                    Register
                  </NavLink>
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default NavigationBar;
