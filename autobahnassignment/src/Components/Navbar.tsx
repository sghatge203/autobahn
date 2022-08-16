import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
const Navbar = (props: any) => {
  const { handleOpen } = props;
  return (
    <Box sx={{ flexGrow: 1, mb: 2 }}>
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard - Autobahn Assignment
          </Typography>
          <Button
            type="submit"
            color="inherit"
            onClick={handleOpen}
            endIcon={<AddIcon />}
            classes={{ root: "add-button" }}
            variant="outlined"
          >
            Add New Post
          </Button>
          <Button
            color="inherit"
            classes={{
              root: "primary-color",
            }}
          >
            Sagar Ghatge
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
