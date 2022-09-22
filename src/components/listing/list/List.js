import {
  Alert,
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import Container from "@mui/material/Container";
import * as React from "react";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import {
  getAllProperties,
  searchProperty,
} from "../../../service/propertyService";
import { setProperties } from "../../../actions/propertiesActions";
import ListingCard from "../../common/ListingCard";
import ViewModal from "../view/ViewModal";
import { useLocation } from "react-router-dom";

export default function List() {
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.properties);
  const loggedIn = useSelector((state) => state.loggedIn);
  const [name, setName] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [status, setStatus] = React.useState(0);
  const [property, setProperty] = React.useState({});
  const [openView, setOpenView] = React.useState(false);
  const [query, setQuery] = React.useState(useLocation().search);

  const handleOpenView = (i) => {
    setProperty(i);
    setOpenView(true);
  };

  // onChange <TextField>
  const handleInputChange = (e) => {
    setQuery("");
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "location":
        setLocation(e.target.value);
        break;
      case "status":
        setStatus(e.target.value);
        break;
      default:
        break;
    }
  };
  // Trigger effect once only - initial state --------
  // useEffect(() => {
  //   getAllProperties().then((res) => {
  //     dispatch(setProperties(res.data));
  //   });
  // }, []);

  //  this is used for filtering----------
  // Trigger effect when name, location, status is changed
  useEffect(() => {
    console.log("trigger");
    if (query.split("=")[1]) {
      searchProperty(query.split("=")[1]).then((res) => {
        dispatch(setProperties(res.data));
        window.history.pushState({}, document.title, "/listing");
      });
    } else {
      getAllProperties(null, name, location, status).then((res) => {
        dispatch(setProperties(res.data));
      });
    }
  }, [name, location, status]);

  return (
    <Box>
      <Box>
        <main>
          <Box
            sx={{
              bgcolor: "background.paper",
              pt: 2,
              pb: 2,
            }}
          >
            <Container>
              <Typography
                component="h1"
                variant="h5"
                align="left"
                color="text.primary"
                gutterBottom
              >
                All Properties
              </Typography>
            </Container>
          </Box>
        </main>
      </Box>

      <Container
        sx={{
          pb: 4,
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginRight: "16px",
          }}
        >
          {query && (
            <Typography>
              Searching for&nbsp;
              <b>{query.split("=")[1]}</b>
            </Typography>
          )}
        </Box>
        <Box>
          <TextField
            label="Name"
            variant="outlined"
            sx={{ marginRight: "16px" }}
            name="name"
            onChange={handleInputChange}
            value={name}
          />
          <TextField
            label="Location"
            variant="outlined"
            sx={{ marginRight: "16px" }}
            name="location"
            onChange={handleInputChange}
            value={location}
          />
          <FormControl sx={{ width: "150px" }}>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Status"
              name="status"
              onChange={handleInputChange}
              value={status}
            >
              <MenuItem value={""}></MenuItem>
              <MenuItem value={"Available"}>Available</MenuItem>
              <MenuItem value={"Sold"}>Sold</MenuItem>
              <MenuItem value={"Re-open"}>Re-open</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Container>

      <Container>
        <Grid container columns={12}>
          {properties.slice(0, 100).map((property) => (
            <Grid
              key={property.id}
              item
              sm={6}
              md={4}
              lg={3}
              xs={12}
              sx={{ padding: "0 5px" }}
            >
              <Box
                onClick={() => {
                  handleOpenView(property);
                }}
              >
                <ListingCard property={property} loggedIn={loggedIn} />
              </Box>
            </Grid>
          ))}
        </Grid>

        {!properties.length && <Alert severity="info">No results found</Alert>}
      </Container>
      <ViewModal open={openView} setOpen={setOpenView} property={property} />
    </Box>
  );
}
