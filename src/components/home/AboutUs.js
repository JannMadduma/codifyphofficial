import { Box, Container } from "@mui/system";
import React from "react";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export default function AboutUs() {
  return (
    <div
      style={{
        backgroundImage: "url('img/ABOUT US - GOAL.png')",
        backgroundSize: "cover",
        height: "100%",
      }}
    >
      <Box
        sx={{
          height: "100%",
        }}
        id="aboutUs"
      >
        <Container maxWidth="lg" sx={{ height: "100%" }}>
          <Grid
            container
            spacing={2}
            sx={{ height: "100%", alignContent: "center" }}
          >
            <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "bold",
                    color: "rgba(130, 200, 225)",
                    fontFamily: "Poppins, sans-serif;",
                  }}
                >
                  About Us
                </Typography>
                <Box
                  className="container mb-5 mx-0"
                  style={{
                    borderBottom: "3px solid rgba(135, 180, 235, 0.8)",
                    borderRadius: 25,
                    width: 380,
                    marginTop: 10,
                    marginBottom: 30,
                  }}
                ></Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    marginBottom: 5,
                    fontFamily: "Poppins, sans-serif;",
                  }}
                >
                  We are visionary developers that seeks improvement to the
                  current innovations we are using. We are passionate and
                  determined to excel and give our best in every challenge we
                  face. We are, Codify.
                </Typography>
                <Box
                  className="container mb-5 mx-0"
                  style={{
                    borderBottom: "1px solid rgba(135, 180, 235, 0.8)",
                    borderRadius: 25,
                    width: 380,
                  }}
                ></Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontStyle: "italic",
                    fontWeight: "light",
                    fontSize: 14,
                    marginTop: 0.5,
                    fontFamily: "Poppins, sans-serif;",
                  }}
                >
                  Know more about us on our portfolios!
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <img alt="" style={{ width: "100%" }} src="../images/6.svg" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
