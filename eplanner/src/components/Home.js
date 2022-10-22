import '../App.css';
import Nav from './Nav';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function Home() {
  return (
    <Stack direction="row" spacing={3}>
      <Nav></Nav>
      <Stack spacing={2} sx= {{ width: "100%", pr: 3}}>
        <Box sx={{ pt: 3, borderBottom: 2, borderColor: "lightgray", ml: -3, mr: -3, pl: 3, pr: 3}}> 
          <h1 className="center">ePlanner Home Page</h1>
          <br/>
        </Box>
        <Box>
          <h2>Welcome Back, Name</h2>
        </Box>
        <Button sx={{ p: 2 }} variant="contained">View My Projects</Button>
        <Button sx={{ p: 2 }} variant="contained">Create New Project</Button>
        <Button sx={{ p: 2 }} variant="contained">Edit User Information</Button>
      </Stack>
    </Stack>
  );
}

export default Home;
