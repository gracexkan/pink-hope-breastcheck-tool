import React from "react";

import {
  Box,
  Container,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import {
  FaCalendarDay,
  FaHeartbeat,
  FaUserCircle,
  FaBook,
} from "react-icons/fa";
import "./Layout.css";

const Footer = () => {
  return (
    <Box className="footer" component="footer" sx={{ marginBottom: "auto", width: "100%"}}>
      <Divider className="footer" />
      <Container sx={{width: "100%"}}>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "10px",
            width: "90%",
            position: "relative",
            zIndex: "2",
          }}
        >
          <Link
            color="text.secondary"
            href="/"
            underline="none"
            variant="body2"
          >
            <IconButton aria-label="Calendar">
              <FaCalendarDay color="#73313b" />
            </IconButton>
          </Link>
          <Link
            color="text.secondary"
            href="self-check"
            underline="none"
            variant="body2"
          >
            <IconButton aria-label="Self Check">
              <FaHeartbeat color="#73313b" />
            </IconButton>
          </Link>
          <Link
            color="text.secondary"
            href="resources"
            underline="none"
            variant="body2"
          >
            <IconButton aria-label="Resources">
              <FaBook color="#73313b" />
            </IconButton>
          </Link>
          <Link
            color="text.secondary"
            href="profile"
            underline="none"
            variant="body2"
          >
            <IconButton aria-label="Profile">
              <FaUserCircle color="#73313b" />
            </IconButton>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
