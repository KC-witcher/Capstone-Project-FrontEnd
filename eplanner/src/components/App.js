import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
import CreateProject from "./CreateProject";
import EditInfo from "./EditInfo";
import ViewProjects from "./ViewProjects";
import ScheduleGen from "./ScheduleGen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Deleted the Schedule Confirm component since I used a dialog (pop up) instead.

// Get variable stored in login page from storage.
var id = localStorage.getItem("UserID");

// Check to make sure it works.
console.log(id);

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/home/:id" element={<Home />} />
        <Route exact path="/view/:id" element={<ViewProjects />} />
        <Route exact path="/create/:id" element={<CreateProject />} />
        <Route exact path="/edit" element={<EditInfo />} />
        <Route exact path="/schedule/:pid" element={<ScheduleGen />} />
      </Routes>
    </Router>
  );
}

export default App;
