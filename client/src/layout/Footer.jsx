import React from 'react'

import { Box, Container, Divider, IconButton, Link, Stack, Typography } from '@mui/material';
import { FaCalendarDay, FaHeartbeat, FaUserCircle, FaBook } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <Box component="footer" sx={{ marginTop: 'auto' }}>
      <Divider />
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
					<Link color="text.secondary" href="#" underline="none" variant="body2">
						<IconButton aria-label="Calendar">
							<FaCalendarDay />
						</IconButton>
					</Link>
					<Link color="text.secondary" href="self-check" underline="none" variant="body2">
						<IconButton aria-label="Self Check">
							<FaHeartbeat />
						</IconButton>
					</Link>
					<Link color="text.secondary" href="resources" underline="none" variant="body2">
						<IconButton aria-label="Resources">
							<FaBook />
						</IconButton>
					</Link>
					<Link color="text.secondary" href="profile" underline="none" variant="body2">
						<IconButton aria-label="Profile">
							<FaUserCircle />
						</IconButton>
					</Link>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer;