import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import { Alert } from "@mui/material";

import { Link } from "react-router-dom";
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

const ResponsiveAppBar = ({ isPending }) => {
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
    <AppBar
      component="nav"
      position="fixed"
      sx={{
        height: "100px",
        display: "grid",
        alignContent: "center",

        boxShadow: "none",
        backgroundColor: "transparent",
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
            }}
          >
            <Link>
              <img
                alt=""
                src="img/codifylogo.png"
                style={{
                  height: "100px",
                  width: "300px",
                  padding: "10px 0",
                  borderRadius: "50px",
                  marginTop: "10px",
                }}
              />
            </Link>
          </Box>

          <Box
            sx={{ display: { xs: "none", sm: "block" } }}
            style={{ borderRadius: "50px" }}
          >
            <Link
              to="/home"
              style={{
                fontFamily: "Roboto",
                padding: "1px 30px",
                color: "#353C42",
                fontWeight: "bold",
                textDecoration: "none",
              }}
              href="#home1"
            >
              HOME
            </Link>
            <Link
              to="/portfolio"
              style={{
                fontFamily: "Roboto",
                padding: "1px 30px",
                color: "#353C42",
                fontWeight: "bold",
                textDecoration: "none",
              }}
              href="#portfolio"
            >
              PORTFOLIO
            </Link>
            <Link
              to="/pricing"
              style={{
                fontFamily: "Roboto",
                padding: "1px 30px",
                color: "#353C42",
                fontWeight: "bold",
                textDecoration: "none",
              }}
              href="#pricing"
            >
              PRICING
            </Link>
            <Link
              to="/aboutus"
              style={{
                fontFamily: "Roboto",
                padding: "1px 30px",
                color: "#353C42",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              ABOUT US
            </Link>
          </Box>
          <Button
            className="Button"
            variant="contained"
            style={{
              backgroundColor: "#82C8E1",
              boxShadow: "none",
              marginLeft: "10px",
            }}
            onClick={() => handleClickOpen({})}
          >
            CONTACT US
          </Button>
        </Toolbar>
      </Container>

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
    </AppBar>
  );
};
export default ResponsiveAppBar;
