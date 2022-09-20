import { Box, Grid, Paper } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import Container from "@mui/material/Container";
import * as React from "react";
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
import { getAllProperties } from "../../../service/propertyService";
import { setProperties } from "../../../actions/propertiesActions";


export default function List() {
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.properties);
  const loggedIn = useSelector((state) => state.loggedIn);

  useEffect(() => {
    getAllProperties().then((res) => {
      dispatch(setProperties(res.data));
    });
  }, []);

  return (
    <Box>
      <Box>
        <main>
          <Box
            sx={{
              bgcolor: "background.paper",
              pt: 8,
              pb: 6
            }}
          >
            <Container>
              <Typography
                component="h1"
                variant="h5"
                align="left"
                color="text.primary"
                gutterBottom
              >
                All Properties
              </Typography>
            </Container>
          </Box>
        </main>
      </Box>

      <Box sx={{ position: "relative" }}>
        <Box>
          <Grid container columns={5} sx={{ width: "100%", m: 5, gap: 1 }}>
            {properties.slice(0, 100).map((property) => (
              <Grid item xs={1}>
                <Card sx={{ position: "relative" }} variant="outlined">
                  <CardMedia
                    component="img"
                    height="194"
                    image={property.img[0]}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ textAlign: "left" }}
                    >
                      ₱{" "}
                      {property.tcp
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ textAlign: "left" }}
                    >
                      {property.bedRooms}
                      <HotelIcon /> {property.bathRooms}
                      <BathtubIcon />
                      {property.lotArea}
                      <SquareFootIcon />
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        textAlign: "left",
                        height: "45px",
                        display: "-webkit-box",
                        "-webkit-line-clamp": "2",
                        "-webkit-box-orient": "vertical",
                      }}
                    >
                      {property.location}
                    </Typography>
                  </CardContent>
                  <hr />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      textAlign: "left",
                      height: "45px",
                      display: "-webkit-box",
                      "-webkit-line-clamp": "2",
                      "-webkit-box-orient": "vertical",
                    }}
                  >
                    {property.propertyName}
                  </Typography>
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
              </Grid>
            ))}
          </Grid>
        </Box>

      </Box>
    </Box>
  );
}
