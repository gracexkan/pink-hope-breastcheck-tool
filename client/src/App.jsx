import { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

import Calendar from './pages/Calendar';
import SelfCheck from './pages/SelfCheck';
import Resources from './pages/Resources';
import Profile from './pages/Profile';
import Faqs from './pages/Faqs';
import Header from './layout/Header';
import Footer from './layout/Footer';
import axios from "axios";
import Notification from "./components/notification/Notification"
import Notifications from "./pages/Notifications"

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
        <Notification />
        <Routes>
          <Route exact path="/" element={<Calendar />}></Route>
          <Route exact path="/self-check" element={<SelfCheck />}></Route>
          <Route exact path="/resources" element={<Resources />}></Route>
          <Route exact path="/resources/faqs" element={<Faqs />}></Route>
          <Route exact path="/profile" element={<Profile />}></Route>
          <Route exact path="/notifications" element={<Notifications />}></Route>
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
