import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  addFreelancer,
  getFreelancerEmail,
  loginFreelancer,
} from "../../service/userService";
import { AccountCircle } from "@mui/icons-material";
import { Alert } from "@mui/material";
import { setLoggedIn } from "../../actions/loggedInActions";
import { Link } from "react-router-dom";

const pagesAll = [{ Projectname: "Listing", link: "/listing" }];
const pagesAdmin = [{ Projectname: "Manage", link: "/manageproperties" }];

const userDefaultValue = {
  Projectname: "",
  email: "",
  password: "",
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
    setUser({ ...user, [e.target.Projectname]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    setError("");
    if (!user.Projectname || !user.email || !user.password) {
      setError("Please fill up necessary fields");
    } else {
      const userToSave = { ...user, likes: [], role: "user" };

      getFreelancerEmail(user.email)
        .then((res) => {
          if (res?.data?.length) {
            setError("This email is already been used");
          } else {
            addFreelancer(userToSave);
            handleDialogClose();
          }
        })
        .catch(() => setError("Something went wrong. Please try later"));
    }
  };

  const handleSignin = (e) => {
    e.preventDefault();

    setError("");
    if (!user.email || !user.password) {
      setError("Please fill up necessary fields");
    } else {
      loginFreelancer(user.email, user.password)
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
    }
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
    <AppBar
      position="static"
      style={{ background: "white", color: "black", padding: "0 150px" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to={"/"}>
            <Avatar alt="Photo" src="/img/logo.png" variant="square" />
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.Projectname}
                onClick={handleCloseNavMenu}
                sx={{
                  padding: "0 20px",
                  my: 2,
                  color: "white",
                  display: "block",
                  color: "#1A80D9",
                }}
                component={Link}
                to={page.link}
              >
                {page.Projectname}
              </Button>
            ))}
          </Box>
          {loggedIn?.idNo ? (
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
                idNo="menu-appbar"
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
                variant="text"
                sx={{ marginRight: 1 }}
                onClick={() => {
                  setSignUpIn("in");
                  handleDialogOpen();
                }}
              >
                Login
              </Button>
              <Button
                variant="outlined"
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
        <form onSubmit={signUpIn === "up" ? handleSignup : handleSignin}>
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
                Projectname="Projectname"
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
              Projectname="email"
            />
            <TextField
              autoFocus
              margin="dense"
              label="Password"
              type="password"
              fullWidth
              variant="standard"
              onChange={(e) => onValueChange(e)}
              Projectname="password"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose}>Cancel</Button>
            <Button
              type={"submit"}
              onClick={signUpIn === "up" ? handleSignup : handleSignin}
              disabled={
                (signUpIn === "up" &&
                  (!user.Projectname || !user.password || !user.email)) ||
                !user.password ||
                !user.email
              }
            >
              {signUpIn === "up" ? "Sign Up" : "Sign In"}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </AppBar>
  );
};
export default ResponsiveAppBar;
