import { Box, Paper } from "@mui/material";
import Container from "@mui/material/Container";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import HotelIcon from "@mui/icons-material/Hotel";
import BathtubIcon from "@mui/icons-material/Bathtub";
import SquareFootIcon from "@mui/icons-material/SquareFoot";

function preventDefault(event) {
  event.preventDefault();
}

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <box>
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
      <Card sx={{ maxWidth: 345, position: "relative" }}>
        <Paper
          variant="outlined"
          sx={{ position: "absolute", top: 8, left: 8, padding: "2px 5px" }}
        >
          NEW - 15 minutes ago
        </Paper>
        <CardMedia component="img" height="194" image="/img/house2.png" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            ₱ TCP
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <HotelIcon /> <BathtubIcon />
            <SquareFootIcon />
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Address
          </Typography>
        </CardContent>
        <hr />
        Property Name
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </box>
  );
}
