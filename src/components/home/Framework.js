import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const framework = [
  {
    img: "https://img.icons8.com/windows/512/000000/dev.png",
    title: "RIGHT TEAM",
    description:
      "We offer various website projects for you! We're just one contact away!",
  },
  {
    img: "https://img.icons8.com/ios/100/000000/process.png",
    title: "RIGHT PROCESS",
    description:
      "We offer various website projects for you! We're just one contact away!",
  },
  {
    img: "https://img.icons8.com/ios/500/000000/ableton.png",
    title: "RIGHT TECHNOLOGY",
    description:
      "We offer various website projects for you! We're just one contact away!",
  },
];

export default function Framework() {
  return (
    <div
      style={{
        backgroundImage: "url('img/ABOUT US - MISION & VISION.png')",
        backgroundSize: "cover",
        height: "100%",
        padding: "0",
      }}
    >
      <Box
        sx={{
          height: "100%",
        }}
      >
        <Container sx={{ height: "100%" }}>
          <Grid
            container
            spacing={2}
            sx={{
              height: "100%",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Box paddingBottom={"30px"}>
                <Typography
                  component="h4"
                  variant="h5"
                  align="center"
                  gutterBottom
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "Poppins, sans-serif;",
                  }}
                >
                  THE FRAMEWORK
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
                  Building a Great Product
                </Typography>
                <Typography
                  variant="h6"
                  align="center"
                  color="text.secondary"
                  paragraph
                >
                  Our product making went through proper procedures and
                  management to attain best possible results.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box
                sx={{
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "row",
                }}
                padding="0 0 50px 0"
              >
                {framework.map((item) => (
                  <Grid item xs={4} key={item} sx={{ padding: "40px" }}>
                    <img
                      alt=""
                      src={item.img}
                      style={{
                        width: "100%",
                        padding: "10px 100px ",
                      }}
                    />
                    <Box sx={{ flexGrow: 1 }} align="center">
                      <Typography
                        variant="h6"
                        key={item}
                        sx={{
                          fontWeight: "bold",
                          marginBottom: 2,
                          fontFamily: "Poppins, sans-serif;",
                          textAlign: "center",
                          color: "rgba(50, 180, 235, 0.8)",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="h7"
                        sx={{
                          fontWeight: "medium",
                          marginBottom: 2,
                          fontFamily: "Poppins, sans-serif;",
                          textAlign: "center",
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
