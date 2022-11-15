import * as React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import {
  AppBar,
  Avatar,
  Checkbox,
  Container,
  createTheme,
  CssBaseline,
  Dialog,
  DialogContent,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useDispatch, useSelector } from "react-redux";

import { setFreelancers } from "../../../actions/FreelancersAction";
import { loginUser } from "../../../service/FreelancersService";
import { useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        condifyph
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const userDefaultValue = {
  name: "",
  email: "",
  password: "",
};

export default function SignInButton() {
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const [user, setUser] = React.useState(userDefaultValue);
  const [open, setOpen] = React.useState(false);
  const handleDialogOpen = () => {
    setOpen(true);
  };
  const handleDialogClose = () => {
    setOpen(false);
  };

  const [error, setError] = React.useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!user.email || !user.password) {
      setError("Please fill up necessary fields");
    } else {
      loginUser(user.email, user.password)
        .then((res) => {
          console.log(res);
          if (!res?.data?.length) {
            setError("Incorrect email or password");
          } else {
            dispatch(setFreelancers(res.data[0]));
            handleDialogClose();
          }
        })
        .catch((err) => {
          setError("Something went wrong. Please try later");
        });
      navigate("/clients");
    }
  };

  // React.useEffect(() => {
  //   if (loggedIn?.role === "admin") {
  //     setPages([...pagesAll, ...pagesAdmin]);
  //   } else {
  //     setPages(pagesAll);
  //   }
  // }, [loggedIn]);

  return (
    <div>
      <Box>
        <Container sx={{ height: "100%" }}>
          <Grid
            container
            spacing={2}
            sx={{ height: "100%", alignContent: "center" }}
          >
            <Grid item xs={12}>
              <Box
                sx={{
                  backgroundColor: "#56C6F4",
                  height: "200px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  component="h3"
                  variant="h3"
                  align="center"
                  color="white"
                  sx={{
                    fontFamily: "Poppins",
                  }}
                >
                  <strong>codifyph</strong>
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box
                sx={{
                  height: "200px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  paddingTop: "50px",
                }}
              >
                <Button
                  sx={{ width: 200 }}
                  className="Button"
                  variant="contained"
                  size="large"
                  style={{
                    backgroundColor: "#C2E9F2",
                    boxShadow: "-1px 1px 13px 0px rgba(194,233,242,1)",
                    webkitBoxShadow: " -1px 1px 13px 0px rgba(194,233,242,1)",
                    mozBoxShadow: "-1px 1px 13px 0px rgba(194,233,242,1)",
                    color: "#404040",
                  }}
                  onClick={() => {
                    handleDialogOpen();
                  }}
                >
                  Login
                </Button>
                <Typography
                  color="#404040"
                  variant="h6"
                  style={{
                    marginTop: "10px",
                    paddingTop: "50px",
                  }}
                >
                  Client and Project Management page
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Dialog open={open} onClose={handleDialogClose}>
        <DialogContent>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                marginTop: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  marginTop: 3,
                  marginBottom: 3,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography component="h1" variant="h2" color="#56C6F4">
                  Login
                </Typography>
                <Typography component="h1" variant="h4" color="#56C6F4">
                  Sign in to continue
                </Typography>
              </Box>
            </Box>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                {error && <span>{error}</span>}
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={(e) => onValueChange(e)}
                  autoFocus
                />
                <TextField
                  autoFocus
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(e) => onValueChange(e)}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, backgroundColor: "#77C7D9" }}
                >
                  Sign In
                </Button>
              </Box>
              <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
          </ThemeProvider>
        </DialogContent>
      </Dialog>
    </div>
  );
}
