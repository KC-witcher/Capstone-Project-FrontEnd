import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";

//After signing up and clicking submit, do we want to go directly to the home page?
//Or do we want to ask the user to sign in using their new credentials (go to sign in page)?
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [fName, setFirstName] = useState("");
  const [lName, setLastName] = useState("");

  const signUp = () => {
    axios
      .post("http://localhost:3002/api/create", {
        email: email,
        password: password,
        fname: fName,
        lname: lName,
      })
      .then((response) => {
        console.log(response);
      });
  };

  const passwordError = password !== passwordAgain;

  return (
    <Stack sx={{ p: 3, maxWidth: 350 }} spacing={3}>
      <item>
        <h1>Sign Up for ePlanner</h1>
      </item>
      {/* We can check if we have a valid email address before submitting using regualar expressions or some module we can install */}
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
          placeholder="Enter a Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          fullWidth
        />
      </item>
      <item>
        <TextField
          id="ConfirmPassword"
          label="Confirm Password"
          type="password"
          placeholder="Re-Enter a Password"
          onChange={(e) => {
            setPasswordAgain(e.target.value);
          }}
          error={passwordError}
          helperText={
            passwordError
              ? "Passwords do not match, please confirm your password!"
              : ""
          }
          fullWidth
        />
      </item>
      <item>
        <TextField
          id="fName"
          label="First Name"
          type="text"
          placeholder="Enter your First Name"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          fullWidth
        />
      </item>
      <item>
        <TextField
          id="lName"
          label="Last Name"
          type="text"
          placeholder="Enter your Last Name"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          fullWidth
        />
      </item>
      <item>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            disabled={
              email === "" ||
              password === "" ||
              password !== passwordAgain ||
              fName === "" ||
              lName === ""
            }
            onClick={signUp}
          >
            Submit
          </Button>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button sx={{ ml: 3 }} variant="outlined">
            Return to Login
          </Button>
        </Link>
      </item>
    </Stack>
  );
}

export default SignUp;
