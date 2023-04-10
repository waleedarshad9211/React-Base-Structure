import { Box } from "@mui/material";

const Center = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {children}
    </Box>
  );
};

export default Center;
