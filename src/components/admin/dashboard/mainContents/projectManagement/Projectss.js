import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DoneIcon from "@mui/icons-material/Done";
import { useDispatch, useSelector } from "react-redux";
import {
  Alert,
  Avatar,
  Button,
  ButtonGroup,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  List,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";

import {
  addProjectAction,
  approveProjecAction,
  deleteProjectAction,
  editProjectAction,
  setProjects,
} from "actions/ProjectActions";
import { SidebarContents } from "components/admin/dashboard/sidebarContents/SidebarContents";
import { getAllClients } from "service/ClientService";
import { setClients } from "actions/ClientActions";
import AdminHeader from "components/admin/AdminHeader";
import {
  addProjects,
  deleteProjects,
  editProjects,
  getAllProjects,
} from "service/ProjectService";

const mdTheme = createTheme();

export default function Projectss({ isPending }) {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects);
  const clients = useSelector((state) => state.clients);
  const [projectDetails, setProjectDetails] = React.useState({});
  const [openConfirm, setOpenConfirm] = React.useState(false);
  const [openConfirmDelete, setOpenConfirmDelete] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);
  const [error, setError] = React.useState(false);

  const getClientName = (id) => {
    console.log(id);
    console.log(clients);
    return clients?.find((c) => parseInt(c.id) === parseInt(id))?.name || id;
  };

  const handleInputChange = (e) => {
    setProjectDetails({ ...projectDetails, [e.target.name]: e.target.value });
  };

  const handleImgChange = (e) => {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = function (e) {
      setProjectDetails({ ...projectDetails, GanteChartPic: reader.result });
    };
  };

  const handleClickOpen = (i) => {
    console.log(i);
    setError(false);
    setProjectDetails(i);
    setEditOpen(true);
  };

  const handleClose = () => {
    setEditOpen(false);
  };

  const handleEdit = () => {
    setError(false);
    console.log(projectDetails);
    if (
      !projectDetails.Projectname ||
      !projectDetails.ClientName ||
      !projectDetails.GanteChartPic ||
      !projectDetails.status
    ) {
      setError(true);
    } else {
      if (projectDetails.id) {
        const editedProjectDetails = {
          ...projectDetails,
          GanteChartPic: projectDetails.GanteChartPic,
        };

        delete editedProjectDetails.id;
        delete editedProjectDetails.created_at;
        delete editedProjectDetails.updated_at;

        editProjects(projectDetails.id, editedProjectDetails).then((res) => {
          dispatch(
            editProjectAction({
              ...res.data,
              id: projectDetails.id,
            })
          );
        });
        handleClose();
      } else {
        const projectToAdd = {
          ...projectDetails,
          GanteChartPic: projectDetails?.GanteChartPic?.length
            ? projectDetails?.GanteChartPic
            : [],
          isPending: 1,
        };

        addProjects(projectToAdd).then((res) => {
          dispatch(addProjectAction(res.data));
        });
        handleClose();
      }
    }
  };

  const handleProjectDelete = () => {
    deleteProjects(projectDetails.id).then(() => {
      dispatch(deleteProjectAction({ id: projectDetails.id }));
    });
    handleCloseConfirmDelete();
  };

  const handleProjectApprove = () => {
    const editedProjectDetails = {
      ...projectDetails,
      isPending: 0,
    };

    delete editedProjectDetails.id;
    delete editedProjectDetails.created_at;
    delete editedProjectDetails.updated_at;

    editProjects(projectDetails.id, editedProjectDetails).then((res) => {
      dispatch(approveProjecAction({ id: projectDetails.id }));
    });
    handleCloseConfirmApprove();
  };

  const handleOpenConfirmDelete = (i) => {
    setProjectDetails(i);
    console.log("here", i);
    setOpenConfirmDelete(true);
  };

  const handleCloseConfirmApprove = () => {
    setOpenConfirm(false);
  };

  const handleCloseConfirmDelete = () => {
    setOpenConfirmDelete(false);
  };

  const handleOpenConfirmApproveProject = (i) => {
    setProjectDetails(i);
    setOpenConfirm(true);
  };

  React.useEffect(() => {
    getAllClients().then((res) => {
      console.log(res.data.filter((c) => parseInt(c.isPending) === 0));
      dispatch(setClients(res.data.filter((c) => parseInt(c.isPending) === 0)));
    });
  }, []);

  React.useEffect(() => {
    getAllProjects().then((res) => {
      const toFilter = isPending ? 1 : 0;
      dispatch(
        setProjects(res.data.filter((c) => parseInt(c.isPending) === toFilter))
      );
    });
  }, []);

  return (
    <ThemeProvider theme={mdTheme}>
      <AdminHeader />
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        {/* sidebar design */}
        <Box variant="permanent">
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              margin: "5%",
              px: [1],
            }}
          ></Toolbar>
          <List component="nav">{SidebarContents}</List>
        </Box>
        {/* main contents design */}
        <Box
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
          {/* contents */}
          <Box maxWidth="100%" sx={{ mb: 4, margin: "5% 2%" }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          TOTAL PROJECTS = {projects.length}
                        </TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell align="center">
                          <Button onClick={() => handleClickOpen({})}>
                            ADD PROJECT
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Project Id</TableCell>
                        <TableCell>Project Name</TableCell>
                        <TableCell>Client Name</TableCell>
                        <TableCell>Design</TableCell>
                        <TableCell align="center">Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {projects?.map((row) => (
                        <TableRow key={row?.id}>
                          <TableCell>{row?.id}</TableCell>
                          <TableCell>{row?.Projectname}</TableCell>
                          <TableCell>
                            {getClientName(row?.ClientName)}
                          </TableCell>
                          <TableCell>
                            <Avatar
                              variant="rounded"
                              src={row?.GanteChartPic}
                            />
                          </TableCell>
                          <TableCell align="center">
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
                                <Tooltip title="Edit">
                                  <IconButton
                                    onClick={() => {
                                      handleClickOpen(row);
                                    }}
                                  >
                                    <ModeEditOutlineIcon />
                                  </IconButton>
                                </Tooltip>
                                <Divider
                                  orientation="vertical"
                                  variant="middle"
                                  flexItem
                                />
                                <Tooltip title="Delete">
                                  <IconButton
                                    onClick={() => {
                                      handleOpenConfirmDelete(row);
                                    }}
                                  >
                                    <DeleteOutlineIcon />
                                  </IconButton>
                                </Tooltip>
                                {isPending && (
                                  <>
                                    <Divider
                                      orientation="vertical"
                                      variant="middle"
                                      flexItem
                                    />
                                    <Tooltip title="Paid Project">
                                      <IconButton
                                        onClick={() => {
                                          handleOpenConfirmApproveProject(row);
                                        }}
                                      >
                                        <DoneIcon />
                                      </IconButton>
                                    </Tooltip>
                                  </>
                                )}
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
          </Box>
        </Box>
      </Box>
      <Dialog
        maxWidth="sm"
        fullWidth
        open={editOpen}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          {projectDetails.id ? "Edit" : "Add"} Project
        </DialogTitle>
        <DialogContent>
          {error && <Alert severity="error">Please fill-up all fields</Alert>}
          <TextField
            autoFocus
            margin="dense"
            value={projectDetails?.Projectname}
            type="text"
            fullWidth
            variant="outlined"
            name="Projectname"
            label="Project Name"
            onChange={handleInputChange}
          />
          {/* <TextField
            margin="dense"
            value={projectDetails?.ClientName}
            type="text"
            fullWidth
            variant="outlined"
            name="ClientName"
            label="Client Name"
            onChange={handleInputChange}
          /> */}
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Client Name</InputLabel>
            <Select
              id="demo-simple-select"
              value={projectDetails?.ClientName}
              label="Client Name"
              onChange={handleInputChange}
              name="ClientName"
            >
              {clients.map((c) => (
                <MenuItem value={c.id}>{c.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            margin="dense"
            value={projectDetails?.status}
            type="text"
            fullWidth
            variant="outlined"
            name="status"
            label="Status"
            onChange={handleInputChange}
          />
          <Button component="label" variant="outlined" sx={{ mt: 1 }}>
            Upload Gante Chart
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleImgChange}
            />
          </Button>

          {!!projectDetails?.GanteChartPic && (
            <img
              src={projectDetails.GanteChartPic}
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
        open={openConfirmDelete}
        onClose={handleCloseConfirmDelete}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Confirm Delete
        </DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete{" "}
            <strong>{projectDetails?.name}</strong>?
          </Typography>
        </DialogContent>

        <DialogActions>
          <Button autoFocus onClick={handleCloseConfirmDelete}>
            No
          </Button>
          <Button onClick={handleProjectDelete}>Yes</Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openConfirm}
        onClose={handleCloseConfirmDelete}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Confirm Project Approve
        </DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to approve the project{" "}
            <strong>{projectDetails?.Projectname}</strong>?
          </Typography>
        </DialogContent>

        <DialogActions>
          <Button autoFocus onClick={handleCloseConfirmApprove}>
            No
          </Button>
          <Button onClick={handleProjectApprove}>Yes</Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}
