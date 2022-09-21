import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.inherit" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Estate Windows
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Banner = ({}) => {
  return (
    <Grid
      container
      component="main"
      sx={{
        backgroundImage: "url(/img/bannerBackground.png)",
        height: "auto",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      style={{ color: "black" }}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        sx={{
          mt: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            m: "0px",
          }}
        >
          <img
            src="/img/logoRoof.png"
            style={{ height: "100px", width: "300px" }}
          />
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <h1
              style={{
                fontFamily: "'Rasputin', sans-serif",
                fontSize: "50px",
                lineHeight: "45px",
              }}
            >
              Estate
              <br />
              Windows
            </h1>
            <Box display={{ xs: "none", md: "initial" }}>
              <Button
                type="submit"
                color="inherit"
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2, borderRadius: "100px", opacity: "60%" }}
              >
                Find your home.
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        display={{ xs: "none", md: "initial", lg: "initial" }}
        square
        md={6}
        xs={12}
        sx={{
          mt: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "100px",
            margin: {
              xs: 0,
              md: "200px 0px",
            },
          }}
        >
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Search Homes"
              name="email"
              autoComplete="email"
              autoFocus
              sx={{
                "& .MuiInputBase-root": {
                  borderRadius: "300px",
                },
              }}
            />
            <Button
              type="submit"
              color="inherit"
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2, borderRadius: "100px" }}
            >
              See Current Listings
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Banner;
