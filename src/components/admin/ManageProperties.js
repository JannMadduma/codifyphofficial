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
import { editProperty, getAllProperties } from "../../service/propertyService";
import {
  editPropertyAction,
  setProperties,
} from "../../actions/propertiesActions";
import {
  Button,
  ButtonGroup,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import ResponsiveAppBar from "../common/Navbar";
import ListingView from "../listing/view/ListingView";
import ViewModal from "../listing/view/ViewModal";

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
  const properties = useSelector((state) => state.properties);
  const [open, setOpen] = React.useState(true);
  const [property, setProperty] = React.useState({});
  const [openView, setOpenView] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleInputChange = (e) => {
    setProperty({ ...property, [e.target.name]: e.target.value });
  };

  const handleClickOpen = (i) => {
    setProperty(i);
    setEditOpen(true);
  };

  const handleClose = () => {
    setEditOpen(false);
  };

  const handleOpenView = (i) => {
    setProperty(i);
    setOpenView(true);
  };

  const handleCloseView = () => {
    setOpenView(false);
  };

  const handleEdit = () => {
    // "deleteUser" is from service,UserService
    editProperty(property.id, property).then((res) => {
      // "deleteUserAction" is from actions, UsersAction
      dispatch(editPropertyAction(property));
    });
    handleClose();
  };

  React.useEffect(() => {
    getAllProperties().then((res) => {
      dispatch(setProperties(res.data));
    });
  }, []);

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
              px: [1],
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
                        <TableCell>Properties</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell align="right">
                          <Button variant="text">Add Property</Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Property Name</TableCell>
                        <TableCell>Location</TableCell>
                        <TableCell>Developer</TableCell>
                        <TableCell>TCP</TableCell>
                        <TableCell align="right">Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {properties.map((row) => (
                        <TableRow key={row.id}>
                          <TableCell>{row.id}</TableCell>
                          <TableCell>{row.propertyName}</TableCell>
                          <TableCell>{row.location}</TableCell>
                          <TableCell>{row.developer}</TableCell>
                          <TableCell>
                            {row.tcp
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </TableCell>

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
                                    handleOpenView(row);
                                  }}
                                >
                                  View
                                </Button>
                                <Button
                                  onClick={() => {
                                    handleClickOpen(row);
                                  }}
                                >
                                  Edit
                                </Button>
                                <Button>Delete</Button>
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
      <ViewModal open={openView} setOpen={setOpenView} property={property} />
      <Dialog
        maxWidth="sm"
        fullWidth
        open={editOpen}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Edit Property
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            value={property?.propertyName}
            type="text"
            fullWidth
            variant="outlined"
            name="propertyName"
            label="Name"
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            value={property?.location}
            type="text"
            fullWidth
            variant="outlined"
            name="location"
            label="Location"
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            value={property?.developer}
            type="text"
            fullWidth
            variant="outlined"
            name="developer"
            label="Developer"
            onChange={handleInputChange}
          />
          <FormControl fullWidth sx={{ my: 1 }}>
            <InputLabel id="demo-simple-select-label">Project Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Project Type"
              name="projectType"
              onChange={handleInputChange}
              value={property.projectType}
            >
              <MenuItem value={"Pre-selling"}>Pre-selling</MenuItem>
              <MenuItem value={"RFO"}>RFO</MenuItem>
            </Select>
          </FormControl>
          <Box
            sx={{
              "& > :not(style)": { mt: 1, width: "50%" },
            }}
          >
            <TextField
              margin="dense"
              value={property?.monthly}
              type="number"
              fullWidth
              variant="outlined"
              name="monthly"
              label="Monthly"
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              value={property?.tcp}
              type="number"
              fullWidth
              variant="outlined"
              name="tcp"
              label="TCP"
              onChange={handleInputChange}
            />
          </Box>
          <Box
            sx={{
              "& > :not(style)": { mt: 1, width: "50%" },
            }}
          >
            <TextField
              margin="dense"
              value={property?.bedRooms}
              type="number"
              fullWidth
              variant="outlined"
              name="bedRooms"
              label="Bed Rooms"
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              value={property?.bathRooms}
              type="number"
              fullWidth
              variant="outlined"
              name="bathRooms"
              label="Bath Rooms"
              onChange={handleInputChange}
            />
          </Box>
          <Box
            sx={{
              "& > :not(style)": { mt: 1, width: "50%" },
            }}
          >
            <TextField
              margin="dense"
              value={property?.lotArea}
              type="number"
              fullWidth
              variant="outlined"
              name="lotArea"
              label="Lot Area"
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              value={property?.floorArea}
              type="number"
              fullWidth
              variant="outlined"
              name="floorArea"
              label="Floor Area"
              onChange={handleInputChange}
            />
          </Box>
        </DialogContent>

        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleEdit}>Save</Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}

export default function ManageProperties() {
  return <DashboardContent />;
}
