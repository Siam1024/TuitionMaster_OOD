import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { useState } from "react";
import AllPost from "./AllPost";
import Feedback from "./Feedback";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <>
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    </>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const AdminDashboard = () => {
  const retrievedUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(retrievedUser);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
        Admin Dashboard{" "}
      </Typography>
      <Container maxWidth="xl">
        <>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                variant="scrollable"
                allowScrollButtonsMobile
                onChange={handleChange}
                aria-label="basic tabs example"
                sx={{
                  "& .MuiTabs-indicator": {
                    backgroundColor: "var(--primaryColor)",
                  },
                }}
              >
                <Tab
                  label="Handle Post"
                  {...a11yProps(0)}
                  sx={{
                    color: "black !important",
                    backgroundColor: value === 0 ? "#2B99FF" : "",
                    fontWeight: value === 0 ? "bold" : "normal",
                    fontSize: "16px",
                  }}
                />
                <Tab
                  label="Show All Feedback"
                  {...a11yProps(1)}
                  //   style={{ color: "black" }}
                  sx={{
                    color: "black !important",
                    backgroundColor: value === 1 ? "#2B99FF" : "",
                    fontWeight: value === 1 ? "bold" : "normal",
                    fontSize: "16px", //
                  }}
                />
                {/* <Tab label="Blogs" {...a11yProps(2)} /> */}
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <AllPost />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <Feedback />
            </CustomTabPanel>
          </Box>
        </>
      </Container>
    </div>
  );
};

export default AdminDashboard;
