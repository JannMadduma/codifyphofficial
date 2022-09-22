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
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import HotelIcon from "@mui/icons-material/Hotel";
import BathtubIcon from "@mui/icons-material/Bathtub";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import { useEffect } from "react";
import { getAllProperties } from "../../../service/propertyService";
import { setProperties } from "../../../actions/propertiesActions";

export default function List() {
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.properties);
  const loggedIn = useSelector((state) => state.loggedIn);
  const [name, setName] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [lotArea, setLotArea] = React.useState(0);

  // onChange <TextField>
  const handleInputChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "location":
        setLocation(e.target.value);
        break;
      case "lotArea":
        setLotArea(e.target.value);
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
  // Trigger effect when name, location, lotArea is changed
  useEffect(() => {
    console.log("trigger");
    getAllProperties(null, name, location, lotArea).then((res) => {
      console.log(res.data);
      dispatch(setProperties(res.data));
    });
  }, [name, location, lotArea]);

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
          justifyContent: "end",
        }}
      >
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
          <InputLabel id="demo-simple-select-label">Lot Area</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Lot Area"
            name="lotArea"
            onChange={handleInputChange}
            value={lotArea}
          >
            <MenuItem value={0}></MenuItem>
            <MenuItem value={1}>30-39sqm</MenuItem>
            <MenuItem value={2}>40-69sqm</MenuItem>
            <MenuItem value={3}>70sqm above</MenuItem>
          </Select>
        </FormControl>
      </Container>

      <Container>
        <Grid container columns={12}>
          {properties.slice(0, 100).map((property) => (
            <Grid item sm={6} md={4} lg={3} xs={12}>
              <Card sx={{ position: "relative" }} variant="outlined">
                <CardMedia
                  component="img"
                  height="194"
                  image={property.img[0]}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ textAlign: "left" }}
                  >
                    ₱{" "}
                    {property.tcp
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textAlign: "left" }}
                  >
                    {property.bedRooms}
                    <HotelIcon /> {property.bathRooms}
                    <BathtubIcon />
                    {property.lotArea}
                    <SquareFootIcon />
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      textAlign: "left",
                      height: "45px",
                      display: "-webkit-box",
                      "-webkit-line-clamp": "2",
                      "-webkit-box-orient": "vertical",
                    }}
                  >
                    {property.location}
                  </Typography>
                </CardContent>
                <hr />
                <CardContent sx={{ paddingBottom: "16px !important" }}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      textAlign: "left",
                      height: "45px",
                      display: "-webkit-box",
                      "-webkit-line-clamp": "2",
                      "-webkit-box-orient": "vertical",
                    }}
                  >
                    {property.propertyName}
                  </Typography>
                  {loggedIn?.id && (
                    <CardActions disableSpacing>
                      <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                      </IconButton>
                      <IconButton aria-label="share">
                        <ShareIcon />
                      </IconButton>
                    </CardActions>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {!properties.length && <Alert severity="info">No results found</Alert>}
      </Container>
    </Box>
  );
}
