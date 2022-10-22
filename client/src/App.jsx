import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { useEffect } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

import Calendar from './pages/Calendar';
import SelfCheck from './pages/SelfCheck';
import Resources from './pages/Resources';
import Profile from './pages/Profile';
import Header from './components/Header';
import Footer from './components/Footer';
import axios from "axios";

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
      <Header />
        <Routes>
          <Route exact path="/" element={<Calendar />}></Route>
          <Route exact path="/self-check" element={<SelfCheck />}></Route>
          <Route exact path="/resources" element={<Resources />}></Route>
          <Route exact path="/profile" element={<Profile />}></Route>
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
