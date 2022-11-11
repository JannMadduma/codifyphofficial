import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const framework = [
  {
    img: "https://img.icons8.com/dotty/480/000000/google-sites.png",
    title: "Webpages",
  },
  {
    img: "https://img.icons8.com/wired/512/000000/box--v1.png",
    title: "ECommerce",
  },
  {
    img: "https://img.icons8.com/wired/512/000000/hand-cursor.png",
    title: "Shopify",
  },
  {
    img: "https://img.icons8.com/wired/512/000000/uncheck-all.png",
    title: "Prototyping",
  },
  {
    img: "https://img.icons8.com/wired/512/000000/news.png",
    title: "UX Research",
  },
  {
    img: "https://img.icons8.com/wired/512/000000/checked-2.png",
    title: "UI/UX Audit",
  },
  {
    img: "https://img.icons8.com/wired/512/000000/about.png",
    title: "Consultation",
  },
  {
    img: "https://img.icons8.com/wired/512/000000/binoculars.png",
    title: "Design Sprints",
  },
];

export default function PricingService() {
  return (
    <div
      style={{
        backgroundImage: "url('/img/HOME - OUR SERVICES.png')",
        backgroundSize: "cover",
        height: "100%",
      }}
    >
      <CssBaseline />
      <Box
        sx={{
          height: "100%",
          pt: 8,
          pb: 6,
        }}
      >
        <Container>
          <Typography
            component="h4"
            variant="h5"
            align="center"
            sx={{
              fontWeight: "bold",
              fontFamily: "Poppins, sans-serif;",
            }}
          >
            SERVICES
          </Typography>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            sx={{
              fontWeight: "bold",
              color: "white",
              fontFamily: "Poppins, sans-serif;",
            }}
          >
            Our Craft
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            paragraph
          >
            We offer various services which are listed below.
          </Typography>

          <Grid container spacing={4} pt={4}>
            {/* -----------------CARD 1 ---------------- */}
            {framework.map((item) => (
              <Grid
                item
                xs={3}
                key={item}
                style={{
                  paddingTop: "50px",
                }}
              >
                <Container>
                  <img
                    alt=""
                    src={item.img}
                    style={{
                      width: "100%",
                      padding: "0 70px",
                    }}
                  />
                </Container>

                <Box sx={{ flexGrow: 1, padding: "5%" }} align="center">
                  <Typography
                    variant="h6"
                    key={item}
                    sx={{
                      fontWeight: "bold",
                      marginBottom: 2,
                      fontFamily: "Poppins, sans-serif;",
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
