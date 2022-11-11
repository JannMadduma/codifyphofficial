import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function RechProjects() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="PICTURE"
        height="140"
        image="/logo192.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="left">
          Rech Design
        </Typography>
        <Typography variant="body2" color="text.secondary" align="left">
          Web Application
        </Typography>
        <Typography variant="body2" color="text.secondary" align="left">
          Codify
        </Typography>
        <Typography variant="body2" color="text.secondary" align="left">
          1 UL Design 2 Full Stack Web Developers
        </Typography>
        <Typography variant="body2" color="text.secondary" align="left">
          2 Days
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
