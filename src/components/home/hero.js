import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {
    Alert,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider,
    Grid,
    TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
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

export default function Hero({ isPending }) {
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

                editClients(clientDetails.id, editedClientDetails).then(
                    (res) => {
                        dispatch(
                            editClientAction({
                                ...res.data,
                                id: clientDetails.id,
                            }),
                        );
                    },
                );
                handleClose();
            } else {
                const clientToAdd = {
                    ...clientDetails,
                    isPending: 1,
                    validId: clientDetails?.validId?.length
                        ? clientDetails?.validId
                        : [],
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
                setClients(
                    res.data.filter((c) => parseInt(c.isPending) === toFilter),
                ),
            );
        });
    }, []);

    return (
        <div
            style={{
                backgroundImage: "url('/img/herobg.png')",
                backgroundSize: "cover",
                height: "100vh",
                paddingTop: "1px",
            }}
        >
            <Box>
                <Container>
                    <Grid container spacing={2} sx={{ marginTop: "60px" }}>
                        <Grid item xs={5}>
                            <Box
                                sx={{
                                    pt: 8,
                                    pb: 6,
                                    paddingLeft: "30px",
                                }}
                            >
                                <Box>
                                    <Typography
                                        align="left"
                                        color="text.primary"
                                        sx={{
                                            color: "#353C42",
                                            fontWeight: "bold",
                                            fontFamily: "Roboto",
                                            fontSize: "50px",
                                        }}
                                    >
                                        website
                                    </Typography>
                                    <Typography
                                        variant="h1"
                                        align="left"
                                        sx={{
                                            fontSize: "100px",
                                            color: "#82C8E1",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        DESIGN
                                        <br /> & CODES
                                    </Typography>
                                    <Divider
                                        color="#02B4FE"
                                        variant="fullWidth"
                                    />
                                    <br />
                                    <Typography
                                        variant="h6"
                                        align="left"
                                        color="text.secondary"
                                        paragraph
                                    >
                                        Allow us in advancing your business and
                                        feel a significant change in your
                                        business.
                                    </Typography>
                                    <Stack
                                        sx={{ pt: 4 }}
                                        direction="row"
                                        spacing={2}
                                        justifyContent="left"
                                    >
                                        <Button
                                            className="Button"
                                            variant="contained"
                                            style={{
                                                backgroundColor: "#82C8E1",
                                                boxShadow: "none",
                                            }}
                                            onClick={() => handleClickOpen({})}
                                        >
                                            Inquire {">"}
                                        </Button>
                                        <Button
                                            className="Button"
                                            variant="contained"
                                            style={{
                                                backgroundColor: "#82C8E1",
                                                boxShadow: "none",
                                            }}
                                            onClick={() => handleClickOpen({})}
                                        >
                                            Contact Us
                                        </Button>
                                    </Stack>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid
                            item
                            xs={7}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                            }}
                            style={{ padding: "0px" }}
                        >
                            <Box
                                sx={{
                                    alignItems: "center",
                                    width: "100%",
                                }}
                            >
                                <img
                                    alt=""
                                    style={{
                                        width: "100%",
                                    }}
                                    src="/img/heropic.png"
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Dialog
                maxWidth="sm"
                fullWidth
                open={editOpen}
                onClose={handleClose}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle
                    style={{ cursor: "move" }}
                    id="draggable-dialog-title"
                >
                    {clientDetails.id ? "Edit" : "Add"} Client
                </DialogTitle>
                <DialogContent>
                    {error && (
                        <Alert severity="error">
                            Please fill-up all fields
                        </Alert>
                    )}
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
        </div>
    );
}
