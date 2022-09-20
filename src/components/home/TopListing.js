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
import { getAllProperties } from "../../service/propertyService";
import { setProperties } from "../../actions/propertiesActions";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function TopListing() {
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.properties);
  const [expanded, setExpanded] = React.useState(false);
  const loggedIn = useSelector((state) => state.loggedIn);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [step, setStep] = React.useState(0);
  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    } else {
      setStep(2);
    }
  };

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      setStep(0);
    }
  };

  React.useEffect(() => {
    const container = document.querySelector(".scrollListing");
    if (step === 0) {
      container.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } else if (step === 1) {
      container.scrollTo({
        top: 0,
        left: (container.scrollWidth - container.clientWidth) / 2,
        behavior: "smooth",
      });
    } else {
      container.scrollTo({
        top: 0,
        left: container.scrollWidth - container.clientWidth,
        behavior: "smooth",
      });
    }
  }, [step]);

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
      </Box>

      <Box sx={{ position: "relative" }}>
        <Box
          sx={{ width: "100%", overflowX: "hidden", overflowY: "hidden" }}
          className="scrollListing"
        >
          <Grid container columns={9} sx={{ width: "200%" }}>
            {properties.slice(0, 9).map((property) => (
              <Grid item xs={1}>
                <Card sx={{ position: "relative" }} variant="outlined">
                  <Paper
                    variant="outlined"
                    sx={{
                      position: "absolute",
                      top: 8,
                      left: 8,
                      padding: "2px 5px",
                    }}
                  >
                    NEW - 15 minutes ago
                  </Paper>
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
                        overflow: "hidden",
                        textOverflow: "ellipsis",
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
                      overflow: "hidden",
                      textOverflow: "ellipsis",
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
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            position: "absolute",
            top: "calc(50% - 30px)",
            padding: "0px 20px",
          }}
        >
          <IconButton
            aria-label="delete"
            onClick={handleBack}
            sx={{
              background: "white",
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton
            aria-label="delete"
            onClick={handleNext}
            sx={{
              background: "white",
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
