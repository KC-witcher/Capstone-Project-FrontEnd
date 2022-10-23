import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
import CreateProject from "./CreateProject";
import EditInfo from "./EditInfo";
import View from "./ViewProjects";
import ScheduleGen from "./ScheduleGen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Deleted the Schedule Confirm component since I used a dialog (pop up) instead.

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Login/>}/>
                <Route exact path="/signup" element={<SignUp/>}/>
                <Route exact path="/home" element={<Home/>}/>
                <Route exact path="/view" element={<View/>}/>
                <Route exact path="/create" element={<CreateProject/>}/>
                <Route exact path="/edit" element={<EditInfo/>}/>
                <Route exact path="/schedule" element={<ScheduleGen/>}/>
            </Routes>
        </Router>
    )
}

export default App;