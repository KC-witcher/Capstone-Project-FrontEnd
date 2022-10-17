import "../App.css";
import Button from "@mui/material/Button";
import React from "react";
import Stack from "@mui/material/Stack";
import Input from "@mui/material/Input";
import { TextField } from "@mui/material";

function Login() {
  return (
    <Stack sx={{ p: 1, maxWidth: 300 }} spacing={3}>
      <item>
        <h1>Login to ePlanner</h1>
      </item>
      <item>
        <TextField id="Email" label="Email Address" type="email" fullWidth />
      </item>
      <item>
        <TextField id="Password" label="Password" type="password" fullWidth />
      </item>
      <item>
        <Button variant="contained">Submit</Button>
      </item>
    </Stack>
  );
}

export default Login;
