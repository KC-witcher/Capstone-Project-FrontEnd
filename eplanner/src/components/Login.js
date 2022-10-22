import "../App.css";
import Button from "@mui/material/Button";
import React from "react";
import Stack from "@mui/material/Stack";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";

function Login() {
  return (
    <Stack sx={{ p: 3, maxWidth: 350 }} spacing={3}>
      <item>
        <h1>Login to ePlanner</h1>
      </item>
      <item>
        <TextField id="Email" label="Email Address" type="email" placeholder="Enter your Email Address" fullWidth />
      </item>
      <item>
        <TextField id="Password" label="Password" type="password" placeholder="Enter your Password" fullWidth />
      </item>
      <item>
        <Link to="/home" style={{ textDecoration: "none" }}>
          <Button variant="contained">Submit</Button>
        </Link>
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <Button sx={{ ml: 3 }} variant="outlined">Sign Up</Button>
        </Link>
      </item>
    </Stack>
  );
}

export default Login;
