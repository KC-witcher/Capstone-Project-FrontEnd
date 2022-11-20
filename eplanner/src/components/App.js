import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
import CreateProject from "./CreateProject";
import EditInfo from "./EditInfo";
import View from "./ViewProjects";
import ScheduleGen from "./ScheduleGen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Deleted the Schedule Confirm component since I used a dialog (pop up) instead.

// Testing deployment with Heroku
const express = require("express");

const app = express();

app.use(express.static("public"));

const port = 3000 || process.env.PORT;

app.get("/", (req, res) => {
  res.render(index.html);
});

app.listen(port, () => {
  console.log(`Server is up and running on PORT ${port}`);
});

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