import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { Grid } from "@mui/material";
import { useDispatch } from "react-redux";
// import {
//   addClients,
//   editClients,
//   getAllClients,
// } from "../../service/ClientService";
// import {
//   addClientAction,
//   editClientAction,
//   setClients,
// } from "../../actions/ClientActions";

export default function ContactUs({ isPending }) {
  const dispatch = useDispatch();
  // const clients = useSelector((state) => state.clients);
  //   const [clientDetails, setClientDetails] = React.useState({});
  //   const [editOpen, setEditOpen] = React.useState(false);
  //   const [error, setError] = React.useState(false);

  //   const handleInputChange = (e) => {
  //     setClientDetails({ ...clientDetails, [e.target.name]: e.target.value });
  //   };

  //   const handleClickOpen = (i) => {
  //     console.log(i);
  //     setError(false);
  //     setClientDetails(i);
  //     setEditOpen(true);
  //   };

  //   const handleImgChange = (e) => {
  //     var file = e.target.files[0];
  //     var reader = new FileReader();
  //     reader.readAsDataURL(file);

  //     reader.onloadend = function (e) {
  //       setClientDetails({ ...clientDetails, validId: reader.result });
  //     };
  //   };

  //   const handleClose = () => {
  //     setEditOpen(false);
  //   };

  //   const handleEdit = () => {
  //     setError(false);

  //     if (
  //       !clientDetails.name ||
  //       !clientDetails.concerns ||
  //       !clientDetails.contactNo ||
  //       !clientDetails.email ||
  //       !clientDetails.availableTime ||
  //       !clientDetails.validId ||
  //       !clientDetails.status
  //     ) {
  //       setError(true);
  //     } else {
  //       if (clientDetails.idNo) {
  //         const editedClientDetails = {
  //           ...clientDetails,
  //           validId: clientDetails.validId,
  //         };

  //         delete editedClientDetails.id;
  //         delete editedClientDetails.created_at;
  //         delete editedClientDetails.updated_at;

  //         editClients(clientDetails.idNo, editedClientDetails).then((res) => {
  //           dispatch(
  //             editClientAction({ ...res.data.client, idNo: clientDetails.idNo })
  //           );
  //         });
  //         handleClose();
  //       } else {
  //         const clientToAdd = {
  //           ...clientDetails,
  //           isPending: 1,
  //           validId: clientDetails?.validId?.length ? clientDetails?.validId : [],
  //         };

  //         addClients(clientToAdd).then((res) => {
  //           dispatch(addClientAction(res.data.client));
  //         });
  //         handleClose();
  //       }
  //     }
  //   };

  //   React.useEffect(() => {
  //     getAllClients().then((res) => {
  //       const toFilter = isPending ? 1 : 0;
  //       dispatch(
  //         setClients(res.data.clients.filter((c) => c.isPending === toFilter))
  //       );
  //     });
  //   }, []);

  return (
    <div
      style={{
        height: "60vh",
      }}
    >
      <Box
        sx={{
          backgroundImage: "url('img/contactusbg.png')",
          backgroundSize: "cover",
          height: "60vh",
        }}
        id="contactUs"
      >
        <Container sx={{ height: "60vh" }}>
          <Grid
            container
            spacing={2}
            sx={{ height: "60vh", alignContent: "center", paddingTop: "40px" }}
          >
            <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Box>
                  <Typography
                    variant="h5"
                    align="center"
                    color="text.primary"
                    gutterBottom
                    sx={{
                      fontWeight: "bold",
                      fontFamily: "Poppins, sans-serif;",
                    }}
                  >
                    CONTACT US
                  </Typography>
                  <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                    sx={{
                      fontWeight: "bold",
                      color: "#82C8E1 ",
                      fontFamily: "Poppins, sans-serif;",
                    }}
                  >
                    Let's Collaborate
                  </Typography>
                  <Typography
                    align="center"
                    paragraph
                    sx={{
                      fontWeight: "bold",
                      fontFamily: "Poppins, sans-serif;",
                    }}
                  >
                    Need something built for your business?
                    <br />
                    Talk to us about it.
                  </Typography>
                  <Stack
                    sx={{ pt: 4, mx: 5 }}
                    direction="row"
                    spacing={5}
                    justifyContent="center"
                  >
                    <Button
                      variant="contained"
                      sx={{
                        fontWeight: "bold",
                        fontFamily: "Poppins, sans-serif;",
                        bgcolor: "#82C8E1 ",
                        px: 3,
                        py: 1,
                        mx: 5,
                      }}
                      //   onClick={() => handleClickOpen({})}
                    >
                      Subscribe {">"}
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        fontWeight: "bold",
                        fontFamily: "Poppins, sans-serif;",
                        bgcolor: "#82C8E1 ",
                        px: 3,
                        py: 1,
                        mx: 5,
                      }}
                      //   onClick={() => handleClickOpen({})}
                    >
                      Inquire now
                    </Button>
                  </Stack>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* <Dialog
        maxWidth="sm"
        fullWidth
        open={editOpen}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Inquire now
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
              alt=""
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
      </Dialog> */}
    </div>
  );
}
