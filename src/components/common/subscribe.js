import * as React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import { addVipEmail, getVipEmail } from "service/vipService";

function Subscribe() {
  const [email, setEmail] = React.useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    getVipEmail(email).then((res) => {
      if (!res.data.length) {
        addVipEmail({ email: email });
      }
    });
  };

  return (
    <Paper
      sx={{
        position: "relative",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "grey",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[700],
        }}
      />
      <Grid container>
        <Grid item md={12}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
            }}
          >
            <Typography component="h1" variant="h4" color="black" gutterBottom>
              Subscribe to our FREE VIP email alerts
            </Typography>
            <Typography variant="h6" color="black" paragraph>
              Be the first to know about deals and opportunities
            </Typography>
            <br />
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                onChange={handleChangeEmail}
                value={email}
              />
              <Button
                variant="contained"
                size="large"
                sx={{ marginLeft: "10px" }}
                onClick={handleSubscribe}
              >
                Subscribe
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Subscribe;
