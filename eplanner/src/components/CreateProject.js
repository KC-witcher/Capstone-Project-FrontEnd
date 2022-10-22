import '../App.css';
import React from 'react';
import Nav from './Nav';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


// Provided by Juna
const projectTypes =
    ['Research Paper', 'Argument Paper', 'Exploratory Paper', 'Reflective Paper', 'Persuasive Essay', 'Analytical Paper', 'Argumentative Essay',
        'Research Report', 'Executive/Business Report', 'Summary Report', 'Scientific Report', 'Technical Report', 'Evaluation Report',
        'Thesis', 'Literature Review', 'Dissertation',
        'Case Study',
        'Final Term Project'];


function CreateProject() {
    const [projectType, setProjectType] = React.useState('');

    const handleChange = (event) => {
        setProjectType(event.target.value);
    };

    return (
        <Stack direction="row" spacing={3}>
            <Nav></Nav>
            <Stack spacing={2} sx={{ width: "100%", pr: 3 }}>
                <Box sx={{ pt: 3, borderBottom: 2, borderColor: "lightgray", ml: -3, mr: -3, pl: 3, pr: 3 }}>
                    <h1 className="center">Create New Project</h1>
                    <br />
                </Box>
                <Box>
                    <h2>Select Project Type</h2>
                </Box>
                <Box>
                    <FormControl fullWidth>
                        <InputLabel id="project-type-label">Project Type</InputLabel>
                        <Select
                            labelId="project-type"
                            id="project-type"
                            value={projectType}
                            label="Project Type"
                            onChange={handleChange}
                        >
                            {projectTypes.map(project => (
                                <MenuItem value={project}>
                                    {project}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
            </Stack>
        </Stack>
    );
}
export default CreateProject;
