import { Box, Container } from "@mui/system";
import React from "react";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

export default function Missionvision() {
  return (
    <div
      style={{
        backgroundImage: "url('img/missionvisionbg.png')",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          height: "100%",
        }}
        id="aboutUs"
      >
        <Container
          sx={{
            maxWidth: "1000px",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            paddingTop: "50px",
          }}
          maxWidth={false}
        >
          <Grid container>
            <Grid item xs={6}>
              <img
                style={{ width: "100%", paddingRight: "50px" }}
                src="img/missionvision1.png"
              />
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  alignItems: "left",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "bold",
                    color: "rgba(130, 200, 225)",
                    fontFamily: "Poppins, sans-serif;",
                  }}
                >
                  Our Vision
                </Typography>

                <Typography
                  sx={{
                    fontWeight: "bold",

                    fontFamily: "Poppins, sans-serif;",
                    fontSize: "20px",
                  }}
                >
                  Ut facilis accusantium aut dolores dolore sit harum quibusdam.
                  Et officia consectetur sit .
                </Typography>

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
                  Lorem ipsum dolor sit amet. Ea doloribus eaque et tenetur
                  fugiat id neque quia et magnam quasi rem tenetur doloribus At
                  magnam quia rem tenetur doloribus At magnam quia.
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "bold",
                    color: "rgba(130, 200, 225)",
                    fontFamily: "Poppins, sans-serif;",
                  }}
                >
                  Our Mission
                </Typography>

                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "20px",
                    fontFamily: "Poppins, sans-serif;",
                  }}
                >
                  Ut facilis accusantium aut dolores dolore sit harum quibusdam.
                  Et officia consectetur sit .
                </Typography>

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
                  Lorem ipsum dolor sit amet. Ea doloribus eaque et tenetur
                  fugiat id neque quia et magnam quasi rem tenetur doloribus At
                  magnam quia rem tenetur doloribus At magnam quia.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <img
                style={{ width: "100%", paddingLeft: "50px" }}
                src="img/misionvision2.png"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
