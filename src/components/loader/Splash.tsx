import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

const Splash = () => {
  return (
    <Stack
      sx={{
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: 1,
      }}
    >
      <CircularProgress />
    </Stack>
  );
};

export default Splash;
