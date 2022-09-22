import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ListingGallery from "./ListGallery";
import Description from "./descriptions";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

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
          <Link to={"/"}>
            <Avatar alt="Photo" src="/img/logo.png" variant="square" />
          </Link>
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
        <Box color="gray" align="center" noWrap sx={{ flex: 1 }}>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <FavoriteIcon sx={{ padding: "2px" }} />
          </IconButton>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <ShareIcon sx={{ padding: "2px" }} />
          </IconButton>
        </Box>

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
      <Container sx={{ paddingBottom: "50px" }}>
        <Description />
      </Container>
    </Dialog>
  );
}
