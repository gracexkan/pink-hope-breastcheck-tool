import React from 'react'
import './Notification.css';
import { FaBell } from "react-icons/fa";
import { Box, Container, Divider, IconButton, Link, Stack, Typography } from '@mui/material';
import {NotificationContainer, NotificationManager} from 'react-notifications';

const Notification = () => {
  return (
    <div className="notification-box">
      <Link color="text.secondary" href="notifications" underline="none" variant="body2">
        <IconButton>
          <div className="notification">
            <FaBell size={35} />
          <span className="notification-count">5</span>
          </div>
        </IconButton>
      </Link>
    </div>
  )

}

export default Notification