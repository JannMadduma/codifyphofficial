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
} from "../../service/freelancerService";
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
};

const ResponsiveAppBar = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.loggedIn);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [userMenuAnchorEl, setUserMenuAnchorEl] = React.useState(null);
  const [signUpIn, setSignUpIn] = React.useState(null);

  const [freelancer, setFreelancer] = React.useState(userDefaultValue);
  const [error, setError] = React.useState("");
  const [pages, setPages] = React.useState([]);

  const onValueChange = (e) => {
    setFreelancer({ ...freelancer, [e.target.Projectname]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    setError("");
    if (!freelancer.name || !freelancer.email || !freelancer.password) {
      setError("Please fill up necessary fields");
    } else {
      const userToSave = { ...freelancer, likes: [], role: "freelancer" };

      getFreelancerEmail(freelancer.email)
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
    if (!freelancer.email || !freelancer.password) {
      setError("Please fill up necessary fields");
    } else {
      loginFreelancer(freelancer.email, freelancer.password)
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
      component="nav"
      position="fixed"
      sx={{
        height: "80px",
        display: "grid",
        alignContent: "center",
        backgroundColor: "white",
        boxShadow: "none",
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              // paddingLeft: "50px",
            }}
          >
            <img
              alt=""
              src="img/herologo.png"
              style={{ height: "80px", width: "200px" }}
            />
          </Box>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <a style={{ color: "#353C42", fontWeight: "bold" }} href="#home1">
              Home
            </a>
            <a
              style={{ color: "#353C42", fontWeight: "bold" }}
              href="#portfolio"
            >
              Portfolio
            </a>
            <a style={{ color: "#353C42", fontWeight: "bold" }} href="#pricing">
              Pricing
            </a>
            <a style={{ color: "#353C42", fontWeight: "bold" }} href="#aboutUs">
              About Us
            </a>
          </Box>
          {/* {loggedIn?.idNo ? (
            <div>
              <IconButton
                size="large"
                aria-label="account of current freelancer"
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
          ) : ( */}
          {/* <Box sx={{ flexGrow: 0 }}>
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
            </Box> */}
          {/* )} */}

          <Button
            className="Button"
            variant="contained"
            style={{ backgroundColor: "#82C8E1", boxShadow: "none" }}
            // onClick={() => handleClickOpen({})}
          >
            CONTACT US
          </Button>
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
              type="password"
              fullWidth
              variant="standard"
              onChange={(e) => onValueChange(e)}
              name="password"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose}>Cancel</Button>
            <Button
              type={"submit"}
              onClick={signUpIn === "up" ? handleSignup : handleSignin}
              disabled={
                (signUpIn === "up" &&
                  (!freelancer.name ||
                    !freelancer.password ||
                    !freelancer.email)) ||
                !freelancer.password ||
                !freelancer.email
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
