import '../App.css';
import Nav from './Nav';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

// Need to read this data from the database in the future.
const projects = ['Project 1', 'Project 2', 'Project 3', 'Project 4', 'Project 5'];

function ViewProjects() {
    return (
        <Stack direction="row" spacing={3}>
            <Nav></Nav>
            <Stack spacing={2} sx={{ width: "100%", pr: 3 }}>
                <Box sx={{ pt: 3, borderBottom: 2, borderColor: "lightgray", ml: -3, mr: -3, pl: 3, pr: 3 }}>
                    <h1 className="center">View My Projects</h1>
                    <br />
                </Box>
                <Box>
                    <h2>Your Projects</h2>
                </Box>
                <Stack spacing={2}>
                    {projects.map(project => (
                        <span>
                            <Button variant="outlined" size="large" style={{ width: "50%" }}>
                                {project}
                            </Button>
                            <IconButton aria-label="delete">
                                <DeleteIcon color="error"/>
                            </IconButton>
                        </span>
                    ))}
                </Stack>
            </Stack>
        </Stack>
    );
}

export default ViewProjects;
