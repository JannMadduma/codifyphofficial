import * as React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

function Description(props) {
  const { posts, title } = props;

  return (
    <Grid
      item
      xs={12}
      sx={{
        "& .markdown": {
          py: 3,
        },
      }}
    >
      <Grid container column={12} sx={{ paddingTop: 5 }}>
        <Grid item md={6} sx={{ paddingRight: 5 }}>
          <Typography variant="h6" gutterBottom>
            DESCRIPTION
          </Typography>
          <Divider />
          <Typography gutterBottom>
            Name of Project: Summerville Subdivision
            <br />
            Location: Brgy., Can-asujan Carcar City Cebu
            <br />
            DHSUD LS No. 07-20-053, 07-20-054
            <br />
            <br />
            Landmarks/Accessibilities:
            <br />
            10 minutes drive going to Gaisano Grand Mall
            <br />
            12 minutes drive going to Supermetro Carcar
            <br />
            15 minutes drive going to Carcar District Hospital
            <br />
            15 minutes drive going to Carcar City Public Markert
          </Typography>
        </Grid>
        <Grid item md={6} sx={{ paddingLeft: 5 }}>
          <Typography variant="h6" gutterBottom>
            PROPERTY DETAILS/FEATURES
          </Typography>
          <Divider />
          <Typography gutterBottom>
            • Lot Area: 42 Sqm
            <br />
            • Floor Area: 52 Sqm
            <br />
            • 2 Storey Townhouse
            <br />
            • Provision For 2 Bedrooms
            <br />
            • 1 Toilet And Bath
            <br />
            • Living Area
            <br />
            • Dining Area
            <br />
            • Kitchen Area
            <br />
            • Service Area
            <br />• Provision For One Car Garage
          </Typography>
        </Grid>
      </Grid>
      <Grid container column={12} sx={{ paddingTop: 5 }}>
        <Grid item md={6} sx={{ paddingRight: 5 }}>
          <Typography variant="h6" gutterBottom>
            PAYMENT FINANCING SCHEME/COMPUTATION
          </Typography>
          <Divider />
          <Typography gutterBottom>
            Sample Computation
            <br />
            Total Contract Price: Php 1,550,000
            <br />
            1. Reservation Fee: Php 5,000 (deductible from downpayment)
            <br />
            2. Equity/Downpayment: Php 222,000 payable for 24 months Php
            9,250/month
            <br />
            3. Loanable Amount: Php 1,323,000
            <br />
            <br />
            Estimated Pagibig Loan Computation
            <br />* 30 years @ Php 7,408/month
            <br />* 25 years @ Php 8,026/month
            <br />* 20 years @ Php 9,008/month
            <br />* 15 years @ Php 10,722/month
            <br />* 10 years @ Php 14,276/month
            <br />* 5 years @ Php 25,195/month
          </Typography>
        </Grid>
        <Grid item md={6} sx={{ paddingLeft: 5 }}>
          <Typography variant="h6" gutterBottom>
            AMENITIES
          </Typography>
          <Divider />
          <Typography gutterBottom>
            • Gated Entrance
            <br />
            • Perimeter Fence
            <br />
            • Drainage System
            <br />
            • Concrete Road; Cemented Curbs & Gutters
            <br />• Water And Electric Ready
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

Description.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default Description;
