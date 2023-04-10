import { Avatar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import Icons from "../Icons/Icon";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },
  avatar: {
    width: 50,
    height: 50,
    marginTop: theme.spacing(1),
  },
  statusIcon: {
    marginTop: theme.spacing(0.5),
  },
  icon: {
    color: "#C8D2E2",
  },
}));

const ProfileAvatar = () => {
  const classes = useStyles();
  return (
    <Box>
      <Avatar
        className={classes.avatar}
        alt="Profile Picture"
        src="https://example.com/avatar.png"
      />
      <Icons />
    </Box>
  );
};

export default ProfileAvatar;
