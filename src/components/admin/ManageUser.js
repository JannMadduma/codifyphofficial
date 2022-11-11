import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { mainListItems } from "./listItems";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserAction,
  editUserAction,
  setUsers,
} from "../../actions/usersActions";
import { Table } from "react-bootstrap";
import {
  Button,
  ButtonGroup,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import ResponsiveAppBar from "../common/Navbar";
import {
  deleteFreelancer,
  editFreelancer,
  getAllFreelancers,
} from "../../service/userService";

// for Dialog
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

// ----------------------------------------------------

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

function DashboardContent() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [open, setOpen] = React.useState(true);
  // for delete confirm dialog
  const [openConfirm, setOpenConfirm] = React.useState(false);
  // added to map users in the edit textfield
  const [user, setUser] = React.useState({});
  const toggleDrawer = () => {
    setOpen(!open);
  };

  React.useEffect(() => {
    getAllFreelancers().then((res) => {
      dispatch(setUsers(res.data));
    });
  }, []);

  // to delete users
  const handleUserDelete = () => {
    // "deleteFreelancer" is from service,UserService
    deleteFreelancer(user.idNo).then((res) => {
      // "deleteUserAction" is from actions, UsersAction
      dispatch(deleteUserAction({ idNo: user.idNo }));
    });
    handleCloseConfirmDelete();
  };

  // to avoid deleting right away, added dialog for confirm
  const handleOpenConfirmDelete = (i) => {
    setUser(i);
    setOpenConfirm(true);
  };

  const handleCloseConfirmDelete = () => {
    setOpenConfirm(false);
  };

  // dialog for Edit functions
  const [editOpen, setEditOpen] = React.useState(false);
  // (i) is added when mapping to dialog's textfield
  const handleClickOpen = (i) => {
    setUser(i);
    setEditOpen(true);
  };

  const handleClose = () => {
    setEditOpen(false);
  };

  const handleInputChange = (e) => {
    setUser({ ...user, role: e.target.value });
  };

  const handleEdit = () => {
    // "deleteFreelancer" is from service,UserService
    editFreelancer(user.idNo, user).then((res) => {
      // "deleteUserAction" is from actions, UsersAction
      dispatch(editUserAction(user));
    });
    handleClose();
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <ResponsiveAppBar />
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              // px: [1],
            }}
          ></Toolbar>

          <List component="nav">{mainListItems}</List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "calc(100vh - 70px)",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>Users</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell align="right">
                          {/* <Button variant="text">Add Users</Button> */}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Role</TableCell>
                        <TableCell align="right">Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {users.map((row) => (
                        <TableRow key={row.idNo}>
                          <TableCell>{row.idNo}</TableCell>
                          <TableCell>{row.Projectname}</TableCell>
                          <TableCell>{row.email}</TableCell>
                          <TableCell>{row.role}</TableCell>
                          <TableCell align="right">
                            <div
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                "& > *": {
                                  m: 1,
                                },
                              }}
                            >
                              <ButtonGroup
                                variant="text"
                                aria-label="text button group"
                                color="info"
                              >
                                <Button
                                  onClick={() => {
                                    handleClickOpen(row);
                                  }}
                                >
                                  Edit
                                </Button>
                                <Button
                                  onClick={() => {
                                    handleOpenConfirmDelete(row);
                                  }}
                                >
                                  Delete
                                </Button>
                              </ButtonGroup>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
      {/* DIALOG here for input edit items */}
      <Dialog
        open={editOpen}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} idNo="draggable-dialog-title">
          Edit User
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            value={user.Projectname}
            type="text"
            fullWidth
            variant="filled"
            Projectname="Projectname"
            label="Name"
            disabled
          />
          <TextField
            autoFocus
            margin="dense"
            value={user.email}
            type="email"
            fullWidth
            variant="filled"
            Projectname="Projectname"
            label="Email"
            disabled
          />
          <FormControl fullWidth>
            <InputLabel idNo="demo-simple-select-label">Role</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              idNo="demo-simple-select"
              label="Lot Area"
              Projectname="lotArea"
              onChange={handleInputChange}
              value={user.role}
            >
              <MenuItem value={"admin"}>Admin</MenuItem>
              <MenuItem value={"user"}>User</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>

        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleEdit}>Save</Button>
        </DialogActions>
      </Dialog>

      {/* dialog for confirm delete*/}
      <Dialog
        open={openConfirm}
        onClose={handleCloseConfirmDelete}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} idNo="draggable-dialog-title">
          Confirm Delete
        </DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete <strong>{user.Projectname}</strong>
            "?
          </Typography>
        </DialogContent>

        <DialogActions>
          <Button autoFocus onClick={handleCloseConfirmDelete}>
            No
          </Button>
          <Button onClick={handleUserDelete}>Yes</Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}
export default function ManageUsers() {
  return <DashboardContent />;
}
