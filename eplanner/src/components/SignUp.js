import "../App.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { TextField } from "@mui/material";

function SignUp() {
  return (
    <Stack sx={{ p: 1, maxWidth: 350 }} spacing={3}>
      <item>
        <h1>Sign Up for ePlanner</h1>
      </item>
      <item>
        <TextField id="Email" label="Email Address" type="email" fullWidth />
      </item>
      <item>
        <TextField id="Password" label="Password" type="password" fullWidth />
      </item>
      <item>
        <TextField
          id="ConfirmPassword"
          label="Confirm Password"
          type="password"
          fullWidth
        />
      </item>
      <item>
        <TextField id="fName" label="First Name" type="text" fullWidth />
      </item>
      <item>
        <TextField id="lName" label="Last Name" type="text" fullWidth />
      </item>
      <item>
        <Button variant="contained">Submit</Button>
      </item>
    </Stack>
  );
}

export default SignUp;
