import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";

function preventDefault(event) {
  event.preventDefault();
}

export default function Stats() {
  return (
    <box>
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container>
            <Typography
              component="h1"
              variant="h5"
              align="center"
              color="text.primary"
              gutterBottom
            >
              What's Happening Now
            </Typography>
          </Container>
        </Box>
      </main>

      <Box
        sx={{
          display: { xs: "initial", md: "flex" },
          width: { xs: "100%", md: "800px" },
          justifyContent: "space-around",
          margin: "0 auto",
        }}
      >
        <Box sx={{ marginBottom: { xs: "30px", md: "0px" } }}>
          <Typography component="p" variant="h4" sx={{ color: "#1A80D9" }}>
            348
          </Typography>
          <Typography color="text.secondary" sx={{ flex: 1, fontSize: "12px" }}>
            Homes for sale
          </Typography>
        </Box>
        <Box sx={{ marginBottom: { xs: "30px", md: "0px" } }}>
          <Typography component="p" variant="h4" sx={{ color: "#1A80D9" }}>
            24
          </Typography>
          <Typography color="text.secondary" sx={{ flex: 1, fontSize: "12px" }}>
            Open houses
          </Typography>
        </Box>
        <Box sx={{ marginBottom: { xs: "30px", md: "0px" } }}>
          <Typography component="p" variant="h4" sx={{ color: "#1A80D9" }}>
            1,137
          </Typography>
          <Typography color="text.secondary" sx={{ flex: 1, fontSize: "12px" }}>
            Recently sold
          </Typography>
        </Box>
        <Box sx={{ marginBottom: { xs: "30px", md: "0px" } }}>
          <Typography component="p" variant="h4" sx={{ color: "#1A80D9" }}>
            35
          </Typography>
          <Typography color="text.secondary" sx={{ flex: 1, fontSize: "12px" }}>
            Price reduced
          </Typography>
        </Box>
      </Box>
    </box>
  );
}
