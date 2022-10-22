// Import the react-swipe-to-delete-component
import "./swipe.css";
import SwipeToDelete from "react-swipe-to-delete-component";
import { Button } from '@mui/material';

const data = [
  { id: 1, text: "notif 1", date: "5.03.2016" },
  { id: 2, text: "notif 2", date: "3.03.2016" },
  { id: 3, text: "notif 3", date: "1.03.2016" }
];

const DeleteIcon = () => (
  <>
    nothing
  </>
);

const notifications = data.map((item) => (
  <SwipeToDelete key={item.id} background={DeleteIcon}>
    <a className="list-group-item">
      <p className="list-group-item-text text-sm text-gray-500">{item.text}</p>
    </a>
  </SwipeToDelete>
));

const Notifications = () => {
  return <div className="list-group">
    {notifications}
  </div>
}

export default Notifications;