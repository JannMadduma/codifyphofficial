import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from "@mui/material/DialogTitle";
import { addUser } from "../../service/userService";
import { AccountCircle } from "@mui/icons-material";

const pages = ["Buy", "Home Loans"];

const userCapturedVal = {
  name: "",
  email: "",
  password: "",
};

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [userMenuAnchorEl, setUserMenuAnchorEl] = React.useState(null);
  const [signUpIn, setSignUpIn] = React.useState(null);
  const loggedIn = {};

  const [user, setUser] = React.useState(userCapturedVal);

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const handleSignup = async () => {
    const userToSave = { ...user };

    await addUser(userToSave);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUserMenuOpen = (event) => {
    setUserMenuAnchorEl(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setUserMenuAnchorEl(null);
  };

  return (
    <AppBar position="static" style={{ background: "white", color: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar alt="Photo" src="/img/logo.png" variant="square" />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "transparent",
              textDecoration: "none",
            }}
          ></Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block", color: "black" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {loggedIn?.id ? (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleUserMenuOpen}
                color="primary"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={userMenuAnchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(userMenuAnchorEl)}
                onClose={handleUserMenuClose}
              >
                <MenuItem onClick={handleUserMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleUserMenuClose}>My account</MenuItem>
              </Menu>
            </div>
          ) : (
            <Box sx={{ flexGrow: 0 }}>
              <Button
                variant="contained"
                sx={{ marginRight: 1 }}
                onClick={() => {
                  setSignUpIn("in");
                  handleClickOpen();
                }}
              >
                Login
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  setSignUpIn("up");
                  handleClickOpen();
                }}
              >
                Register
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{signUpIn === "up" ? "Sign Up" : "Sign In"}</DialogTitle>
        <DialogContent>
          {signUpIn === "up" && (
            <TextField
              autoFocus
              margin="dense"
              label="Name"
              type="email"
              fullWidth
              variant="standard"
              onChange={(e) => onValueChange(e)}
              name="name"
            />
          )}
          <TextField
            autoFocus
            margin="dense"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            onChange={(e) => onValueChange(e)}
            name="email"
          />
          <TextField
            autoFocus
            margin="dense"
            label="Password"
            type="email"
            fullWidth
            variant="standard"
            onChange={(e) => onValueChange(e)}
            name="password"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={signUpIn === "up" ? handleSignup : handleSignup}
            disabled={
              (!user.email && signUpIn === "in") || !user.password || !user.name
            }
          >
            {signUpIn === "up" ? "Sign Up" : "Sign In"}
          </Button>
        </DialogActions>
      </Dialog>
    </AppBar>
  );
};
export default ResponsiveAppBar;
