import { Box, Paper } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import Container from "@mui/material/Container";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
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
import { useEffect } from "react";
import { getAllProperties } from "../../service/propertyService";
import { setProperties } from "../../actions/propertiesActions";

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

export default function TopListing() {
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.properties);
  const [expanded, setExpanded] = React.useState(false);
  const loggedIn = useSelector((state) => state.loggedIn);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    getAllProperties().then((res) => {
      dispatch(setProperties(res.data));
    });
  }, []);

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
      {properties.map((property) => (
        <Card sx={{ maxWidth: 345, position: "relative" }}>
          <Paper
            variant="outlined"
            sx={{ position: "absolute", top: 8, left: 8, padding: "2px 5px" }}
          >
            NEW - 15 minutes ago
          </Paper>
          <CardMedia component="img" height="194" image={property.img} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              ₱ {property.tcp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {property.bedRooms}
              <HotelIcon /> {property.bathRooms}
              <BathtubIcon />
              {property.lotArea}
              <SquareFootIcon />
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {property.location}
            </Typography>
          </CardContent>
          <hr />
          {property.propertyName}
          {loggedIn?.id && (
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          )}
        </Card>
      ))}
    </box>
  );
}
