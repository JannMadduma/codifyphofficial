import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import GroupIcon from "@mui/icons-material/Group";
import NightShelterIcon from "@mui/icons-material/NightShelter";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <NightShelterIcon />
      </ListItemIcon>
      <ListItemText primary="Properties"/>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <GroupIcon />
      </ListItemIcon>
      <ListItemText primary="Users"/>
    </ListItemButton>
  </React.Fragment>
);
