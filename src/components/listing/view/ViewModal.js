import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ListingGallery from "./ListGallery";
import Suggestions from "./Suggestions";
import Description from "./descriptions";
import TopListing from "../../home/TopListing";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const pagesAll = [{ name: "Listing", link: "/listing" }];

export default function ViewModal({ open, setOpen, property }) {
  const loggedIn = useSelector((state) => state.loggedIn);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [pages, setPages] = React.useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  React.useEffect(() => {
    if (loggedIn?.role === "admin") {
      setPages([...pagesAll]);
    } else {
      setPages(pagesAll);
    }
  }, [loggedIn]);

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <Toolbar
        sx={{ borderBottom: 1, borderColor: "divider" }}
        style={{ padding: "0 150px" }}
      >
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {/* 
        {pages.map((page) => (
          <Button
            key={page.name}
            onClick={handleClose}
            sx={{
              padding: "0 30px",
              my: 2,
              color: "white",
              display: "block",
              color: "bluegreen",
            }}
            component={Link}
            to={page.link}
          >
            {page.name}
          </Button>
        ))}
      */}
        </Box>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        ></Typography>

        <IconButton
          edge="start"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      ></Toolbar>

      <Container>
        <Box
          sx={{
            display: "flex",
            alignSelf: "start",
          }}
        >
          <ListingGallery property={property} />
        </Box>
      </Container>
      <Container>
        <Description />
      </Container>
      <Container sx={{ paddingBottom: "100px" }}>
        <TopListing />
      </Container>
    </Dialog>
  );
}
