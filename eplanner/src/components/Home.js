import '../App.css';
import Nav from './Nav';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Stack direction="row" spacing={3} sx={{ height: "100vh" }}>
      <Nav></Nav>
      <Stack spacing={2} sx={{ width: "100%", pr: 3 }}>
        <Box sx={{ pt: 3, borderBottom: 2, borderColor: "lightgray", ml: -3, mr: -3, pl: 3, pr: 3 }}>
          <h1 className="center">ePlanner Home Page</h1>
          <br />
        </Box>
        <Box>
          <h2>Welcome Back, Name</h2>
        </Box>
        <Link to="/view" style={{ textDecoration: "none"}}>
          <Button color="success" sx={{ p: 2, width: "100%" }} variant="contained">View My Projects</Button>
        </Link>
        <Link to="/create" style={{ textDecoration: "none"}}>
          <Button color="success" sx={{ p: 2, width: "100%" }} variant="contained">Create New Project</Button>
        </Link>
        <Link to="/edit" style={{ textDecoration: "none"}}>
          <Button color="success" sx={{ p: 2, width: "100%" }} variant="contained">Edit User Information</Button>
        </Link>
      </Stack>
    </Stack>
  );
}

export default Home;
