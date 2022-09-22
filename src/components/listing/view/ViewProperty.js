import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import ListingGallery from "./ListGallery";
import Description from "./descriptions";
import CallToAction from "../../common/CallToAction";
import { getAllProperties } from "../../../service/propertyService";

const pagesAll = [{ name: "Listing", link: "/listing" }];

export default function ViewProperty() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [pages, setPages] = React.useState([]);
  const { id } = useParams();
  const [property, setProperty] = React.useState({});

  React.useEffect(() => {
    getAllProperties(id).then((res) => {
      console.log(res.data);
      setProperty(res.data);
    });
  }, []);

  return (
    <Box>
      <Toolbar
        sx={{ borderBottom: 1, borderColor: "divider" }}
        style={{ padding: "0 150px" }}
      >
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Link to={"/"}>
            <Avatar alt="Photo" src="/img/logo.png" variant="square" />
          </Link>
        </Box>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      ></Toolbar>

      <Container>
        <Box
          sx={{
            display: "flex",
            alignSelf: "start",
          }}
        >
          <ListingGallery property={property} />
        </Box>
      </Container>
      <Container sx={{ paddingBottom: "50px" }}>
        <Description />
      </Container>
      <Container sx={{ paddingBottom: "100px" }}>
        <CallToAction />
      </Container>
    </Box>
  );
}
