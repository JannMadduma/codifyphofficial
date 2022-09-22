import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import CallIcon from "@mui/icons-material/Call";
import KeyIcon from "@mui/icons-material/Key";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";

const tiers = [
  {
    title: <CallIcon sx={{ fontSize: "50px" }} />,
    price: (
      <Typography sx={{ textAlign: "center" }}>
        Step 1 <br /> Book a Free Valuation Call
      </Typography>
    ),

    description: [
      "Evaluation",
      "Availability for site visit",
      "Availability of Transportation",
      "Site visit booking",
    ],
    buttonText: "Book a Site Visit",
    buttonVariant: "outlined",
  },
  {
    title: <KeyIcon sx={{ fontSize: "50px" }} />,
    price: (
      <Typography sx={{ textAlign: "center" }}>
        Step 2 <br /> Reserve or Buy a House
      </Typography>
    ),
    description: [
      "Validation",
      "Choosing a Unit",
      "Reservation",
      "Signing of contract",
    ],
    buttonText: "Reserve a Unit",
    buttonVariant: "contained",
  },
  {
    title: <OtherHousesIcon sx={{ fontSize: "50px" }} />,
    price: (
      <Typography sx={{ textAlign: "center" }}>
        Step 3 <br /> Move into Your New House
      </Typography>
    ),
    description: ["Finance Takeout", "Clearance", "House Turnover", "Checking"],
    buttonText: "Follow up",
    buttonVariant: "outlined",
  },
];

export default function CallToAction() {
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />

      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            <Grid item key={tier.title} xs={12} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  titleTypographyProps={{ align: "center" }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                    color: "#fb8c00",
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                      mb: 2,
                    }}
                  >
                    <Typography color="primary">{tier.price}</Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}
