// Import the react-swipe-to-delete-component
import "./swipe.css";
import SwipeToDelete from "react-swipe-to-delete-component";
import { Button } from "@mui/material";

const data = [
  { id: 1, text: "Your period is predicted to come in 3 days!", date: "5.03.2016" },
  { id: 2, text: "Please log your breast check today!", date: "1.03.2016" },
  { id: 3, text: "Your self-breast check date is now overdue.", date: "3.03.2016" },
];

const DeleteIcon = () => <>nothing</>;

const notifications = data.map((item) => (
  <SwipeToDelete key={item.id} background={DeleteIcon}>
    <a className="list-group-item">
      <p className="list-group-item-text text-sm text-gray-500">{item.text}</p>
    </a>
  </SwipeToDelete>
));

const Notifications = () => {
  return <div className="list-group">{notifications}</div>;
};

export default Notifications;
