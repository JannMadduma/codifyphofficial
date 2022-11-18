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
  IconButton,
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
  addClients,
  deleteClients,
  editClients,
  getAllClients,
} from "service/ClientService";
import {
  addClientAction,
  approveClientAction,
  deleteClientAction,
  editClientAction,
  setClients,
} from "actions/ClientActions";
import { SidebarContents } from "components/admin/dashboard/sidebarContents/SidebarContents";
import AdminHeader from "components/admin/AdminHeader";

const mdTheme = createTheme();

export default function Clients({ isPending }) {
  const dispatch = useDispatch();
  const clients = useSelector((state) => state.clients);
  const [clientDetails, setClientDetails] = React.useState({});
  const [openConfirm, setOpenConfirm] = React.useState(false);
  const [openConfirmDelete, setOpenConfirmDelete] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleInputChange = (e) => {
    setClientDetails({ ...clientDetails, [e.target.name]: e.target.value });
  };

  const handleImgChange = (e) => {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = function (e) {
      setClientDetails({ ...clientDetails, validId: reader.result });
    };
  };

  const handleClickOpen = (i) => {
    console.log(i);
    setError(false);
    setClientDetails(i);
    setEditOpen(true);
  };

  const handleClose = () => {
    setEditOpen(false);
  };

  const handleEdit = () => {
    setError(false);

    if (
      !clientDetails.name ||
      !clientDetails.concerns ||
      !clientDetails.contactNo ||
      !clientDetails.email ||
      !clientDetails.availableTime ||
      !clientDetails.validId ||
      !clientDetails.status
    ) {
      setError(true);
    } else {
      if (clientDetails.id) {
        const editedClientDetails = {
          ...clientDetails,
          validId: clientDetails.validId,
        };

        delete editedClientDetails.id;
        delete editedClientDetails.created_at;
        delete editedClientDetails.updated_at;

        editClients(clientDetails.id, editedClientDetails).then((res) => {
          dispatch(editClientAction({ ...res.data, id: clientDetails.id }));
        });
        handleClose();
      } else {
        const clientToAdd = {
          ...clientDetails,
          isPending: 1,
          validId: clientDetails?.validId?.length ? clientDetails?.validId : [],
        };

        addClients(clientToAdd).then((res) => {
          dispatch(addClientAction(res.data));
        });
        handleClose();
      }
    }
  };

  const handleClientDelete = () => {
    deleteClients(clientDetails.id).then(() => {
      dispatch(deleteClientAction({ id: clientDetails.id }));
    });
    handleCloseConfirmDelete();
  };

  const handleClientApprove = () => {
    const editedClientDetails = {
      ...clientDetails,
      isPending: 0,
    };

    delete editedClientDetails.id;
    delete editedClientDetails.created_at;
    delete editedClientDetails.updated_at;

    editClients(clientDetails.id, editedClientDetails).then((res) => {
      dispatch(approveClientAction({ id: clientDetails.id }));
    });
    handleCloseConfirmApprove();
  };

  const handleOpenConfirmDelete = (i) => {
    setClientDetails(i);
    console.log("here");
    setOpenConfirmDelete(true);
  };

  const handleOpenConfirmapprove = (i) => {
    setClientDetails(i);
    setOpenConfirm(true);
  };

  const handleCloseConfirmDelete = () => {
    setOpenConfirmDelete(false);
  };

  const handleCloseConfirmApprove = () => {
    setOpenConfirm(false);
  };

  React.useEffect(() => {
    getAllClients().then((res) => {
      const toFilter = isPending ? 1 : 0;
      dispatch(
        setClients(res.data.filter((c) => parseInt(c.isPending) === toFilter))
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
                        <TableCell>TOTAL CLIENTS = {clients.length}</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell align="center">
                          <Button onClick={() => handleClickOpen({})}>
                            ADD CLIENTS
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>ID No.</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Concerns</TableCell>
                        <TableCell>Contact No.</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Available Time</TableCell>
                        <TableCell>Valid ID</TableCell>
                        <TableCell align="center">Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {clients?.map((row) => (
                        <TableRow key={row?.id}>
                          <TableCell>{row?.id}</TableCell>
                          <TableCell>{row?.name}</TableCell>
                          <TableCell>{row?.concerns}</TableCell>
                          <TableCell>{row?.contactNo}</TableCell>
                          <TableCell>{row?.email}</TableCell>
                          <TableCell>{row?.availableTime}</TableCell>
                          <TableCell>
                            <Avatar variant="rounded" src={row?.validId} />
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
                                    <Tooltip title="Approve Client">
                                      <IconButton
                                        onClick={() => {
                                          handleOpenConfirmapprove(row);
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
          {clientDetails.id ? "Edit" : "Add"} Client
        </DialogTitle>
        <DialogContent>
          {error && <Alert severity="error">Please fill-up all fields</Alert>}
          <TextField
            autoFocus
            margin="dense"
            value={clientDetails?.name}
            type="text"
            fullWidth
            variant="outlined"
            name="name"
            label="Name"
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            value={clientDetails?.concerns}
            type="text"
            fullWidth
            variant="outlined"
            name="concerns"
            label="Concerns"
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            value={clientDetails?.contactNo}
            type="text"
            fullWidth
            variant="outlined"
            name="contactNo"
            label="Contact No"
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            value={clientDetails?.email}
            type="text"
            fullWidth
            variant="outlined"
            name="email"
            label="Email"
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            value={clientDetails?.availableTime}
            type="datetime-local"
            fullWidth
            variant="outlined"
            name="availableTime"
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            value={clientDetails?.status}
            type="text"
            fullWidth
            variant="outlined"
            name="status"
            label="Status"
            onChange={handleInputChange}
          />
          <Button component="label" variant="outlined" sx={{ mt: 1 }}>
            Upload ID
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleImgChange}
            />
          </Button>

          {!!clientDetails?.validId && (
            <img
              src={clientDetails.validId}
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
            <strong>{clientDetails?.name}</strong>?
          </Typography>
        </DialogContent>

        <DialogActions>
          <Button autoFocus onClick={handleCloseConfirmDelete}>
            No
          </Button>
          <Button onClick={handleClientDelete}>Yes</Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openConfirm}
        onClose={handleCloseConfirmApprove}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Confirm Client Approve
        </DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to approve the client{" "}
            <strong>{clientDetails?.name}</strong>?
          </Typography>
        </DialogContent>

        <DialogActions>
          <Button autoFocus onClick={handleCloseConfirmApprove}>
            No
          </Button>
          <Button onClick={handleClientApprove}>Yes</Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}
