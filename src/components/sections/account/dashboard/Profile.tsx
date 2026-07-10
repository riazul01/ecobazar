import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ProfileImg from "assets/profiles/user2.webp";

const Profile = () => {
  return (
    <Stack
      sx={{
        p: 4,
        border: 1,
        borderColor: "divider",
        borderRadius: 2,
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar src={ProfileImg} sx={{ mb: 1, width: 120, height: 120 }} />
      <Typography variant="h5" sx={{ mb: 0.25, fontWeight: 500 }}>
        Dianne Russell
      </Typography>
      <Typography variant="body2" sx={{ mb: 1, color: "text.disabled" }}>
        Customer
      </Typography>
      <Link href="#!" sx={{ fontWeight: 500 }}>
        Edit Profile
      </Link>
    </Stack>
  );
};

export default Profile;
