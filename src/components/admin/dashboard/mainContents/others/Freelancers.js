import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
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
  Drawer,
  IconButton,
  Input,
  List,
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
  addFreelancer,
  deleteFreelancer,
  editFreelancer,
  getAllFreelancers,
} from "../../../../../service/FreelancersService";
import {
  addFreelancerAction,
  deleteFreelancerAction,
  editFreelancerAction,
  setFreelancers,
} from "../../../../../actions/FreelancersAction";
import { SidebarContents } from "../../sidebarContents/SidebarContents";
import AdminHeader from "../../../AdminHeader";

const mdTheme = createTheme();

export default function Freelancers() {
  const dispatch = useDispatch();
  const freelancers = useSelector((state) => state.freelancers);
  const [freelancerDetails, setfreelancerDetails] = React.useState({});
  const [openConfirm, setOpenConfirm] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleInputChange = (e) => {
    console.log({ ...freelancerDetails, [e.target.name]: e.target.value });
    setfreelancerDetails({
      ...freelancerDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleClickOpen = (i) => {
    console.log(i);
    setError(false);
    setfreelancerDetails(i);
    setEditOpen(true);
  };

  const handleClose = () => {
    setEditOpen(false);
  };

  const handleEdit = () => {
    setError(false);
    console.log(freelancerDetails);

    if (
      !freelancerDetails.name ||
      !freelancerDetails.email ||
      !freelancerDetails.role ||
      !freelancerDetails.status ||
      !freelancerDetails.password
    ) {
      setError(true);
    } else {
      if (freelancerDetails.id) {
        const editedFreelancerDetails = {
          ...freelancerDetails,
        };

        delete editedFreelancerDetails.id;
        delete editedFreelancerDetails.created_at;
        delete editedFreelancerDetails.updated_at;

        editFreelancer(freelancerDetails.id, editedFreelancerDetails).then(
          (res) => {
            dispatch(
              editFreelancerAction({
                ...res.data,
                id: freelancerDetails.id,
              })
            );
          }
        );
        handleClose();
      } else {
        const freelancerToAdd = {
          ...freelancerDetails,
        };

        addFreelancer(freelancerToAdd).then((res) => {
          dispatch(addFreelancerAction(res.data));
        });
        handleClose();
      }
    }
  };

  const handleFreelancerDelete = () => {
    console.log("ASDFD");
    console.log(freelancerDetails.id);
    deleteFreelancer(freelancerDetails.id).then((res) => {
      dispatch(deleteFreelancerAction({ id: freelancerDetails.id }));
    });
    handleCloseConfirmDelete();
  };

  const handleOpenConfirmDelete = (i) => {
    setfreelancerDetails(i);
    setOpenConfirm(true);
  };

  const handleCloseConfirmDelete = () => {
    setOpenConfirm(false);
  };

  React.useEffect(() => {
    getAllFreelancers().then((res) => {
      console.log(res);
      dispatch(setFreelancers(res.data));
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
                          TOTAL FREELANCERS = {freelancers.length}
                        </TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell>
                          <Input>search</Input>
                        </TableCell>
                        <TableCell align="center">
                          <Button onClick={() => handleClickOpen({})}>
                            ADD Freelancers
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>ID No.</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Role</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Password</TableCell>
                        <TableCell align="center">Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {freelancers.map((row) => (
                        <TableRow key={row?.id}>
                          <TableCell>{row?.id}</TableCell>
                          <TableCell>{row?.name}</TableCell>
                          <TableCell>{row?.email}</TableCell>
                          <TableCell>{row?.role}</TableCell>
                          <TableCell>{row?.status}</TableCell>
                          <TableCell>{row?.password}</TableCell>
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
          {freelancers.id ? "Edit" : "Add"} Freelancer
        </DialogTitle>
        <DialogContent>
          {error && <Alert severity="error">Please fill-up all fields</Alert>}
          <TextField
            autoFocus
            margin="dense"
            value={freelancerDetails?.name}
            type="text"
            fullWidth
            variant="outlined"
            name="name"
            label="Name"
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            value={freelancerDetails?.email}
            type="text"
            fullWidth
            variant="outlined"
            name="email"
            label="Email"
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            value={freelancerDetails?.role}
            type="text"
            fullWidth
            variant="outlined"
            name="role"
            label="Role"
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            value={freelancerDetails?.status}
            type="text"
            fullWidth
            variant="outlined"
            name="status"
            label="Status"
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            value={freelancerDetails?.password}
            type="text"
            fullWidth
            variant="outlined"
            name="password"
            label="password"
            onChange={handleInputChange}
          />
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
            <strong>{freelancerDetails?.name}</strong>?
          </Typography>
        </DialogContent>

        <DialogActions>
          <Button autoFocus onClick={handleCloseConfirmDelete}>
            No
          </Button>
          <Button onClick={handleFreelancerDelete}>Yes</Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}
