import { Box, Container } from "@mui/system";
import React from "react";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

export default function Missionvision() {
  const styles = {
    paperContainer: {
      height: 300,
      backgroundImage: "url('img/missionvision1.png')",
      width: 500,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  };
  const stylesone = {
    paperContainer: {
      height: 300,
      backgroundImage: "url('img/misionvision2.png')",
      width: 500,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  };

  return (
    <div
      style={{
        backgroundImage: "url('img/missionvisionbg.png')",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <CssBaseline />
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Container
          maxWidth={false}
          style={{
            maxWidth: "1000px",
            paddingBottom: "50px",
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{ height: "100%", alignContent: "center" }}
          >
            <Grid
              item
              xs={12}
              sx={{ display: "flex", alignItems: "center", gap: 5 }}
            >
              <Box>
                <div style={styles.paperContainer}></div>
              </Box>

              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "bold",
                    color: "rgba(130, 200, 225)",
                    fontFamily: "Poppins, sans-serif;",
                    textAlign: "center",
                    marginBottom: 5,
                  }}
                >
                  Our Vision
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    marginBottom: 5,
                    fontFamily: "Poppins, sans-serif;",
                    textAlign: "center",
                  }}
                >
                  "We want to create a place for business owners who wants to
                  grow their business further into the world of modern market"
                </Typography>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{ display: "flex", alignItems: "center", gap: 5, marginY: 5 }}
            >
              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "bold",
                    color: "rgba(130, 200, 225)",
                    fontFamily: "Poppins, sans-serif;",
                    textAlign: "center",
                  }}
                >
                  Our Mission
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    marginBottom: 5,
                    fontFamily: "Poppins, sans-serif;",
                    textAlign: "center",
                  }}
                >
                  "We aim to create a more open, worry free medium for business
                  owners, especially small businesses where they can directly
                  inquire to us and talk about their desired projects where we
                  can help them reach a goal they never expected they could"
                </Typography>
              </Box>

              <Box>
                <div style={stylesone.paperContainer}></div>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
