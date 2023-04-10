import SearchIcon from "@mui/icons-material/Search";
import { Grid, Menu, MenuItem } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import Toolbar from "@mui/material/Toolbar";
import { makeStyles } from "@mui/styles";
import Home from "assets/images/home.svg";
import TCMLogo from "assets/images/tcm-logo.svg";
import { useState } from "react";
import Center from "../Center/Center";
import ListItems from "../Icons/ListItems";

const useStyles = makeStyles((theme) => ({
  navbar: {
    background: "#FFFFFF",
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 3px 6px #00000036",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  logo: {
    marginLeft: "30px",
  },
  search: {
    backgroundColor: "#F8F9FA",
    flex: 1,
    marginLeft: "40px",
    marginRight: "40px",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    padding: "0 10px",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  icons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  iconButton: {
    marginRight: "10px",
  },
  gridItem: {
    // Access the generated classes for the Grid item here
    marginTop: "0px",
    "&$gridRoot": {
      backgroundColor: "red",
    },
  },
  gridRoot: {
    // Access the generated classes for the Grid root element here
    marginTop: "0px",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [settingsMenu, setSettingsMenu] = useState(null);
  const [notificationsMenu, setNotificationsMenu] = useState(null);

  const handleSettingsClick = (event) => {
    setSettingsMenu(event.currentTarget);
  };

  const handleSettingsClose = () => {
    setSettingsMenu(null);
  };

  const handleNotificationsClick = (event) => {
    setNotificationsMenu(event.currentTarget);
  };

  const handleNotificationsClose = () => {
    setNotificationsMenu(null);
  };

  const NavbarIconList = [
    {
      icon: `${Home}`,
      onClick: handleSettingsClick,
      iconName: "settings",
    },
    {
      icon: `${Home}`,
      onClick: handleNotificationsClick,
      iconName: "notifications",
    },
  ];
  return (
    <Center>
      <AppBar position="sticky" className={classes.navbar}>
        <Toolbar>
          <Grid container spacing={1}>
            <Grid item xs={3} className={classes.gridItem}>
              <Box className={classes.logo}>
                <img src={TCMLogo} alt="Tcm Logo" />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box className={classes.search}>
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "10px",
                  }}
                >
                  <SearchIcon style={{ color: "#63799B", cursor: "pointer" }} />
                </Box>
                <InputBase
                  placeholder="Search..."
                  inputProps={{ "aria-label": "search" }}
                  className={classes.input}
                />
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box className={classes.icons}>
                <ListItems spacing={2} direction="row" array={NavbarIconList} />
                <Menu
                  anchorEl={settingsMenu}
                  open={Boolean(settingsMenu)}
                  onClose={handleSettingsClose}
                >
                  <MenuItem onClick={handleSettingsClose}>Settings 1</MenuItem>
                  <MenuItem onClick={handleSettingsClose}>Settings 2</MenuItem>
                </Menu>
                <Menu
                  anchorEl={notificationsMenu}
                  open={Boolean(notificationsMenu)}
                  onClose={handleNotificationsClose}
                >
                  <MenuItem onClick={handleNotificationsClose}>
                    Notification 1
                  </MenuItem>
                  <MenuItem onClick={handleNotificationsClose}>
                    Notification 2
                  </MenuItem>
                </Menu>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Center>
  );
};

export default Navbar;
