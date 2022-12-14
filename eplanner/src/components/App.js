import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
import CreateProject from "./CreateProject";
import EditInfo from "./EditInfo";
import ViewProjects from "./ViewProjects";
import ScheduleGen from "./ScheduleGen";
import NotFound from "./NotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Deleted the Schedule Confirm component since I used a dialog (pop up) instead.

// Get variable stored in login page from storage.
let id = localStorage.getItem("UserID");

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path={`/home/${id}`} element={<Home id={id} />} />
        <Route exact path={`/view/${id}`} element={<ViewProjects />} />
        <Route exact path={`/create/${id}`} element={<CreateProject />} />
        <Route exact path={`/edit/${id}`} element={<EditInfo />} />
        <Route exact path={`/schedule/${id}`} element={<ScheduleGen />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
