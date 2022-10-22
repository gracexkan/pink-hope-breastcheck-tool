import React from 'react'

import { Box, Container, Divider, IconButton, Link, Stack, Typography } from '@mui/material';
import { FaCalendarDay, FaHeartbeat, FaUserCircle, FaBook } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
  return (
    <Box className="footer" component="footer" sx={{ marginTop: 'auto' }}>
      <Divider className="footer" />
      <Container maxWidth="lg">
        <Box
          style={{
            display: 'flex',
            flexDirection: 'row',
						alignItems: 'center',
            justifyContent: 'space-between',
						marginTop: '10px',
						width: '100%'
          }}
        >
					<Link color="text.secondary" href="/" underline="none" variant="body2">
						<IconButton aria-label="Calendar">
							<FaCalendarDay color="#73313b"/>
						</IconButton>
					</Link>
					<Link color="text.secondary" href="self-check" underline="none" variant="body2">
						<IconButton aria-label="Self Check">
							<FaHeartbeat color="#73313b"/>
						</IconButton>
					</Link>
					<Link color="text.secondary" href="resources" underline="none" variant="body2">
						<IconButton aria-label="Resources">
							<FaBook	color="#73313b" />
						</IconButton>
					</Link>
					<Link color="text.secondary" href="profile" underline="none" variant="body2">
						<IconButton aria-label="Profile">
							<FaUserCircle color="#73313b"/>
						</IconButton>
					</Link>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer;