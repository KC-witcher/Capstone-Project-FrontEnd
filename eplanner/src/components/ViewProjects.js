import "../App.css";
import Nav from "./Nav";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

let userID = localStorage.getItem("UserID");

function ViewProjects() {
  const [listOfProjects, setListOfProjects] = useState([]);

  useEffect(() => {
    axios
      .get(`http://20.51.216.155:3002/api/getProject/${userID}`)
      .then((response) => {
        setListOfProjects(response.data.result);
        // console.log(response.data.result);
      });
  }, []);

  console.log("list of projects: ", listOfProjects);

  const deleteProject = (event) => {
    // console.log(event.currentTarget.value);
    const projectID = event.currentTarget.value;
    axios
      //maybe `/api/deleteProject/${id}`
      .post(`http://20.51.216.155:3002/api/deleteProject/${projectID}`)
      .then((response) => {
        console.log("YOU GOT DELETED!", response);
        window.location.reload();
      });
  };

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
          <h2>Your Projects</h2>
        </Box>
        <Stack spacing={2}>
          {listOfProjects.map((project) => (
            <span>
              <Button variant="outlined" size="large" style={{ width: "50%" }}>
                {project.TYPE_PROJECT}
              </Button>
              <IconButton
                aria-label="delete"
                value={project.ID_PROJECT}
                onClick={deleteProject}
              >
                <DeleteIcon color="error" />
              </IconButton>
            </span>
          ))}
          <p style={{ color: "gray" }}>End of List</p>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default ViewProjects;
