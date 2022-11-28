import axios from "axios";
import "../App.css";
import Button from "@mui/material/Button";
import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [userID, setUserID] = useState(-1);

  axios.defaults.withCredentials = true;

  const login = () => {
    axios
      .post("http://localhost:3002/api/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        // console.log(response);
        if (response.data.message) {
          setLoginStatus(response.data.message);
        } else {
          setLoginStatus(response.data[0].EMAIL_USER);
          setUserID(response.data[0].ID_USER);
        }
      });
  };

  //whenever we refresh the page and a user is logged, we are going to display them
  useEffect(() => {
    axios.get("http://localhost:3002/api/login").then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].email);
      }
    });
  }, []);

  return (
    <Stack sx={{ p: 3, maxWidth: 350 }} spacing={3}>
      <item>
        <h1>Login to ePlanner</h1>
      </item>
      <item>
        <TextField
          id="Email"
          label="Email Address"
          type="email"
          placeholder="Enter your Email Address"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          fullWidth
        />
      </item>
      <item>
        <TextField
          id="Password"
          label="Password"
          type="password"
          placeholder="Enter your Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          fullWidth
        />
      </item>
      <item>
        <Link style={{ textDecoration: "none" }}>
          <Button variant="contained" onClick={login}>
            Submit
          </Button>
        </Link>
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <Button sx={{ ml: 3 }} variant="outlined">
            Sign Up
          </Button>
        </Link>
        <Link to="/home" style={{ textDecoration: "none" }}>
          <Button sx={{ ml: 0.6 }} variant="outlined">
            HomePage (Testing)
          </Button>
        </Link>
      </item>
      <h1>Hello! You're logged in with: {loginStatus}</h1>
      <h1>User ID is {userID}</h1>
    </Stack>
  );
}

export default Login;
