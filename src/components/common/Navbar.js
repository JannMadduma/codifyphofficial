import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
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
import DialogTitle from "@mui/material/DialogTitle";
import { addUser, getUserEmail, loginUser } from "../../service/userService";
import { AccountCircle } from "@mui/icons-material";
import { Alert } from "@mui/material";
import { setLoggedIn } from "../../actions/loggedInActions";
import { Link } from "react-router-dom";

const pagesAll = [{ name: "Listing", link: "/listing" }];
const pagesAdmin = [{ name: "Manage", link: "/manageproperties" }];

const userDefaultValue = {
  name: "",
  email: "",
  password: "",
  likes: [],
};

const ResponsiveAppBar = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.loggedIn);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [userMenuAnchorEl, setUserMenuAnchorEl] = React.useState(null);
  const [signUpIn, setSignUpIn] = React.useState(null);

  const [user, setUser] = React.useState(userDefaultValue);
  const [error, setError] = React.useState("");
  const [pages, setPages] = React.useState([]);

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    const userToSave = { ...user };

    setError("");
    getUserEmail(user.email)
      .then((res) => {
        if (res?.data?.length) {
          setError("This email is already been used");
        } else {
          addUser(userToSave);
          handleDialogClose();
        }
      })
      .catch(() => setError("Something went wrong. Please try later"));
  };

  const handleSignin = () => {
    setError("");
    loginUser(user.email, user.password)
      .then((res) => {
        console.log(res);
        if (!res?.data?.length) {
          setError("Incorrect email or password");
        } else {
          dispatch(setLoggedIn(res.data[0]));
          handleDialogClose();
        }
      })
      .catch((err) => {
        setError("Something went wrong. Please try later");
      });
  };

  const handleLogout = () => {
    handleUserMenuClose();
    dispatch(setLoggedIn({}));
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [open, setOpen] = React.useState(false);

  const handleDialogOpen = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  const handleUserMenuOpen = (event) => {
    setUserMenuAnchorEl(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setUserMenuAnchorEl(null);
  };

  React.useEffect(() => {
    if (loggedIn?.role === "admin") {
      setPages([...pagesAll, ...pagesAdmin]);
    } else {
      setPages(pagesAll);
    }
  }, [loggedIn]);

  return (
    <AppBar position="static" style={{ background: "white", color: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to={"/"}>
            <Avatar alt="Photo" src="/img/logo.png" variant="square" />
          </Link>
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
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block", color: "black" }}
                component={Link}
                to={page.link}
              >
                {page.name}
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
                  vertical: "bottom",
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
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          ) : (
            <Box sx={{ flexGrow: 0 }}>
              <Button
                variant="contained"
                sx={{ marginRight: 1 }}
                onClick={() => {
                  setSignUpIn("in");
                  handleDialogOpen();
                }}
              >
                Login
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  setSignUpIn("up");
                  handleDialogOpen();
                }}
              >
                Register
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>

      <Dialog open={open} onClose={handleDialogClose}>
        <DialogTitle>{signUpIn === "up" ? "Sign Up" : "Sign In"}</DialogTitle>
        <DialogContent>
          {error && <Alert severity="error">{error}</Alert>}
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
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button
            onClick={signUpIn === "up" ? handleSignup : handleSignin}
            disabled={
              (signUpIn === "up" &&
                (!user.name || !user.password || !user.email)) ||
              !user.password ||
              !user.email
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
