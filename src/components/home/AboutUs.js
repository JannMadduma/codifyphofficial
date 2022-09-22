import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import Description from "../listing/view/descriptions";
import CallToAction from "../common/CallToAction";

export default function AboutUs() {
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

      <Container>
        <Box
          sx={{
            display: "flex",
            alignSelf: "start",
          }}
        ></Box>
      </Container>
      <Container
        sx={{ display: "flex", alignItems: "center", paddingBottom: "50px" }}
      >
        <Container>
          <img src="/img/jann.png" />
        </Container>
        <Box>
          <Container>
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Hi, I'm Jann.
            </Typography>
            <Typography align="center" color="text.secondary" paragraph>
              I work at Bachelors Reality for Home buyers so I can be a part of
              something impactful and hopefully help make a difference in
              someone's life. Home buyers are a big part of my family and being
              given the opportunity to honor them and what they do is rewarding
              everyday!
            </Typography>
          </Container>
        </Box>
      </Container>
      <Container sx={{ paddingBottom: "70px" }}>
        <CallToAction />
      </Container>
    </Box>
  );
}
