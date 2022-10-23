import React from "react";
import Notification from "../components/notification/Notification";

const Header = () => {
  return (
    <header className="header" position="sticky">
      <p>Team Pink</p>
      <Notification />
    </header>
  );
};
export default Header;
