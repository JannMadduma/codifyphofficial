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
import { deleteUserAction, setUsers } from "../../actions/usersActions";
import { Table } from "react-bootstrap";
import {
  Button,
  ButtonGroup,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import ResponsiveAppBar from "../common/Navbar";
import { deleteUser, getAllUsers } from "../../service/userService";

// for Dialog
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

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
    // added to map users in the edit textfield
    const [user, setUser] = React.useState({});
  const toggleDrawer = () => {
    setOpen(!open);
  };

  React.useEffect(() => {
    getAllUsers().then((res) => {
      dispatch(setUsers(res.data));
    });
  }, []);


// to delete users
const handleUserDelete = async (id) =>{
  // "deleteUser" is from service,UserService
deleteUser(id)
.then((res) => {
      // "deleteUserAction" is from actions, UsersAction
  dispatch(deleteUserAction({id:id}));
})
}

// dialog for Edit functions
const [editOpen, setEditOpen] = React.useState(false);
      // (i) is added when mapping to dialog's textfield
  const handleClickOpen = (i) => {
    setUser(i)
    setEditOpen(true);
  };

  const handleClose = () => {
    setEditOpen(false);
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
                        <TableCell></TableCell>
                        <TableCell align="right">
                          <Button variant="text">Add Users</Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Password</TableCell>
                        <TableCell>Role</TableCell>
                        <TableCell align="right">Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {users.map((row) => (
                        <TableRow key={row.id}>
                          <TableCell>{row.id}</TableCell>
                          <TableCell>{row.name}</TableCell>
                          <TableCell>{row.email}</TableCell>
                          <TableCell>{row.password}</TableCell>
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
                                <Button>View</Button>
                                <Button onClick={() => {handleClickOpen(row)}
                                  }>Edit</Button>
                                <Button onClick={()=> {handleUserDelete(row.id)}}>Delete</Button>
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
                                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                                  Edit User
                                </DialogTitle>
                                <DialogContent>                    
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    value={user.name}
                                    type="email"
                                    fullWidth
                                    variant="standard"
                                    name="name"
                                    disabled
                                  /> 
                                    <TextField
                                    autoFocus
                                    margin="dense"
                                    value={user.email}
                                    type="email"
                                    fullWidth
                                    variant="standard"
                                    name="name"
                                    disabled
                                  /> 
                                   <TextField
                                    autoFocus
                                    margin="dense"
                                    value={user.password}
                                    type="email"
                                    fullWidth
                                    variant="standard"
                                    name="name"
                                  /> 
                                    <TextField
                                    autoFocus
                                    margin="dense"
                                    value={user.role}
                                    type="email"
                                    fullWidth
                                    variant="standard"
                                    name="name"
                                  /> 
                                </DialogContent>

                                <DialogActions>
                                  <Button autoFocus onClick={handleClose}>
                                    Cancel
                                  </Button>
                                  <Button onClick={handleClose}>Save</Button>
                                </DialogActions>
                              </Dialog>
                      </ThemeProvider>
                   );
                }
export default function ManageUsers() {
  return <DashboardContent />;
}
