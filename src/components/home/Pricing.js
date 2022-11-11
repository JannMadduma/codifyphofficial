import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { CssBaseline } from "@mui/material";

const tiers = [
  {
    title: [
      "Webiste Development",
      <br />,
      <Box
        style={{
          fontWeight: "bold",
          fontSize: "30px",
          width: "100%",
          fontStyle: "Poppins",
        }}
      >
        $20,000
      </Box>,
    ],

    description: ["Evaluation", "Design", "Payment"],
  },
  {
    title: [
      "Webiste Maintenance",
      <br />,
      <Box
        style={{
          fontWeight: "bold",
          fontSize: "30px",
          width: "100%",
          fontStyle: "Poppins",
        }}
      >
        $1,000
      </Box>,
    ],
    description: ["Evaluation", "Design", "Payment"],
  },
  {
    title: [
      "Custom WebMaking",
      <br />,
      <Box
        style={{
          fontWeight: "bold",
          fontSize: "30px",
          width: "100%",
          fontStyle: "Poppins",
        }}
      >
        $10,000
      </Box>,
    ],
    description: ["Evaluation", "Design", "Payment"],
  },
  {
    title: [
      "Website for Sale",
      <br />,
      <Box
        style={{
          fontWeight: "bold",
          fontSize: "30px",
          width: "100%",
          fontStyle: "Poppins",
        }}
      >
        $50,000
      </Box>,
    ],
    description: ["Evaluation", "Design", "Payment"],
  },
];

export default function Pricing() {
  return (
    <div
      style={{
        height: "100%",
      }}
      id="pricing"
    >
      <CssBaseline />
      <Box
        sx={{
          backgroundColor: "white",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="md">
          <Box>
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
              gutterBottom
              sx={{
                fontWeight: "bold",
                color: "#82C8E1 ",
                fontFamily: "Poppins, sans-serif;",
              }}
            >
              Packages & Pricing
            </Typography>
            <Typography variant="h5" align="center" paragraph>
              We make sure that clients are not intimidated by price.
            </Typography>
          </Box>

          <Box
            sx={{
              paddingTop: "50px",
            }}
          >
            <Grid container spacing={5}>
              {tiers.map((tier) => (
                <Grid item key={tier.title} xs={12} md={3}>
                  <Card
                    sx={{
                      backgroundColor: "#B7DBE7",
                      color: "black",
                      height: "100%",
                    }}
                  >
                    <Box>
                      <CardHeader
                        title={tier.title}
                        titleTypographyProps={{
                          align: "center",
                          fontSize: "15px",
                          backgroundColor: "#EAF5F7",
                          color: "black",
                          paddingTop: "50px",
                          paddingBottom: "20px",
                        }}
                      />
                    </Box>

                    <CardContent>
                      <ul>
                        {tier.description.map((line) => (
                          <Typography
                            component="li"
                            variant="subtitle1"
                            align="left"
                            key={line}
                          >
                            {line}
                          </Typography>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </div>
  );
}
