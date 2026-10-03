import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Iconify from "components/base/Iconify";
import { useAuth } from "providers/AuthProvider";
import { accountPaths } from "routes/paths";

const Profile = () => {
  const { profile, user } = useAuth();

  const displayName =
    profile?.displayName ||
    (profile?.firstName
      ? `${profile.firstName} ${profile.lastName || ""}`.trim()
      : user?.displayName || user?.email || "");

  const avatarUrl = profile?.avatar || user?.photoURL || "";

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
      <Avatar
        src={avatarUrl || undefined}
        sx={{
          mb: 1,
          width: 120,
          height: 120,
          bgcolor: "grey.100",
          border: 1,
          borderColor: "divider",
        }}
      >
        <Iconify
          icon="solar:user-bold"
          sx={{ width: 60, height: 60, color: "text.disabled" }}
        />
      </Avatar>
      <Typography variant="h5" sx={{ mb: 0.25, fontWeight: 500 }}>
        {displayName || "User"}
      </Typography>
      <Typography variant="body2" sx={{ mb: 1, color: "text.disabled" }}>
        Customer
      </Typography>
      <Link href={accountPaths.settings} sx={{ fontWeight: 500 }}>
        {displayName && displayName !== user?.email
          ? "Edit Profile"
          : "Complete Profile"}
      </Link>
    </Stack>
  );
};

export default Profile;
