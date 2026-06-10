import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "components/base/Image";
import Image404 from "assets/404.webp";

const Error404 = () => {
  return (
    <Stack
      sx={{
        px: 3,
        py: 5,
        mx: "auto",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        maxWidth: 612,
      }}
    >
      <Image src={Image404} sx={{ mb: 4, width: 1, objectFit: "contain" }} />
      <Typography variant="h1" sx={{ mb: 2.5, textAlign: "center" }}>
        Oops! page not found
      </Typography>
      <Typography
        variant="body2"
        sx={{ mb: 3, color: "grey.600", textAlign: "center" }}
      >
        The page you’re looking for doesn’t exist or has been moved. Please
        check the URL or return to the homepage.
      </Typography>
      <Button variant="contained" sx={{ borderRadius: 8 }} href="/">
        Back to Home
      </Button>
    </Stack>
  );
};

export default Error404;
