import axios from "axios";
import { useEffect } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Calendar from "./pages/Calendar";
import Profile from "./pages/Profile";
import Resources from "./pages/Resources";
import SelfCheck from "./pages/SelfCheck";

function App() {
  useEffect(() => {
    async function fetchData() {
      axios.get("/api/hc").then((res) => console.log(res.data));
    }
    fetchData();
  }, []);

  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Calendar</Link>
          </li>
          <li>
            <Link to="/self-check">Self Check</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Calendar />}></Route>
          <Route exact path="/self-check" element={<SelfCheck />}></Route>
          <Route exact path="/resources" element={<Resources />}></Route>
          <Route exact path="/profile" element={<Profile />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
