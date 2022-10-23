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
import { TextField } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { fontWeight } from '@mui/system';


// Provided by Juna
const projectTypes =
    ['Research Paper', 'Argument Paper', 'Exploratory Paper', 'Reflective Paper', 'Persuasive Essay', 'Analytical Paper', 'Argumentative Essay',
        'Research Report', 'Executive/Business Report', 'Summary Report', 'Scientific Report', 'Technical Report', 'Evaluation Report',
        'Thesis', 'Literature Review', 'Dissertation',
        'Case Study',
        'Term Project'];


function CreateProject() {

    /* Responsible for setting project type. */
    const [projectType, setProjectType] = React.useState('');
    const handleProjectUpdate = (event) => {
        setProjectType(event.target.value);
    };

    /* Measured in pages */
    var projectLength = 0;
    /* Measured in hours */
    var projectTime = 0;
    /* Used to restrict minimum time frame for long projects. Measured in weeks.*/
    var minCompletion = 0;

    /* console.log(projectType); */

    /* Responsible for setting priority level */
    const [priority, setPriority] = React.useState('');
    const handlePriorityUpdate = (event) => {
        setPriority(event.target.value);
    };

    /* Responsible for setting budget */
    const [budget, setBudget] = React.useState('');
    const handleBudgetUpdate = (event) => {
        setBudget(event.target.value);
    };

    /* Responsible for setting value level */
    const [value, setValue] = React.useState('');
    const handleValueUpdate = (event) => {
        setValue(event.target.value);
    };

    /* Responsible for setting the desired quality */
    const [quality, setQuality] = React.useState('');
    const handleQualityUpdate = (event) => {
        setQuality(event.target.value);
    };

    /* Responsible for setting the number of people on the project */
    const [numPeople, setNumPeople] = React.useState('');
    const handleNumPeopleUpdate = (event) => {
        setNumPeople(event.target.value);
    };

    /* Responsible for setting the start date of the project */
    const [startDate, setStartDate] = React.useState('');
    const handleStartDateUpdate = (event) => {
        setStartDate(event.target.value);
    };

    /* Responsible for setting the end date of the project */
    const [endDate, setEndDate] = React.useState('');
    const handleEndDateUpdate = (event) => {
        setEndDate(event.target.value);
    };

    /* Responsible for setting the project goal */
    const [goal, setGoal] = React.useState('');
    const handleGoalUpdate = (event) => {
        setGoal(event.target.value);
    };

    /* Responsible for setting when the user works best [chunks, space] */
    const [whenBest, setWhenBest] = React.useState('');
    const handleWhenBestUpdate = (event) => {
        setWhenBest(event.target.value);
    };

    /* Responsible for setting the time of day the user works best [morning, afternoon, evening, night] */
    const [inBest, setInBest] = React.useState('');
    const handleInBestUpdate = (event) => {
        setInBest(event.target.value);
    };

    /* Responsible for setting which days the user works best [weekdays, weekends, both] */
    const [onBest, setOnBest] = React.useState('');
    const handleOnBestUpdate = (event) => {
        setOnBest(event.target.value);
    };

    /* Responsible for setting the motivation level of the user */
    const [motivation, setMotivation] = React.useState('');
    const handleMotivationUpdate = (event) => {
        setMotivation(event.target.value);
    };

    console.log(onBest);

    /* Once we have the project type, we fill in extra information based on what Juna provided.*/
    /* Conditional statements to assign value to projectLength and projectTime, plus minCompletion if applicable.*/
    if (projectType === 'Research Paper' || projectType === 'Argument Paper' || projectType === 'Exploratory Paper' || projectType === 'Reflective Paper'
        || projectType === 'Persuasive Essay' || projectType === 'Analytical Paper' || projectType === 'Argumentative Essay') {
        projectLength = 10;
        projectTime = 20;
    } else if (projectType === 'Research Report' || projectType === 'Executive/Business Report' || projectType === 'Summary Report'
        || projectType === 'Scientific Report' || projectType === 'Technical Report' || projectType === 'Evaluation Report') {
        projectLength = 5;
        projectTime = 10;
    } else if (projectType === 'Thesis') {
        projectLength = 50;
        projectTime = 100;
        minCompletion = 12;
    } else if (projectType === 'Literature Review') {
        projectLength = 50;
        projectTime = 200;
        minCompletion = 12;
    } else if (projectType === 'Dissertation') {
        projectLength = 200;
        projectTime = 2000;
        minCompletion = 104;
    } else if (projectType === 'Case Study') {
        projectLength = 5;
        projectTime = 10;
    } else if (projectType === 'Term Project') {
        projectLength = 50;
        projectTime = 200;
        minCompletion = 12;
    } else {
        projectLength = -1;
        projectTime = -1;
    }

    /* console.log(projectLength); */
    /* console.log(projectTime); */

    /* Once we have Start Date and End Date, we can determine the number of weeks the project will be. */

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
                <Box sx={{ pb: 3, borderBottom: 1, borderColor: "lightgray" }}>
                    <FormControl fullWidth>
                        <InputLabel id="project-type-label">Project Type</InputLabel>
                        <Select
                            labelId="project-type"
                            id="project-type"
                            value={projectType}
                            label="Project Type"
                            onChange={handleProjectUpdate}
                            placeholder="Select a Project Type"
                        >
                            {projectTypes.map(project => (
                                <MenuItem value={project}>
                                    {project}
                                </MenuItem>
                            ))}
                        </Select>
                        <br />
                    </FormControl>
                </Box>
                <Box>
                    <h2>Select Project Information</h2>
                </Box>
                <Box sx={{ pb: 3, borderBottom: 1, borderColor: "lightgray", maxWidth: 350 }}>
                    <FormControl fullWidth>
                        <InputLabel id="priority-label">Priority Level</InputLabel>
                        <Select
                            labelId="priority"
                            id="priority"
                            value={priority}
                            label="Priority Level"
                            onChange={handlePriorityUpdate}
                            placeholder="Enter this Project's Priority Level"
                        >
                            <MenuItem value="High">
                                High
                            </MenuItem>
                            <MenuItem value="Medium">
                                Medium
                            </MenuItem>
                            <MenuItem value="Low">
                                Low
                            </MenuItem>
                        </Select>
                        <br />
                    </FormControl>
                    <TextField onChange={handleBudgetUpdate} value={budget} id="budget" label="Budget" placeholder="Enter the Budget for this Project (Optional)" fullWidth />
                    <br />
                    <br />
                    <FormControl fullWidth>
                        <InputLabel id="value-label">Value / Impact</InputLabel>
                        <Select
                            labelId="value"
                            id="value"
                            value={value}
                            label="Value / Impact"
                            onChange={handleValueUpdate}
                            placeholder="Enter this Project's Priority Level"
                        >
                            <MenuItem value="High">
                                High
                            </MenuItem>
                            <MenuItem value="Medium">
                                Medium
                            </MenuItem>
                            <MenuItem value="Low">
                                Low
                            </MenuItem>
                        </Select>
                        <br />
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel id="quality-label">Quality of Work</InputLabel>
                        <Select
                            labelId="quality"
                            id="quality"
                            value={quality}
                            label="Quality of Work"
                            onChange={handleQualityUpdate}
                            placeholder="Enter your Desiried Quality of Work on this Project"
                        >
                            <MenuItem value="High">
                                High
                            </MenuItem>
                            <MenuItem value="Medium">
                                Medium
                            </MenuItem>
                            <MenuItem value="Low">
                                Low
                            </MenuItem>
                        </Select>
                        <br />
                    </FormControl>
                    <TextField onChange={handleNumPeopleUpdate} value={numPeople} id="numPeople" label="Number of People" placeholder="Enter the Number of People on this Project" fullWidth />
                    <br />
                </Box>
                <Box>
                    <h2>Select Project Dates</h2>
                </Box>
                <Box sx={{ pb: 3, borderBottom: 1, borderColor: "lightgray", maxWidth: 350 }}>
                    <TextField InputLabelProps={{ shrink: true }} onChange={handleStartDateUpdate} value={startDate} id="startDate" label="Starting Date" type="date" placeholder="Enter the Start Date of the Project" fullWidth />
                    <br />
                    <br />
                    <TextField InputLabelProps={{ shrink: true }} onChange={handleEndDateUpdate} value={endDate} id="endDate" label="Ending Date" type="date" placeholder="Enter the End Date of the Project" fullWidth />
                    <br />
                    <br />
                    <TextField multiline rows={10} onChange={handleGoalUpdate} value={goal} id="goal" label="Project Goal" type="text" placeholder="Enter your Goal for this Project (Optional)" fullWidth />
                </Box>
                <Box>
                    <h2>Select Work Style Information</h2>
                </Box>
                <Box sx={{ maxWidth: 350 }}>
                    <FormControl sx={{ borderBottom: 1, borderColor: "lightgray" }} fullWidth>
                        <FormLabel sx={{ color: "black", fontWeight: "bold" }} id="whenBest">I Work Best When...</FormLabel>
                        <RadioGroup
                            aria-labelledby="whenBest-label"
                            defaultValue="chunks"
                            name="whenBest-group"
                            value={whenBest}
                            onChange={handleWhenBestUpdate}
                        >
                            <FormControlLabel value="chunks" control={<Radio />} label="I do big chunks of work at a time." />
                            <FormControlLabel value="space" control={<Radio />} label="I space the work out." />
                        </RadioGroup>
                        <br />
                    </FormControl>
                    <FormControl sx={{ mt: 3, borderBottom: 1, borderColor: "lightgray" }} fullWidth>
                        <FormLabel sx={{ color: "black", fontWeight: "bold" }} id="inBest">I Do My Best Work In...</FormLabel>
                        <RadioGroup
                            aria-labelledby="inBest-label"
                            defaultValue="morning"
                            name="inBest-group"
                            value={inBest}
                            onChange={handleInBestUpdate}
                        >
                            <FormControlLabel value="morning" control={<Radio />} label="The Morning." />
                            <FormControlLabel value="afternoon" control={<Radio />} label="The Afternoon." />
                            <FormControlLabel value="evening" control={<Radio />} label="The Evening." />
                            <FormControlLabel value="night" control={<Radio />} label="The Night." />
                        </RadioGroup>
                        <br />
                    </FormControl>
                    <FormControl sx={{ mt: 3, borderBottom: 1, borderColor: "lightgray" }} fullWidth>
                        <FormLabel sx={{ color: "black", fontWeight: "bold" }} id="onBest">I Prefer Working On...</FormLabel>
                        <RadioGroup
                            aria-labelledby="onBest-label"
                            defaultValue="weekdays"
                            name="onBest-group"
                            value={onBest}
                            onChange={handleOnBestUpdate}
                        >
                            <FormControlLabel value="weekdays" control={<Radio />} label="Weekdays Only." />
                            <FormControlLabel value="weekends" control={<Radio />} label="Weekends Only." />
                            <FormControlLabel value="both" control={<Radio />} label="Both Weekdays and Weekends." />
                        </RadioGroup>
                        <br />
                    </FormControl>
                </Box>
                <Box>
                    <h2>Select Your Motivation Level for This Project</h2>
                </Box>
                <Box sx={{ pb: 3, borderBottom: 1, borderColor: "lightgray" }}>
                    <FormControl fullWidth>
                        <InputLabel id="motivation-level-label">Motivation</InputLabel>
                        <Select
                            labelId="motivation-level"
                            id="motivation-level"
                            value={motivation}
                            label="Project Type"
                            onChange={handleMotivationUpdate}
                            placeholder="Select a Motivation Level"
                        >
                            <MenuItem value="High">
                                High Motivation / Intrinsically Motivated
                            </MenuItem>
                            <MenuItem value="Medium">
                                Medium Motivation / Extrinsically Motivated
                            </MenuItem>
                            <MenuItem value="Low">
                                Low Motivation / Don't Want to Do It
                            </MenuItem>
                        </Select>
                        <br />
                    </FormControl>
                </Box>
            </Stack>
        </Stack >
    );
}
export default CreateProject;
