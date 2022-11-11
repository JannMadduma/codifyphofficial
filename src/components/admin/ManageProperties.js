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
  addProject,
  deleteProject,
  editProject,
  getAllProjects,
} from "../../service/projectService";
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
  const projects = useSelector((state) => state.projects);
  const [open, setOpen] = React.useState(true);
  const [project, setProject] = React.useState({});
  const [openView, setOpenView] = React.useState(false);
  // for delete confirm dialog
  const [openConfirm, setOpenConfirm] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);
  const [error, setError] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleInputChange = (e) => {
    setProject({ ...project, [e.target.Projectname]: e.target.value });
  };

  const handleClickOpen = (i) => {
    setError(false);
    setProject(i);
    setEditOpen(true);
  };

  const handleClose = () => {
    setEditOpen(false);
  };

  const handleOpenView = (i) => {
    setProject(i);
    setOpenView(true);
  };

  const handleCloseView = () => {
    setOpenView(false);
  };

  const handleEdit = () => {
    setError(false);

    if (
      !project.projectName ||
      !project.ClientName ||
      !project.developer ||
      !project.projectType ||
      !project.status ||
      !project.monthly ||
      !project.tcp ||
      !project.bedRooms ||
      !project.bathRooms ||
      !project.lotArea ||
      !project.floorArea
    ) {
      setError(true);
    } else {
      if (project.idNo) {
        // "deleteFreelancer" is from service,UserService
        editProject(project.idNo, {
          ...project,
          img: [...project.img],
        }).then((res) => {
          // "deleteUserAction" is from actions, UsersAction
          console.log(res.data.img);
          dispatch(editPropertyAction(res.data));
        });
        handleClose();
      } else {
        const projectToAdd = {
          ...project,
          img: project?.img?.length ? project?.img : [],
          status: "Available",
        };

        addProject(projectToAdd).then((res) => {
          dispatch(addPropertyAction(res.data));
        });
        handleClose();
      }
    }
  };

  React.useEffect(() => {
    getAllProjects().then((res) => {
      dispatch(setProperties(res.data));
    });
  }, []);

  // to delete Property
  const handlePropertyDelete = () => {
    // "deletePropert" is from service,PropertyService
    deleteProject(project.idNo).then((res) => {
      // "deletePropertyAction" is from actions, PropertyAction
      dispatch(deletePropertyAction({ idNo: project.idNo }));
    });
    handleCloseConfirmDelete();
  };

  // to avoid deleting right away, added dialog for confirm
  const handleOpenConfirmDelete = (i) => {
    console.log("Confirm detete?");
    setProject(i);
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
      setProject({ ...project, img: [reader.result] });
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
                        <TableCell>PROJECTS</TableCell>
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
                            Add Project
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Project Name</TableCell>
                        <TableCell>Client Name</TableCell>
                        <TableCell>Design</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>isPending</TableCell>
                        <TableCell align="right">Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {projects.map((row) => (
                        <TableRow key={row?.idNo}>
                          <TableCell>{row?.idNo}</TableCell>
                          <TableCell>{row?.projectName}</TableCell>
                          <TableCell>{row?.ClientName}</TableCell>
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
      <ViewModal open={openView} setOpen={setOpenView} project={project} />
      <Dialog
        maxWidth="sm"
        fullWidth
        open={editOpen}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} idNo="draggable-dialog-title">
          {project.idNo ? "Edit" : "Add"} Property
        </DialogTitle>
        <DialogContent>
          {error && <Alert severity="error">Please fill-up all fields</Alert>}
          <TextField
            autoFocus
            margin="dense"
            value={project?.projectName}
            type="text"
            fullWidth
            variant="outlined"
            Projectname="projectName"
            label="Name"
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            value={project?.ClientName}
            type="text"
            fullWidth
            variant="outlined"
            Projectname="ClientName"
            label="Location"
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            value={project?.developer}
            type="text"
            fullWidth
            variant="outlined"
            Projectname="developer"
            label="Developer"
            onChange={handleInputChange}
          />
          <Box
            sx={{
              "& > :not(style)": { mt: 1, width: "50%" },
            }}
          >
            <FormControl fullWidth sx={{ my: 1 }}>
              <InputLabel idNo="demo-simple-select-label">
                Project Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                idNo="demo-simple-select"
                label="Project Type"
                Projectname="projectType"
                onChange={handleInputChange}
                value={project.projectType}
              >
                <MenuItem value={"Pre-selling"}>Pre-selling</MenuItem>
                <MenuItem value={"RFO"}>RFO</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ my: 1 }}>
              <InputLabel idNo="demo-simple-select-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                idNo="demo-simple-select"
                label="Project Type"
                Projectname="status"
                onChange={handleInputChange}
                value={project.status}
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
              value={project?.monthly}
              type="number"
              fullWidth
              variant="outlined"
              Projectname="monthly"
              label="Monthly"
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              value={project?.tcp}
              type="number"
              fullWidth
              variant="outlined"
              Projectname="tcp"
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
              value={project?.bedRooms}
              type="number"
              fullWidth
              variant="outlined"
              Projectname="bedRooms"
              label="Bed Rooms"
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              value={project?.bathRooms}
              type="number"
              fullWidth
              variant="outlined"
              Projectname="bathRooms"
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
              value={project?.lotArea}
              type="number"
              fullWidth
              variant="outlined"
              Projectname="lotArea"
              label="Lot Area"
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              value={project?.floorArea}
              type="number"
              fullWidth
              variant="outlined"
              Projectname="floorArea"
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

          {!!project?.img?.length && (
            <img src={project.img[0]} style={{ width: "100%", marginTop: 8 }} />
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
        <DialogTitle style={{ cursor: "move" }} idNo="draggable-dialog-title">
          Confirm Delete
        </DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete{" "}
            <strong>{project?.projectName}</strong>?
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
