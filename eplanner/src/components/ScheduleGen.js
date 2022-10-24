import '../App.css';
import Nav from './Nav';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function ScheduleGen() {
  
  //Scroll to the top of the page after rendering
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  //Array of objects
  //Each project option is an object consisting of days, hours, and project timeline
  const projects = 
  [
    {
    days: 'Monday, Wednesday, Friday',
    hours: '6 pm - 8 pm',
    projectTimeline: '12 Week Project Timeline'
    },

    {
    days: 'Tuesday',
    hours: '3 pm - 9 pm',
    projectTimeline: '12 Week Project Timeline'
    },

    {
      days: 'Tuesday, Thursday',
      hours: '3 pm - 6 pm',
      projectTimeline: '12 Week Project Timeline'
      }
  ];
  
  //Controls for the dialog that will pop up after selecting a schedule option
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack direction="row" spacing={3} sx={{ height: "100vh" }}>
            <Nav></Nav>
            <Stack spacing={2} sx={{ width: "100%", pr: 3 }}>
                <Box sx={{ pt: 3, borderBottom: 2, borderColor: "lightgray", ml: -3, mr: -3, pl: 3, pr: 3 }}>
                    <h1 className="center">Create New Project</h1>
                    <br />
                </Box>
                <Box>
                    <h2>Select a schedule option that works for you:</h2>
                    <br/>
                    <Stack spacing={2}>
                    {projects.map(project => (
                        <span>
                            <Button variant="outlined" size="large" style={{ width: "50%" }} onClick={handleClickOpen}>
                                {project.days}
                                <br />
                                {project.hours}
                                <br />
                                {project.projectTimeline}
                            </Button>
                        </span>
                    ))}
                            <Dialog open={open}>
                            <DialogTitle>Congratulations!</DialogTitle>
                            <DialogContent>
                              <DialogContentText>
                                You have been sent an email requesting to add this project to your calendear:
                              </DialogContentText>
                              {projects[0].days}
                              <br />
                              {projects[0].hours}
                              <br />
                              {projects[0].projectTimeline}
                            </DialogContent>
                            <DialogActions>
                            <Link to="/home" style={{ textDecoration: "none" }}>
                              <Button onClick={handleClose}>Return to Home Page</Button>
                            </Link>
                            </DialogActions>
                          </Dialog>
                </Stack>
                </Box>
            </Stack>
        </Stack>
  );
}

export default ScheduleGen;
