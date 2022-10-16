import "../App.css";
import Button from '@mui/material/Button';

function SignUp() {
  return (
    <div>
      <h1>Sign Up for ePlanner</h1>
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
        <label>
          First Name:
          <br />
          <input type="text" placeholder="Enter Your First Name"name="fname" />
        </label>{" "}
        <br /><br />
        <label>
          Last Name:
          <br />
          <input type="text"placeholder="Enter Your Last Name" name="lname" />
        </label>{" "}
        <br /><br />
        <Button variant="contained"> Submit </Button>
      </form>
    </div>
  );
}

export default SignUp;
