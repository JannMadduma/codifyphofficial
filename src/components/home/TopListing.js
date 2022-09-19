import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";

function preventDefault(event) {
  event.preventDefault();
}

export default function TopListing() {
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
              Tops listed homes
            </Typography>
          </Container>
        </Box>
      </main>
    </box>
  );
}
