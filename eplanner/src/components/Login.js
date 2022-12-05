import axios from "axios";
import "../App.css";
import Button from "@mui/material/Button";
import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";

// Declare userID to be used elsewhere in application.
// let id = -1;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [userID, setUserID] = useState(-1);

  axios.defaults.withCredentials = true;

  const login = async (e) => {
    console.log("log in console", userID);
    // e.preventDefault();
    await axios
      .post("http://20.51.216.155:3002/api/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        if (response.data.message) {
          setLoginStatus(response.data.message);
        } else {
          setLoginStatus(response.data[0].EMAIL_USER);
          setUserID(response.data[0].ID_USER);

          // Set the value of the userID after response is received.
          // setUserID( response.data[0].ID_USER);

          // Store the value of the userID. "UserID" is the key used to retreive this value.
          localStorage.setItem("UserID", userID);
        }
      });
  };

  //whenever we refresh the page and a user is logged, we are going to display them
  useEffect(() => {
    axios.get("http://20.51.216.155:3002/api/login").then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].email);
      }
    });
  }, []);

  // const flushLocalStorage = () => console.log("function hit");
  return (
    <Stack className="login-container" sx={{ p: 3, maxWidth: 350 }} spacing={3}>
      <item>
        <h1 className="login-header">ePlanner</h1>
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
          onLoad={localStorage.clear()}
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
          onKeyUp={login}
          fullWidth
        />
      </item>
      <item>
        <Link
          // to={setTimeout(() => `/home/${id}`, 200)}
          to={`/home/${userID}`}
          style={{ textDecoration: "none" }}
        >
          <Button variant="contained" onClick={login}>
            Login
          </Button>
        </Link>
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <Button sx={{ ml: 3 }} variant="outlined">
            Sign Up
          </Button>
        </Link>
      </item>
    </Stack>
  );
}

export default Login;
