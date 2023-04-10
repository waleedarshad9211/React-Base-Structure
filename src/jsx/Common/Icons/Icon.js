import { IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";

const StyledIcon = makeStyles((theme) => ({
  root: {
    width: "30px",
    height: "30px",
    cursor: "pointer",
  },
  iconButton: {},
}));

const Icon = ({ iconName = "", icon, onClick = null, type = "img" }) => {
  const classes = StyledIcon();

  return (
    <IconButton
      aria-label={iconName}
      className={classes.iconButton}
      onClick={onClick}
    >
      {type === "img" && <img alt={iconName} src={icon} />}
      {type === "jsx" && icon}
    </IconButton>
  );
};

export default Icon;
