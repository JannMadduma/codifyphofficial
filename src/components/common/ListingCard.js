import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import HotelIcon from "@mui/icons-material/Hotel";
import BathtubIcon from "@mui/icons-material/Bathtub";
import SquareFootIcon from "@mui/icons-material/SquareFoot";

const ListingCard = ({ property, loggedIn }) => {
  return (
    <Card
      sx={{
        "&:hover": {
          boxShadow: 6,
        },
        cursor: "pointer",
        position: "relative",
        borderRadius: "10px",
        margin: "5px 0",
      }}
      variant="outlined"
    >
      <Paper
        variant="outlined"
        sx={{
          position: "absolute",
          top: 8,
          left: 8,
          padding: "2px 5px",
        }}
      ></Paper>
      <CardMedia component="img" height="194" image={property?.img[0]} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ textAlign: "left" }}
        >
          ₱ {property?.tcp?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            textAlign: "left",
            height: "45px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            "-webkit-line-clamp": "2",
            "-webkit-box-orient": "vertical",
          }}
        >
          {property?.propertyName}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: "left", padding: "10px 0" }}
        >
          {property?.bedRooms}
          <IconButton aria-label="delete" size="small">
            <HotelIcon fontSize="inherit" />
          </IconButton>
          {property?.bathRooms}
          <IconButton aria-label="delete" size="small">
            <BathtubIcon fontSize="inherit" />
          </IconButton>
          {property?.lotArea}
          <IconButton aria-label="delete" size="small">
            <SquareFootIcon fontSize="inherit" />
          </IconButton>
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            textAlign: "left",
            height: "60px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            "-webkit-line-clamp": "2",
            "-webkit-box-orient": "vertical",
          }}
        >
          {property?.location}
        </Typography>

        <hr />
        {loggedIn?.id && (
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites" size="small">
              <FavoriteIcon fontSize="inherit" />
            </IconButton>
            <IconButton aria-label="share" size="small">
              <ShareIcon fontSize="inherit" />
            </IconButton>
          </CardActions>
        )}
      </CardContent>
    </Card>
  );
};

export default ListingCard;
