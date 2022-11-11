import { Box, Container } from "@mui/system";
import React from "react";
import Typography from "@mui/material/Typography";

export default function FAQ() {
  return (
    <div
      style={{
        backgroundImage: "url('img/ABOUT US - THE TEAM.png')",
        backgroundSize: "cover",
        height: "100%",
      }}
    >
      <Container
        sx={{ display: "flex", height: 780, marginY: 15, alignItems: "center" }}
      >
        <Container sx={{ margin: 0, padding: 0, width: 450 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              color: "#82C8E1 ",
            }}
          >
            Frequently Asked Questions
          </Typography>

          <Box
            className="container mb-5 mx-0"
            style={{
              borderBottom: "3px solid rgba(135, 180, 235, 0.8)",
              borderRadius: 25,
              width: 380,
              marginTop: 10,
              marginBottom: 30,
            }}
          ></Box>

          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              marginBottom: 5,
              fontFamily: "Poppins, sans-serif;",
            }}
          >
            In this section, you'll find common questions you might have on
            Codify. Also, feel free to contact us for more clarifications and
            check out our facebook account for more info!
          </Typography>

          {/* <Box
            className="container mb-5 mx-0"
            style={{
              borderBottom: "1px solid rgba(135, 180, 235, 0.8)",
              borderRadius: 25,
              width: 380,
            }}
          ></Box> */}

          {/* <Typography
            variant="h6"
            sx={{
              fontStyle: "italic",
              fontWeight: "light",
              fontSize: 14,
              marginTop: 0.5,
              fontFamily: "Poppins, sans-serif;",
            }}
          >
            Ask us anything!
          </Typography> */}
        </Container>

        <Box
          maxWidth={false}
          sx={{
            maxWidth: "650px",

            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Box
            className="custom-faq"
            maxWidth={false}
            sx={{
              maxWidth: "700px",

              borderRadius: 4,
              backgroundColor: "#82C8E1 ",
              padding: 0.5,
            }}
          >
            <Typography
              sx={{
                color: "#FFFFFF",
                marginBottom: 0,
                paddingY: 0,
                paddingLeft: 4,
                fontWeight: "bold",
                fontFamily: "Poppins, sans-serif;",
              }}
            >
              How can I contact the team?
            </Typography>
            <Typography
              sx={{
                color: "#000000",
                marginBottom: 0,
                paddingY: 0,
                paddingLeft: 4,
                fontFamily: "Poppins, sans-serif;",
              }}
            >
              Because of gravity and the meteors that hit the planet that made
              it flat just like Asgard.
            </Typography>
          </Box>
          <Box
            className="custom-faq"
            maxWidth={false}
            sx={{
              maxWidth: "700px",

              borderRadius: 4,
              backgroundColor: "#82C8E1 ",
              padding: 0.5,
            }}
          >
            <Typography
              sx={{
                color: "#FFFFFF",
                marginBottom: 0,
                paddingY: 0,
                paddingLeft: 4,
                fontWeight: "bold",
                fontFamily: "Poppins, sans-serif;",
              }}
            >
              Why is Earth flat?
            </Typography>
            <Typography
              sx={{
                color: "#000000",
                marginBottom: 0,
                paddingY: 0,
                paddingLeft: 4,
                fontFamily: "Poppins, sans-serif;",
              }}
            >
              Because of gravity and the meteors that hit the planet that made
              it flat just like Asgard.
            </Typography>
          </Box>
          <Box
            className="custom-faq"
            maxWidth={false}
            sx={{
              maxWidth: "700px",

              borderRadius: 4,
              backgroundColor: "#82C8E1 ",
              padding: 0.5,
            }}
          >
            <Typography
              sx={{
                color: "#FFFFFF",
                marginBottom: 0,
                paddingY: 0,
                paddingLeft: 4,
                fontWeight: "bold",
                fontFamily: "Poppins, sans-serif;",
              }}
            >
              Why is Earth flat?
            </Typography>
            <Typography
              sx={{
                color: "#000000",
                marginBottom: 0,
                paddingY: 0,
                paddingLeft: 4,
                fontFamily: "Poppins, sans-serif;",
              }}
            >
              Because of gravity and the meteors that hit the planet that made
              it flat just like Asgard.
            </Typography>
          </Box>
          <Box
            className="custom-faq"
            maxWidth={false}
            sx={{
              maxWidth: "700px",

              borderRadius: 4,
              backgroundColor: "#82C8E1 ",
              padding: 0.5,
            }}
          >
            <Typography
              sx={{
                color: "#FFFFFF",
                marginBottom: 0,
                paddingY: 0,
                paddingLeft: 4,
                fontWeight: "bold",
                fontFamily: "Poppins, sans-serif;",
              }}
            >
              Why is Earth flat?
            </Typography>
            <Typography
              sx={{
                color: "#000000",
                marginBottom: 0,
                paddingY: 0,
                paddingLeft: 4,
                fontFamily: "Poppins, sans-serif;",
              }}
            >
              Because of gravity and the meteors that hit the planet that made
              it flat just like Asgard.
            </Typography>
          </Box>
          <Box
            className="custom-faq"
            maxWidth={false}
            sx={{
              maxWidth: "700px",

              borderRadius: 4,
              backgroundColor: "#82C8E1 ",
              padding: 0.5,
            }}
          >
            <Typography
              sx={{
                color: "#FFFFFF",
                marginBottom: 0,
                paddingY: 0,
                paddingLeft: 4,
                fontWeight: "bold",
                fontFamily: "Poppins, sans-serif;",
              }}
            >
              Why is Earth flat?
            </Typography>
            <Typography
              sx={{
                color: "#000000",
                marginBottom: 0,
                paddingY: 0,
                paddingLeft: 4,
                fontFamily: "Poppins, sans-serif;",
              }}
            >
              Because of gravity and the meteors that hit the planet that made
              it flat just like Asgard.
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
