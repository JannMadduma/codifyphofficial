import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

const Banner = ({}) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

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
            textAlign: "center",
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
          <Box noValidate sx={{ mt: 1 }}>
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
                color="inherit"
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2, borderRadius: "100px", opacity: "60%" }}
                component={Link}
                to={"/listing"}
              >
                See current listings...
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        display={{ xs: "none", md: "initial", lg: "initial" }}
        // square
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
          <Box noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              idNo="search"
              label="Search Homes"
              Projectname="search"
              autoComplete="search"
              onChange={handleChange}
              autoFocus
              sx={{
                "& .MuiInputBase-root": {
                  borderRadius: "300px",
                },
              }}
            />
            <Button
              color="inherit"
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2, borderRadius: "100px" }}
              component={Link}
              to={`/listing?search=${search}`}
            >
              Search homes...
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Banner;
