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
  addProperty,
  deleteProperty,
  editProperty,
  getAllProperties,
} from "../../service/propertyService";
import {
  addPropertyAction,
  deletePropertyAction,
  editPropertyAction,
  setProperties,
} from "../../actions/propertiesActions";
import {
  Alert,
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
  Typography,
} from "@mui/material";
import ResponsiveAppBar from "../common/Navbar";
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
  // for delete confirm dialog
  const [openConfirm, setOpenConfirm] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);
  const [error, setError] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleInputChange = (e) => {
    setProperty({ ...property, [e.target.name]: e.target.value });
  };

  const handleClickOpen = (i) => {
    setError(false);
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
    setError(false);

    if (
      !property.propertyName ||
      !property.location ||
      !property.developer ||
      !property.projectType ||
      !property.status ||
      !property.monthly ||
      !property.tcp ||
      !property.bedRooms ||
      !property.bathRooms ||
      !property.lotArea ||
      !property.floorArea
    ) {
      setError(true);
    } else {
      if (property.id) {
        // "deleteUser" is from service,UserService
        editProperty(property.id, { ...property, img: [...property.img] }).then(
          (res) => {
            // "deleteUserAction" is from actions, UsersAction
            console.log(res.data.img);
            dispatch(editPropertyAction(res.data));
          }
        );
        handleClose();
      } else {
        const propertyToAdd = {
          ...property,
          img: property?.img?.length ? property?.img : [],
          status: "Available",
        };

        addProperty(propertyToAdd).then((res) => {
          dispatch(addPropertyAction(res.data));
        });
        handleClose();
      }
    }
  };

  React.useEffect(() => {
    getAllProperties().then((res) => {
      dispatch(setProperties(res.data));
    });
  }, []);

  // to delete Property
  const handlePropertyDelete = () => {
    // "deletePropert" is from service,PropertyService
    deleteProperty(property.id).then((res) => {
      // "deletePropertyAction" is from actions, PropertyAction
      dispatch(deletePropertyAction({ id: property.id }));
    });
    handleCloseConfirmDelete();
  };

  // to avoid deleting right away, added dialog for confirm
  const handleOpenConfirmDelete = (i) => {
    console.log("Confirm detete?");
    setProperty(i);
    setOpenConfirm(true);
  };

  const handleCloseConfirmDelete = () => {
    setOpenConfirm(false);
  };

  const handleImgChange = (e) => {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = function (e) {
      setProperty({ ...property, img: [reader.result] });
    };
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
                        <TableCell></TableCell>
                        <TableCell align="right">
                          <Button
                            variant="text"
                            onClick={() => {
                              handleClickOpen({});
                            }}
                          >
                            Add Property
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Property Name</TableCell>
                        <TableCell>Location</TableCell>
                        <TableCell>Developer</TableCell>
                        <TableCell>TCP</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell align="right">Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {properties.map((row) => (
                        <TableRow key={row?.id}>
                          <TableCell>{row?.id}</TableCell>
                          <TableCell>{row?.propertyName}</TableCell>
                          <TableCell>{row?.location}</TableCell>
                          <TableCell>{row?.developer}</TableCell>
                          <TableCell>
                            {row?.tcp
                              ?.toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </TableCell>
                          <TableCell>{row?.status}</TableCell>

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
      <ViewModal open={openView} setOpen={setOpenView} property={property} />
      <Dialog
        maxWidth="sm"
        fullWidth
        open={editOpen}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          {property.id ? "Edit" : "Add"} Property
        </DialogTitle>
        <DialogContent>
          {error && <Alert severity="error">Please fill-up all fields</Alert>}
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
          <Box
            sx={{
              "& > :not(style)": { mt: 1, width: "50%" },
            }}
          >
            <FormControl fullWidth sx={{ my: 1 }}>
              <InputLabel id="demo-simple-select-label">
                Project Type
              </InputLabel>
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
            <FormControl fullWidth sx={{ my: 1 }}>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Project Type"
                name="status"
                onChange={handleInputChange}
                value={property.status}
              >
                <MenuItem value={"Available"}>Available</MenuItem>
                <MenuItem value={"Sold"}>Sold</MenuItem>
                <MenuItem value={"Re-open"}>Re-open</MenuItem>
              </Select>
            </FormControl>
          </Box>
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
          <Button component="label" variant="outlined" sx={{ mt: 1 }}>
            Upload Image
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleImgChange}
            />
          </Button>

          {!!property?.img?.length && (
            <img
              src={property.img[0]}
              style={{ width: "100%", marginTop: 8 }}
            />
          )}
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
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Confirm Delete
        </DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete{" "}
            <strong>{property?.propertyName}</strong>?
          </Typography>
        </DialogContent>

        <DialogActions>
          <Button autoFocus onClick={handleCloseConfirmDelete}>
            No
          </Button>
          <Button onClick={handlePropertyDelete}>Yes</Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}

export default function ManageProperties() {
  return <DashboardContent />;
}
