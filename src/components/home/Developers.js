import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";

export default function Developers() {
  return (
    <Box>
      <Toolbar
        sx={{ borderBottom: 1, borderColor: "divider" }}
        style={{ padding: "0 150px" }}
      >
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Link to={"/"}>
            <Avatar alt="Photo" src="/img/logo.png" variant="square" />
          </Link>
        </Box>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      ></Toolbar>

      <Container
        sx={{ display: "flex", alignItems: "center", paddingBottom: "50px" }}
      >
        <Container>
          <Container>
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
              TON
            </Typography>
            <Typography align="center" color="text.secondary" paragraph>
              To enhancing the business growth of our customers with creative
              Design and Development to deliver market-defining high-quality
              solutions that create value and consistent competitive advantage
              for our clients around the world.
            </Typography>
          </Container>
          <Container>
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
              sx={{ paddingTop: "50px" }}
            >
              Fullstack Developer
            </Typography>
            <Typography align="center" color="text.secondary" paragraph>
              React- Front End Framework | Material UI - CSS Framework |
              JSON-Server - Backend Database | Redux - State Management
            </Typography>
          </Container>
        </Container>
        <Container></Container>
      </Container>
      <Container
        sx={{ display: "flex", alignItems: "center", paddingBottom: "50px" }}
      >
        <Container></Container>
        <Box>
          <Container>
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
              JANN
            </Typography>
            <Typography align="center" color="text.secondary" paragraph>
              Design and develop technology that improves the lives of its
              users, while providing an exceptionally high level of service to
              our clients.
            </Typography>
          </Container>
          <Container>
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
              sx={{ paddingTop: "50px" }}
            >
              Fullstack Developer
            </Typography>
            <Typography align="center" color="text.secondary" paragraph>
              React- Front End Framework | Material UI - CSS Framework |
              JSON-Server - Backend Database | Redux - State Management
            </Typography>
          </Container>
        </Box>
      </Container>
    </Box>
  );
}
