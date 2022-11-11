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
    img: "https://www.bachelorsrealty.com.ph/uploads/project/PR1660975468PR2TY/images/0_1660975468.jpg",
    title: "Bed",
  },
  {
    img: "https://www.bachelorsrealty.com.ph/uploads/project/PR1660975468PR2TY/images//1_1660975469.jpg",
    title: "Books",
  },
  {
    img: "https://www.bachelorsrealty.com.ph/uploads/project/PR1660975468PR2TY/images//2_1660975469.jpg",
    title: "Sink",
  },
  {
    img: "https://www.bachelorsrealty.com.ph/uploads/project/PR1660975468PR2TY/images//0_1660975498.jpg",
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

export default function ListingGallery({ project }) {
  const dispatch = useDispatch();
  const [expanded, setExpanded] = React.useState(false);

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
      <Grid container>
        <Grid item xs={7}>
          <Container
            sx={{
              margin: "0px",
              maxWidth: { xs: "100%" },
              padding: { xs: "0px" },
              flexGrow: 0,
              flexShrink: 1,
            }}
          >
            <img
              src={`${project?.img}`}
              srcSet={`${project?.img}`}
              alt={project?.propertyName}
              loading="lazy"
              style={{ width: "100%" }}
            />
            <div>
              <Grid
                container
                sx={{
                  width: "100%",
                  position: "relative",
                  pt: 2,
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
                        {itemData.map((item, index) => (
                          <ImageListItem key={item.img}>
                            <img
                              src={`${item.img}?w=800&fit=crop&auto=format`}
                              srcSet={`${item.img}?w=800&fit=crop&auto=format&dpr=2 2x`}
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
        </Grid>
        <Grid item xs={5}>
          <main>
            <Box
              sx={{
                bgcolor: "background.paper",
                pt: 8,
                pb: 6,
                padding: "0px",
                paddingLeft: 2,
              }}
            >
              <div>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ textAlign: "left" }}
                >
                  ₱{" "}
                  {project?.tcp
                    ?.toString()
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
                  {project?.propertyName}
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
                  {project?.ClientName}
                </Typography>
                <hr />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textAlign: "left" }}
                >
                  {project?.bedRooms}
                  <span> Bedrooms</span>
                  <br />
                  {project?.bathRooms}
                  <span> Bathrooms</span>
                  <br />
                  {project?.lotArea}
                  <span> sqm Floor Area</span>
                </Typography>
              </div>
            </Box>
          </main>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
