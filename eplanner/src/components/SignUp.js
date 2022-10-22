import "../App.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <Stack sx={{ p: 3, maxWidth: 350 }} spacing={3}>
      <item>
        <h1>Sign Up for ePlanner</h1>
      </item>
      <item>
        <TextField id="Email" label="Email Address" type="email" placeholder="Enter your Email Address" fullWidth />
      </item>
      <item>
        <TextField id="Password" label="Password" type="password" placeholder="Enter a Password" fullWidth />
      </item>
      <item>
        <TextField id="ConfirmPassword" label="Confirm Password" type="password" placeholder="Re-Enter a Password" fullWidth />
      </item>
      <item>
        <TextField id="fName" label="First Name" type="text" placeholder="Enter your First Name" fullWidth />
      </item>
      <item>
        <TextField id="lName" label="Last Name" type="text" placeholder="Enter your Last Name" fullWidth />
      </item>
      <item>
        <Button variant="contained">Submit</Button>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button sx={{ ml: 3 }} variant="outlined">Return to Login</Button>
        </Link>
      </item>
    </Stack>
  );
}

export default SignUp;
