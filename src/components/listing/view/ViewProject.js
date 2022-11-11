import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import ListingGallery from "./ListGallery";
import Description from "./descriptions";
import CallToAction from "../../common/CallToAction";
import { getAllProjects } from "../../../service/projectService";

const pagesAll = [{ Projectname: "Listing", link: "/listing" }];

export default function ViewProject() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [pages, setPages] = React.useState([]);
  const { idNo } = useParams();
  const [project, setProject] = React.useState({});

  React.useEffect(() => {
    getAllProjects(idNo).then((res) => {
      console.log(res.data);
      setProject(res.data);
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
          <ListingGallery project={project} />
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
