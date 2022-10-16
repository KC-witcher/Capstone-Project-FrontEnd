import '../App.css';
import Button from '@mui/material/Button';
import React from 'react';

function Login() {
  return (

    <div>
      <h1>Login to ePlanner</h1>
      <form>
        <label>
          Email Address:
          <br />
          <input type="email" placeholder="Enter Your Email Address" name="email" />
        </label>{" "}
        <br /><br />
        <label>
          Password:
          <br /> 
          <input type="password" placeholder="Enter Your Password" name="password" />
        </label>{" "}
        <br /><br />
      <Button variant="contained">Submit</Button>
      </form>
    </div>

  );
}

export default Login;
