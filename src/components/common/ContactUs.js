import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import {
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
} from "@mui/material";

export default function ContactUs({ open, setOpen }) {
  const handleClose = () => [setOpen(false)];

  return (
    <Dialog onClose={handleClose} open={open}>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography variant="h5" align="center">
            Contact Us
          </Typography>
        </Paper>
        <React.Fragment>
          <Typography gutterBottom>
            Please fill the form below for inquiry
          </Typography>
          <Grid
            container
            spacing={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Grid item xs={12} md={6}>
              <TextField
                required
                idNo="Projectname"
                label="Your Fullname"
                fullWidth
                autoComplete="cc-Projectname"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                idNo="city"
                label="Your City"
                fullWidth
                autoComplete="cc-number"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                idNo="contactNumber"
                label="Your Contact Number"
                fullWidth
                autoComplete="cc-exp"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                idNo="inquiry"
                label="Your Inquiry"
                helperText="Please add your available time for call"
                fullWidth
                autoComplete="cc-csc"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="secondary"
                    Projectname="saveCard"
                    value="yes"
                  />
                }
                label="Send me email receipt for this inquiry"
              />
            </Grid>
            <Button
              sx={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "20px",
              }}
              onClick={handleClose}
            >
              Submit
            </Button>
          </Grid>
        </React.Fragment>
      </Container>
    </Dialog>
  );
}
