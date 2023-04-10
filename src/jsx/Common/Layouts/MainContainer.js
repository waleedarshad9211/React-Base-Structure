import { Box } from "@mui/material";

const MainContainer = ({ children, marginLeft }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        padding: "40px",
        border: "1px solid #e8e8e8",
        width: "100%",
        height: "100%",
        paddingTop: "76px",
        marginLeft: marginLeft,
        transition: (theme) =>
          theme.transitions.create("margin-left", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
      }}
    >
      {children}
    </Box>
  );
};

export default MainContainer;
