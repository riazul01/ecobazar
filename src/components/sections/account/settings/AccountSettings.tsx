import { type ChangeEvent, useEffect, useRef, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Iconify from "components/base/Iconify";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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

interface AccountSettingsProps {
  initialData?: {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    avatar?: string;
  };
}

const AccountSettings = ({ initialData = {} }: AccountSettingsProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [avatarPreview, setAvatarPreview] = useState(initialData.avatar ?? "");

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<AccountSettingsValues>({
    mode: "onBlur",
    defaultValues: {
      firstName: initialData.firstName ?? "Dianne",
      lastName: initialData.lastName ?? "Russell",
      email: initialData.email ?? "dianne.russell@gmail.com",
      phone: initialData.phone ?? "(603) 555-0123",
      avatar: undefined,
    },
    resolver: zodResolver(AccountSettingsSchema),
  });

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
    setAvatarPreview(previewUrl);
  };

  useEffect(() => {
    return () => {
      if (avatarPreview.startsWith("blob:")) {
        URL.revokeObjectURL(avatarPreview);
      }
    };
  }, [avatarPreview]);

  const onSubmit = (userData: AccountSettingsValues) => {
    console.log(userData);
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

      <Stack
        sx={{
          gap: { xs: 4, md: 6 },
          p: 3,
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ flex: 1 }}
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

          <Button type="submit" variant="contained" sx={{ width: 200 }}>
            Save Changes
          </Button>
        </Box>

        <Controller
          name="avatar"
          control={control}
          render={() => (
            <Stack
              direction="column"
              spacing={3}
              sx={{ minWidth: 320, alignItems: "center" }}
            >
              <Avatar
                src={avatarPreview}
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
