import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ListingGallery from "./ListGallery";
import Description from "./descriptions";
import TopListing from "../../home/TopListing";
import CallToAction from "../../common/CallToAction";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const pagesAll = [{ Projectname: "Listing", link: "/listing" }];

export default function ListingView() {
  const loggedIn = useSelector((state) => state.loggedIn);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [open, setOpen] = React.useState(false);
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

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  React.useEffect(() => {
    if (loggedIn?.role === "admin") {
      setPages([...pagesAll]);
    } else {
      setPages(pagesAll);
    }
  }, [loggedIn]);

  return (
    <div>
      <Button variant="text" onClick={handleClickOpen}>
        View
      </Button>
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
            {pages.map((page) => (
              <Button
                key={page.Projectname}
                onClick={handleCloseNavMenu}
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
                {page.Projectname}
              </Button>
            ))}
          </Box>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            nowrap
            sx={{ flex: 1 }}
          ></Typography>
          <Button variant="outlined" size="small">
            Edit
          </Button>
          <Button variant="text" onClick={handleClose}>
            save
          </Button>
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

        <Box
          sx={{
            display: "flex",
            alignSelf: "start",
            paddingTop: "30px",
            padding: "0 150px",
          }}
        >
          <ListingGallery />
        </Box>
        <Container>
          <Description />
        </Container>
        <Container sx={{ padding: "50px" }}>
          <TopListing />
        </Container>
        <Container sx={{ paddingBottom: "100px" }}>
          <CallToAction />
        </Container>
      </Dialog>
    </div>
  );
}
