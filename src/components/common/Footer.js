import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

import {
  Box,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";

const myStyle = {
  footerStyles: {
    color: "white",
    background: "#82C8E1 ",
    height: "40vh",
  },
  linkContainer: {
    display: "flex",
    textAlign: "top",
    flexDirection: "row",
  },
  links: {
    fontFamily: "Poppins, sans-serif;",
    display: "flex",
    flexDirection: "column",
    padding: "0 2%",

    flex: "25%",
  },
  linksLogo: {
    fontSize: 38,
    fontFamily: "Poppins, sans-serif;",
    display: "flex",
    flexDirection: "column",
    padding: "0 1%",
    paddingBottom: "0px",
    flex: "25%",
    paddingTop: "5px",
  },
  linksText: {
    fontFamily: "Poppins, sans-serif;",
    display: "flex",
    flexDirection: "column",
    padding: "2%",

    flex: "25%",
  },
  aStyles: {
    fontFamily: "Poppins, sans-serif;",
    color: "black",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
    lineHeight: "180%",
  },
  bottom: {
    textAlign: "center",
    color: "black",
  },
};

export default function Footer() {
  return (
    <footer style={myStyle.footerStyles}>
      <div>
        <Typography xs={{ fontSize: "50px" }} style={myStyle.linksLogo}>
          codifyph
        </Typography>
      </div>
      <div style={myStyle.linkContainer}>
        <div style={myStyle.links}>
          <a href="#" style={myStyle.aStyles}>
            About Us
          </a>
          <a href="#" style={myStyle.aStyles}>
            Our Story
          </a>
          <a href="#" style={myStyle.aStyles}>
            Our Tech
          </a>
          <a href="#" style={myStyle.aStyles}>
            Our Projects
          </a>
          <Box>
            <Typography>
              <IconButton
                aria-label="Linkedin.com"
                onClick={() => window.open("https://www.Linkedin.com")}
                sx={{ color: "white" }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                aria-label="Facebook.com"
                onClick={() => window.open("https://www.Facebook.com")}
                sx={{ color: "white" }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                aria-label="GitHub.com"
                onClick={() => window.open("https://www.GitHub.com")}
                sx={{ color: "white" }}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                aria-label="Twitter.com"
                onClick={() => window.open("https://www.Twitter.com")}
                sx={{ color: "white" }}
              >
                <TwitterIcon />
              </IconButton>
            </Typography>
          </Box>
        </div>
        <div style={myStyle.links}>
          <a href="#" style={myStyle.aStyles}>
            Admin Log in
          </a>
          <a href="#" style={myStyle.aStyles}>
            FAQs
          </a>
          <a href="#" style={myStyle.aStyles}>
            Contact Us
          </a>
        </div>
        <div style={myStyle.linksText}>
          <Typography sx={{ color: "black" }}>
            For inquiries,{" "}
            <span>
              <a href="#" style={myStyle.aStyles}>
                {" "}
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  send us an email
                </Typography>
              </a>
            </span>
            and we are more than happy to assist you
          </Typography>
        </div>
        <div style={myStyle.links}>
          <Typography sx={{ color: "black" }}>Get our latest update</Typography>

          <Paper>
            <Grid container>
              <Grid item md={8}>
                <Box>
                  <InputBase
                    sx={{ ml: 1 }}
                    placeholder="Your email here and Enter"
                  />
                </Box>
              </Grid>
              <Grid item md={4}></Grid>
            </Grid>
          </Paper>
        </div>
      </div>
      <h5 style={myStyle.bottom}>
        © C O D I F Y P H | C O P Y R I G H T 2 0 2 2
      </h5>
    </footer>
  );
}
