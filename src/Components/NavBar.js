import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import EcoIcon from "@material-ui/icons/Eco";

export default function NavBar() {
  return (
    <div>
      <AppBar position="static" style={{ background: "#004d40" }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <EcoIcon />
          </IconButton>
          <Typography variant="h6">todos-react</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
