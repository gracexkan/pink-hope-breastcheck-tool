import { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";

import Calendar from "./pages/Calendar";
import SelfCheck from "./pages/SelfCheck";
import Resources from "./pages/Resources";
import Profile from "./pages/Profile";
import Faqs from "./pages/Faqs";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import axios from "axios";
import Notification from "./components/notification/Notification";
import Notifications from "./components/notification/Notifications";

function App() {
  return (
    <Router>
      <div style={{ overflow: "hidden" }}>
        <Header />
        <div className="App">
          <Notification />
          <Routes>
            <Route exact path="/" element={<Calendar />}></Route>
            <Route exact path="/self-check" element={<SelfCheck />}></Route>
            <Route exact path="/resources" element={<Resources />}></Route>
            <Route exact path="/resources/faqs" element={<Faqs />}></Route>
            <Route exact path="/profile" element={<Profile />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
