import { ExitToApp } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Home from "assets/images/home.svg";
import { useState } from "react";
import "styles/css/index.css";
import ProfileAvatar from "../AvatarComponent/ProfileAvatar";
import ListItems from "../Icons/ListItems";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: theme.mixins.toolbar.minHeight,
    bottom: 0,
    backgroundColor: "#1C4588",
    width: 68,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
    justifyContent: "space-between",
  },

  statusIcon: {
    marginTop: theme.spacing(0.5),
  },
  logoutIcon: {
    color: "#C8D2E2",
    marginBottom: theme.spacing(2),
  },
}));

function Sidebar() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };
  const SidebarIconList = [
    {
      icon: `${Home}`,
      onClick: handleListItemClick,
    },
    {
      icon: `${Home}`,
      onClick: handleListItemClick,
    },
    {
      icon: `${Home}`,
      onClick: handleListItemClick,
    },
    {
      icon: `${Home}`,
      onClick: handleListItemClick,
    },
    {
      icon: `${Home}`,
      onClick: handleListItemClick,
    },
  ];
  return (
    <Stack
      flexDirection="column"
      width="100%"
      height="100%"
      sx={{ backgroundColor: "#1C4588" }}
    >
      <ProfileAvatar />
      <ListItems spacing={2} direction="column" array={SidebarIconList} />
      <IconButton className={classes.logoutIcon} title="Logout">
        <ExitToApp />
      </IconButton>
    </Stack>
  );
}

export default Sidebar;
