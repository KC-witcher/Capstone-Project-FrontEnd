import React, { useState, useEffect } from "react";
import "../App.css";
import Nav from "./Nav";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

let id = localStorage.getItem("UserID");

function Home() {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  // let { id } = useParams();
  console.log("storage id: ", id);
  axios.get(`http://localhost:3002/api/getNames/${id}`).then((response) => {
    console.log(response);
    if (response.data.success) {
      console.log(response.data);
      const { FNAME_USER, LNAME_USER } = response.data.result[0];
      setFName(FNAME_USER);
      setLName(LNAME_USER);
    } else {
      console.log("Error Occurred");
    }
  });

  return (
    <Stack direction="row" spacing={3} sx={{ height: "100vh" }}>
      <Nav></Nav>
      <Stack spacing={2} sx={{ width: "100%", pr: 3 }}>
        <Box
          sx={{
            pt: 3,
            borderBottom: 2,
            borderColor: "lightgray",
            ml: -3,
            mr: -3,
            pl: 3,
            pr: 3,
          }}
        >
          <h1 className="center">ePlanner Home Page</h1>
          <br />
        </Box>
        <Box>
          <h2 className="header-message">
            Welcome, {fname} {lname}
          </h2>
        </Box>
        <Link to={`/view/${id}`} style={{ textDecoration: "none" }}>
          <Button sx={{ p: 2, width: "100%" }} variant="contained">
            View My Projects
          </Button>
        </Link>
        <Link to={`/create/${id}`} style={{ textDecoration: "none" }}>
          <Button sx={{ p: 2, width: "100%" }} variant="contained">
            Create New Project
          </Button>
        </Link>
        <Link to={`/edit/${id}`} style={{ textDecoration: "none" }}>
          <Button sx={{ p: 2, width: "100%" }} variant="contained">
            Edit User Information
          </Button>
        </Link>
      </Stack>
    </Stack>
  );
}

export default Home;
