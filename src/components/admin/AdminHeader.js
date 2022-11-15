import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function AdminHeader(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" sx={{ backgroundColor: "#65C7EE" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
              CODIFYPH{" "}
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button sx={{ color: "#fff" }}>LOGOUT</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
