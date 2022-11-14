import { Box, Container } from "@mui/system";
import React from "react";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export default function AboutUs() {
  return (
    <div
      style={{
        height: "800px",
      }}
    >
      <Box
        sx={{
          height: "100vh",
          display: "flex",
        }}
        id="aboutUs"
      >
        <Container sx={{ maxWidth: "1000px" }} maxWidth={false}>
          <Grid
            container
            spacing={2}
            sx={{ height: "100vh", alignContent: "center" }}
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
                <img style={{ width: "100%" }} src="img/aboutus.png" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
