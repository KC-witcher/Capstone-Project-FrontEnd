import "../App.css";
import React, { useState } from "react";
import Nav from "./Nav";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import axios from "axios";

let id = localStorage.getItem("UserID");

function EditInfo() {
  const [fName, setFirstName] = useState("");
  const [lName, setLastName] = useState("");

  const editInfo = () => {
    axios
      .put(`http://localhost:3002/api/update/${id}`, {
        fname: fName,
        lname: lName,
      })
      .then((response) => {
        console.log(response);
      });
  };

  const linkDisabler = (fName === "" || lName === "")
    ? { pointerEvents: "none" }
    : { pointerEvents: "" };

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
          <h1 className="center">View My Projects</h1>
          <br />
        </Box>
        <Box>
          <h2>Please Enter your First and Last Name</h2>
          <br />
          <Stack sx={{ maxWidth: 350 }} spacing={3}>
            <TextField
              id="fName"
              label="First Name"
              type="text"
              placeholder="Enter new First Name"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              id="lName"
              label="Last Name"
              type="text"
              placeholder="Enter new Last Name"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </Stack>
          <Link to={`/home/${id}`} style={{ textDecoration: "none", ...linkDisabler}}>
            <Button
              sx={{ mt: 3 }}
              variant="contained"
              size="large"
              disabled={fName === "" || lName === ""}
              onClick={editInfo}
            >
              Submit
            </Button>
          </Link>
        </Box>
      </Stack>
    </Stack>
  );
}

export default EditInfo;
