import { Box, Grid, Paper } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import Container from "@mui/material/Container";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { getAllProperties } from "../../service/propertyService";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ListingCard from "../common/ListingCard";
import ViewModal from "../listing/view/ViewModal";

export default function TopListing() {
  const [properties, setProperties] = React.useState([]);
  const [expanded, setExpanded] = React.useState(false);
  const loggedIn = useSelector((state) => state.loggedIn);

  const [property, setProperty] = React.useState({});
  const [openView, setOpenView] = React.useState(false);

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
      setProperties(res.data);
    });
  }, []);

  const handleOpenView = (i) => {
    setProperty(i);
    setOpenView(true);
  };

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
              <Grid item xs={1} sx={{ padding: "0px 5px" }}>
                <Box
                  onClick={() => {
                    handleOpenView(property);
                  }}
                >
                  <ListingCard property={property} loggedIn={loggedIn} />
                </Box>
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

      <ViewModal open={openView} setOpen={setOpenView} property={property} />
    </Box>
  );
}
