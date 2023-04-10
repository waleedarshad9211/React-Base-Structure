import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { Drawer } from "@mui/material";

import {
  AppBar,
  Avatar,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/system";
import { memo, useState } from "react";
import MainContainer from "./MainContainer";

const drawerWidth = 240;

const DashboardLayout = styled("div")(({ theme, isExpanded }) => {
  return {
    display: "flex",
    "--sidebar-width": isExpanded ? `168px` : `${theme.spacing(9)}px`,
    "& .MuiAppBar-root": {
      zIndex: theme.zIndex.drawer + 1,
    },

    "& .MuiIconButton-root": {
      marginRight: theme.spacing(2),
    },
    "& .MuiTypography-root": {
      flexGrow: 1,
    },
    "& .MuiDrawer-root": {
      width: drawerWidth,
      flexShrink: 0,
      position: "fixed",
    },
    "& .MuiDrawer-paper": {
      width: drawerWidth,
    },
    "& .MuiListItem-root": {
      display: "flex",
      alignItems: "center",
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
    "& .MuiListItemIcon-root": {
      minWidth: theme.spacing(4),
      marginRight: theme.spacing(2),
    },
    "& .MuiListItemText-primary": {
      fontWeight: 500,
    },
    "& .MuiBox-root.MuiBox-height100": {
      height: "100%",
      overflowY: "auto",
    },
    "& .MuiBox-root.MuiBox-sidebarExpanded": {
      width: theme.spacing(9),
      "& .MuiListItemText-primary": {
        display: "none",
      },
    },
  };
});
const useStyles = makeStyles((theme) => ({
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
}));

const customStyles = {
  width: drawerWidth,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
    transition: "width 0.3s ease-in-out",
  },
};
const customStylesCollapsed = {
  width: drawerWidth,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: "72px",
    boxSizing: "border-box",
    overflowX: "hidden",
    transition: "width 0.3s ease-in-out",
  },
};

function MainLayout({ children, theme }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const classes = useStyles();
  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <DashboardLayout theme={theme} isExpanded={isExpanded}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleToggleExpand}
          >
            {isExpanded ? <MenuIcon /> : <MenuIcon />}
          </IconButton>
          <Typography variant="h6">Dashboard</Typography>
          <Avatar alt="User" src="#" />
        </Toolbar>
      </AppBar>
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleToggleExpand}>
          {isExpanded ? <DashboardIcon /> : <DashboardIcon />}
        </IconButton>
      </div>
      <Drawer
        variant="permanent"
        anchor="left"
        open={isExpanded}
        sx={isExpanded ? customStyles : customStylesCollapsed}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleToggleExpand}>
            <MenuIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <PowerSettingsNewIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
      <MainContainer marginLeft="var(--sidebar-width)">
        {children}
      </MainContainer>
    </DashboardLayout>
  );
}

export default memo(MainLayout);
