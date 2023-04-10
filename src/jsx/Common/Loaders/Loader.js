import Box from "@mui/material/Box";
import { GridLoader } from "react-spinners";
function Loader() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <GridLoader color="#1C4588" />
    </Box>
  );
}

export default Loader;
