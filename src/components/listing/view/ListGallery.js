import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import IconButton from "@mui/material/IconButton";
import { Container, createTheme } from "@mui/system";
import { ThemeProvider } from "@emotion/react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  createMuiTheme,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import HotelIcon from "@mui/icons-material/Hotel";
import BathtubIcon from "@mui/icons-material/Bathtub";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import { useDispatch, useSelector } from "react-redux";

import CardActions from "@mui/material/CardActions";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
  },
];

const theme = createMuiTheme();

export default function ListingGallery() {
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
    const container = document.querySelector(".scrollGallery");
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

  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          margin: "0px",
          maxWidth: { xs: "100%" },
          padding: { xs: "0px" },
          paddingLeft: { xs: "70px" },
        }}
      >
        <div>
          <Grid
            container
            sx={{
              width: "100%",
              position: "relative",
            }}
          >
            <Grid xs={12}>
              <Box
                className="scrollGallery"
                sx={{
                  width: "100%",
                  overflowX: "hidden",
                  overflowY: "hidden",
                }}
              >
                <Box
                  sx={{
                    width: "200%",
                  }}
                >
                  <ImageList variant="masonry" cols={10} gap={8}>
                    {itemData.map((item) => (
                      <ImageListItem key={item.img}>
                        <img
                          src={`${item.img}?w=248&fit=crop&auto=format`}
                          srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                          alt={item.title}
                          loading="lazy"
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
                </Box>
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
            </Grid>
          </Grid>
        </div>
      </Container>
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
            padding: "0px",
          }}
        >
          <Container>
            {properties.slice(0, 1).map((property) => (
              <div>
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
                  {property.location}
                </Typography>
                <hr />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textAlign: "left" }}
                >
                  {property.bedRooms}
                  <span> Bedrooms</span>
                  <br />
                  {property.bathRooms}
                  <span> Bathrooms</span>
                  <br />
                  {property.lotArea}
                  <span> sqm Floor Area</span>
                </Typography>
              </div>
            ))}
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}
