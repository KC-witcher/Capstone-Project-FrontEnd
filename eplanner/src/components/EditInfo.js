import '../App.css';
import Nav from './Nav';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";

function EditInfo() {
    return (
        <Stack direction="row" spacing={3} sx={{ height: "100vh" }}>
            <Nav></Nav>
            <Stack spacing={2} sx={{ width: "100%", pr: 3 }}>
                <Box sx={{ pt: 3, borderBottom: 2, borderColor: "lightgray", ml: -3, mr: -3, pl: 3, pr: 3 }}>
                    <h1 className="center">View My Projects</h1>
                    <br />
                </Box>
                <Box>
                    <h2>Enter the Information You Would Like to Change</h2>
                    <br/>
                    <Stack sx={{ maxWidth: 350 }} spacing={3}>
                        <TextField id="fName" label="First Name" type="text" placeholder="Enter new First Name" fullWidth />
                        <TextField id="lName" label="Last Name" type="text" placeholder="Enter new Last Name" fullWidth />
                    </Stack>
                    <Button sx={{ mt: 3 }} variant="contained" size="large">Submit</Button>
                </Box>
            </Stack>
        </Stack>
    );
}

export default EditInfo;
