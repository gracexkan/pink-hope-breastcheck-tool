import React from 'react'
import './Notification.css';
import { AiOutlineBell } from "react-icons/ai";
import {NotificationContainer, NotificationManager} from 'react-notifications';

function Notification(){




  return (
    <div className="notification">
      <AiOutlineBell className="notification-bell" size={35}/>
      <span className="notification-count">5</span>
    </div>
  )

}

export default Notification