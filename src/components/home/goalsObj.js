import { Box, Container } from "@mui/system";
import React from "react";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export default function Goals() {
  return (
    <div
      style={{
        backgroundImage: "url('img/herobackground.png')",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          height: "100vh",
        }}
      >
        <Container sx={{ height: "100vh" }}>
          <Grid
            container
            spacing={2}
            sx={{ height: "100vh", alignContent: "center" }}
          >
            <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <img
                  style={{ width: "100%" }}
                  src="../images/7.svg"
                  alt=""
                  srcset=""
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  pt: 8,
                  pb: 6,
                }}
              >
                <Box>
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: "bold",
                      color: "rgba(50, 180, 235, 0.8)",
                      fontFamily: "Poppins, sans-serif;",
                    }}
                  >
                    Our Goal
                  </Typography>

                  <Box
                    className="container mb-5 mx-0"
                    style={{
                      borderBottom: "3px solid rgba(135, 180, 235, 0.8)",
                      borderRadius: 25,
                      width: 470,
                      marginTop: 10,
                      marginBottom: 30,
                    }}
                  ></Box>

                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: "left",
                      fontWeight: "bold",
                      fontFamily: "Poppins, sans-serif;",
                      width: 460,
                    }}
                  >
                    Our aim is to provide a user friendly websites for business
                    owners who desires to enable their business to compete on
                    the modern market.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
