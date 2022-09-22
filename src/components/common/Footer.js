import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Estate Window
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Container
        component="main"
        sx={{ mt: 8, mb: 2, textAlign: "left", maxWidth: { xs: "100%" } }}
        maxWidth="sm"
      >
        {/* <Typography variant="h2" component="h1" gutterBottom>
          Estate Window
        </Typography> */}
        <Typography variant="h5" component="h2" gutterBottom>
          {/* {'Pin a footer to the bottom of the viewport.'}
          {'The footer will move as the main element of the page grows.'} */}
          <IconButton
            aria-label="Linkedin.com"
            onClick={() => window.open("https://www.Linkedin.com")}
          >
            <LinkedInIcon fontSize="large" color="primary" />
          </IconButton>
          <IconButton
            aria-label="Facebook.com"
            onClick={() => window.open("https://www.Facebook.com")}
          >
            <FacebookIcon fontSize="large" color="primary" />
          </IconButton>
          <IconButton
            aria-label="GitHub.com"
            onClick={() => window.open("https://www.GitHub.com")}
          >
            <GitHubIcon fontSize="large" color="primary" />
          </IconButton>
          <IconButton
            aria-label="Twitter.com"
            onClick={() => window.open("https://www.Twitter.com")}
          >
            <TwitterIcon fontSize="large" color="primary" />
          </IconButton>
        </Typography>
        <br />
        <Typography variant="body1">
          <Link
            to="/aboutus"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            About us |
          </Link>
          <Link href="#" style={{ color: "inherit", textDecoration: "none" }}>
            Developers
          </Link>
        </Typography>
        <br />
        <Typography>
          {"Support: +63 907 8888 888"} <br />
          {"Email: estatewindow@EW.ph"} <br />
          {"Batchelor's Realty & Brokerage, Inc"}
        </Typography>
      </Container>

      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          paddingBottom: "50px",
        }}
      >
        {/* <Typography variant="body1">
            Capstone two
          </Typography> */}
        <img src="/img/houses.png" alt="Photo" />
        <Copyright />
      </Container>
    </Box>
  );
}
