import { Box, Button, Typography } from "@mui/material";

const Home = () => {
  console.log(" Home ");
  return (
    <Box>
      <Typography variant="h1">
        All is well
        <br />
        sdsdsd
      </Typography>
      <Typography variant="h2">All is well</Typography>
      <Typography variant="h3">All is well</Typography>
      <Typography variant="h4">All is well</Typography>
      <Typography variant="body1">All is well</Typography>
      <Typography variant="body2">All is well</Typography>

      <Button variant="contained">Good to see you</Button>
      <Button variant="contained" color="secondary">
        Good to see you
      </Button>
    </Box>
  );
};

export default Home;
