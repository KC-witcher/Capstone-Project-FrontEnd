import "../App.css";
import Nav from "./Nav";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { options } from "./CreateProject";
import axios from "axios";

var n = 0;

let { id } = localStorage.getItem("UserID");

function ScheduleGen() {
  //Scroll to the top of the page after rendering
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //Controls for the dialog that will pop up after selecting a schedule option
  const [open, setOpen] = React.useState(false);

  const optionOneClickOpen = () => {
    n = 0;

    axios
      .post(`http://localhost:3002/api/createSchedule/${id}`, {
        accepted: n,
        schedule_string: options[n].schedule.split("\n"),
      })
      .then((response) => {
        console.log(response);
      });

    setOpen(true);
  };

  const optionTwoClickOpen = () => {
    n = 1;

    axios
      .post(`http://localhost:3002/api/createSchedule/${id}`, {
        accepted: n,
        schedule_string: options[n].schedule.split("\n"),
      })
      .then((response) => {
        console.log(response);
      });

    setOpen(true);
  };

  const optionThreeClickOpen = () => {
    n = 2;

    axios
      .post(`http://localhost:3002/api/createSchedule/${id}`, {
        accepted: n,
        schedule_string: options[n].schedule.split("\n"),
      })
      .then((response) => {
        console.log(response);
      });

    setOpen(true);
  };

  const optionFourClickOpen = () => {
    n = 3;

    axios
      .post(`http://localhost:3002/api/createSchedule/${id}`, {
        accepted: n,
        schedule_string: options[n].schedule.split("\n"),
      })
      .then((response) => {
        console.log(response);
      });

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
          <h1 className="center">Create New Project</h1>
          <br />
        </Box>
        {options.length !== 0 ? (
          <Box>
            <h2 className="center">Select a Schedule Option</h2>
            <br />
            <Stack className="center" spacing={3}>
              <Box
                className="box"
                style={{ width: "75%" }}
                sx={{
                  border: 2,
                  borderColor: "darkgrey",
                  borderRadius: 3,
                  padding: 1,
                }}
                onClick={optionOneClickOpen}
              >
                {options[0].schedule.split("\n").map((str) => (
                  <Stack>{str}</Stack>
                ))}
              </Box>
              <Box
                className="box"
                style={{ width: "75%" }}
                sx={{
                  border: 2,
                  borderColor: "darkgrey",
                  borderRadius: 3,
                  padding: 1,
                }}
                onClick={optionTwoClickOpen}
              >
                {options[1].schedule.split("\n").map((str) => (
                  <Stack>{str}</Stack>
                ))}
              </Box>
              {options[2].schedule !== "" ? (
                <Box
                  className="box"
                  style={{ width: "75%" }}
                  sx={{
                    border: 2,
                    borderColor: "darkgrey",
                    borderRadius: 3,
                    padding: 1,
                  }}
                  onClick={optionThreeClickOpen}
                >
                  {options[2].schedule.split("\n").map((str) => (
                    <Stack>{str}</Stack>
                  ))}
                </Box>
              ) : (
                <></>
              )}
              {options[3].schedule !== "" ? (
                <Box
                  className="box"
                  style={{ width: "75%" }}
                  sx={{
                    border: 2,
                    borderColor: "darkgrey",
                    borderRadius: 3,
                    padding: 1,
                  }}
                  onClick={optionFourClickOpen}
                >
                  {options[3].schedule.split("\n").map((str) => (
                    <Stack>{str}</Stack>
                  ))}
                </Box>
              ) : (
                <></>
              )}
              <Dialog open={open}>
                <DialogTitle>Congratulations!</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Your chosen schedule is...
                    {options[n].schedule.split("\n").map((str) => (
                      <Stack sx={{ fontWeight: "bold" }}>{str}</Stack>
                    ))}
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Link to="/home" style={{ textDecoration: "none" }}>
                    <Button onClick={handleClose}>Return to Home Page</Button>
                  </Link>
                </DialogActions>
              </Dialog>
            </Stack>
          </Box>
        ) : (
          <Stack sx={{ alignItems: "center" }}>
            <h2 className="center">Please generate a schedule first!</h2>
            <Link to="/create" style={{ textDecoration: "none" }}>
              <Button variant="contained">Create Project</Button>
            </Link>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
}

export default ScheduleGen;
