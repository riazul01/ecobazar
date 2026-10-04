import { type ChangeEvent, useEffect, useRef, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import Iconify from "components/base/Iconify";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "providers/AuthProvider";
import { getFriendlyErrorMessage } from "utils/firebaseErrors";
import * as z from "zod";

const AccountSettingsSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.email("Enter a valid email"),
  phone: z.string().min(1, "Phone number is required"),
  avatar: z
    .instanceof(File)
    .refine(
      (file) => file.size <= 2 * 1024 * 1024,
      "Image must be less than 2MB",
    )
    .refine(
      (file) => ["image/jpeg", "image/png", "image/webp"].includes(file.type),
      "Only JPG, PNG or WebP images are allowed",
    )
    .optional(),
});

type AccountSettingsValues = z.infer<typeof AccountSettingsSchema>;

const AccountSettings = () => {
  const { profile, user, updateUserProfile } = useAuth();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [selectedFilePreview, setSelectedFilePreview] = useState<string | null>(
    null,
  );
  const [saveSuccess, setSaveSuccess] = useState<string | null>(null);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const activeAvatar =
    selectedFilePreview || profile?.avatar || user?.photoURL || "";

  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<AccountSettingsValues>({
    mode: "onBlur",
    defaultValues: {
      firstName: profile?.firstName || "",
      lastName: profile?.lastName || "",
      email: profile?.email || user?.email || "",
      phone: profile?.phone || "",
      avatar: undefined,
    },
    resolver: zodResolver(AccountSettingsSchema),
  });

  useEffect(() => {
    if (profile || user) {
      reset({
        firstName: profile?.firstName || user?.displayName?.split(" ")[0] || "",
        lastName:
          profile?.lastName ||
          user?.displayName?.split(" ").slice(1).join(" ") ||
          "",
        email: profile?.email || user?.email || "",
        phone: profile?.phone || "",
        avatar: undefined,
      });
    }
  }, [profile, user, reset]);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    setValue("avatar", file, {
      shouldDirty: true,
      shouldValidate: true,
    });

    const previewUrl = URL.createObjectURL(file);
    setSelectedFilePreview(previewUrl);
  };

  useEffect(() => {
    return () => {
      if (selectedFilePreview) {
        URL.revokeObjectURL(selectedFilePreview);
      }
    };
  }, [selectedFilePreview]);

  const onSubmit = async (userData: AccountSettingsValues) => {
    setSaveSuccess(null);
    setSaveError(null);
    setIsSubmitting(true);
    try {
      await updateUserProfile({
        firstName: userData.firstName,
        lastName: userData.lastName,
        phone: userData.phone,
        avatar: userData.avatar,
      });
      setSaveSuccess("Account settings saved successfully!");
    } catch (err) {
      setSaveError(getFriendlyErrorMessage(err));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      sx={{
        border: 1,
        borderColor: "divider",
        borderRadius: 2,
        overflow: "hidden",
        width: 1,
      }}
    >
      <Typography
        variant="h5"
        sx={{
          px: 3,
          py: 2,
          fontWeight: 500,
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        Account Settings
      </Typography>

      {saveSuccess && (
        <Alert severity="success" sx={{ m: 3, mb: 0 }}>
          {saveSuccess}
        </Alert>
      )}

      {saveError && (
        <Alert severity="error" sx={{ m: 3, mb: 0 }}>
          {saveError}
        </Alert>
      )}

      <Stack
        direction={{ xs: "column-reverse", md: "row" }}
        sx={{
          gap: { xs: 4, md: 6 },
          p: 3,
          alignItems: { xs: "center", md: "flex-start" },
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ flex: 1, width: 1 }}
          noValidate
        >
          <Box sx={{ mb: 2 }}>
            <Typography variant="body2" sx={{ mb: 0.75 }}>
              First name
            </Typography>
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="filled"
                  error={!!errors.firstName}
                  helperText={errors.firstName?.message}
                  fullWidth
                  required
                />
              )}
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography variant="body2" sx={{ mb: 0.75 }}>
              Last name
            </Typography>
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="filled"
                  error={!!errors.lastName}
                  helperText={errors.lastName?.message}
                  fullWidth
                  required
                />
              )}
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography variant="body2" sx={{ mb: 0.75 }}>
              Email
            </Typography>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  type="email"
                  variant="filled"
                  disabled
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  fullWidth
                  required
                />
              )}
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" sx={{ mb: 0.75 }}>
              Phone
            </Typography>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="filled"
                  error={!!errors.phone}
                  helperText={errors.phone?.message}
                  fullWidth
                  required
                />
              )}
            />
          </Box>

          <Button
            type="submit"
            variant="contained"
            disabled={isSubmitting}
            sx={{ width: { xs: "100%", sm: 200 } }}
          >
            {isSubmitting ? "Saving..." : "Save Changes"}
          </Button>
        </Box>

        <Controller
          name="avatar"
          control={control}
          render={() => (
            <Stack
              direction="column"
              spacing={3}
              sx={{ minWidth: { xs: "auto", md: 240, lg: 280 }, alignItems: "center" }}
            >
              <Avatar
                src={activeAvatar}
                alt="Profile"
                sx={{
                  width: {
                    xs: 180,
                    sm: 224,
                  },
                  height: {
                    xs: 180,
                    sm: 224,
                  },
                  border: 1,
                  borderColor: "divider",
                }}
              >
                <Iconify
                  icon="solar:user-bold"
                  sx={{
                    width: {
                      xs: 80,
                      md: 112,
                    },
                    height: {
                      xs: 80,
                      md: 112,
                    },
                  }}
                />
              </Avatar>

              <input
                ref={fileInputRef}
                type="file"
                hidden
                accept="image/jpeg,image/png,image/webp"
                onChange={handleImageChange}
              />

              <Button
                variant="outlined"
                onClick={() => fileInputRef.current?.click()}
              >
                Choose Image
              </Button>

              {errors.avatar && (
                <Typography
                  variant="body2"
                  sx={{
                    color: "error.main",
                    textAlign: "center",
                  }}
                >
                  {errors.avatar.message}
                </Typography>
              )}
            </Stack>
          )}
        />
      </Stack>
    </Box>
  );
};

export default AccountSettings;
