import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import GroupIcon from "@mui/icons-material/Group";
import NightShelterIcon from "@mui/icons-material/NightShelter";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import { Link } from "react-router-dom";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component={Link} to={"/manageproperties"}>
      <ListItemIcon>
        <NightShelterIcon />
      </ListItemIcon>
      <ListItemText primary="Properties" />
    </ListItemButton>
    <ListItemButton component={Link} to={"/manageusers"}>
      <ListItemIcon>
        <GroupIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItemButton>

    <ListItemButton component={Link} to={"/managesubscribed"}>
      <ListItemIcon>
        <MarkEmailReadIcon />
      </ListItemIcon>
      <ListItemText primary="Subscribed" />
    </ListItemButton>
  </React.Fragment>
);
