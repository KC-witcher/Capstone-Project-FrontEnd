import "../App.css";
import Button from "@mui/material/Button";
import React, { useState } from 'react';
import Stack from "@mui/material/Stack";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import Axios from "axios";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState ('');
  const [loginStatus, setLoginStatus] = useState('');

  const login = () => {
    Axios.post("http://localhost:3002/api/login", {
       email: email,
       password: password,
    }).then((response) => {
       if (!response.data.message) {
          setLoginStatus(response.data.message);
       } else {
          setLoginStatus (response.data[0].message);
       }
    });
    };

  return (
    <Stack sx={{ p: 3, maxWidth: 350 }} spacing={3}>
      <item>
        <h1>Login to ePlanner</h1>
      </item>
      <item>
        <TextField id="Email" label="Email Address" type="email" placeholder="Enter your Email Address" onChange={(e) => {
              setEmail(e.target.value);
           }} fullWidth />
      </item>
      <item>
        <TextField id="Password" label="Password" type="password" placeholder="Enter your Password" onChange={(e) => {
              setPassword(e.target.value);
           }} fullWidth />
      </item>
      <item>
        <Link to="/home" style={{ textDecoration: "none" }}>
          <Button variant="contained" onClick={login}>Submit</Button>
        </Link>
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <Button sx={{ ml: 3 }} variant="outlined">Sign Up</Button>
        </Link>
        <h1>{loginStatus}</h1>
      </item>
    </Stack>
  );
}

export default Login;
