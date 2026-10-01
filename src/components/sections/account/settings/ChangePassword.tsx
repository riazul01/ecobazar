import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Iconify from "components/base/Iconify";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const ChangePasswordFormSchema = z
  .object({
    currentPassword: z.string().min(1, "Current password is required"),
    newPassword: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type ChangePasswordFormValues = z.infer<typeof ChangePasswordFormSchema>;

const ChangePassword = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePasswordFormValues>({
    mode: "onBlur",
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    resolver: zodResolver(ChangePasswordFormSchema),
  });

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = (userData: ChangePasswordFormValues) => {
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
        Change Password
      </Typography>

      <Stack
        component="form"
        direction="column"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        sx={{
          gap: 2,
          p: 3,
        }}
      >
        <Controller
          name="currentPassword"
          control={control}
          render={({ field }) => (
            <Box>
              <Typography variant="body2" sx={{ mb: 0.75 }}>
                Current Password
              </Typography>

              <TextField
                {...field}
                variant="filled"
                type={showCurrentPassword ? "text" : "password"}
                placeholder="Password"
                error={!!errors.currentPassword}
                helperText={errors.currentPassword?.message}
                slotProps={{
                  input: {
                    endAdornment: field.value.length > 0 && (
                      <InputAdornment position="end">
                        <IconButton
                          size="small"
                          onClick={() =>
                            setShowCurrentPassword(!showCurrentPassword)
                          }
                        >
                          <Iconify
                            icon={
                              showCurrentPassword
                                ? "codicon:eye"
                                : "codicon:eye-closed"
                            }
                          />
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
                fullWidth
                required
              />
            </Box>
          )}
        />

        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Controller
              name="newPassword"
              control={control}
              render={({ field }) => (
                <Box>
                  <Typography variant="body2" sx={{ mb: 0.75 }}>
                    New Password
                  </Typography>

                  <TextField
                    {...field}
                    variant="filled"
                    type={showNewPassword ? "text" : "password"}
                    placeholder="Password"
                    error={!!errors.newPassword}
                    helperText={errors.newPassword?.message}
                    slotProps={{
                      input: {
                        endAdornment: field.value.length > 0 && (
                          <InputAdornment position="end">
                            <IconButton
                              size="small"
                              onClick={() =>
                                setShowNewPassword(!showNewPassword)
                              }
                            >
                              <Iconify
                                icon={
                                  showNewPassword
                                    ? "codicon:eye"
                                    : "codicon:eye-closed"
                                }
                              />
                            </IconButton>
                          </InputAdornment>
                        ),
                      },
                    }}
                    fullWidth
                    required
                  />
                </Box>
              )}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <Box>
                  <Typography variant="body2" sx={{ mb: 0.75 }}>
                    Confirm Password
                  </Typography>

                  <TextField
                    {...field}
                    variant="filled"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Password"
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword?.message}
                    slotProps={{
                      input: {
                        endAdornment: field.value.length > 0 && (
                          <InputAdornment position="end">
                            <IconButton
                              size="small"
                              onClick={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                              }
                            >
                              <Iconify
                                icon={
                                  showConfirmPassword
                                    ? "codicon:eye"
                                    : "codicon:eye-closed"
                                }
                              />
                            </IconButton>
                          </InputAdornment>
                        ),
                      },
                    }}
                    fullWidth
                    required
                  />
                </Box>
              )}
            />
          </Grid>
        </Grid>

        <Button
          type="submit"
          variant="contained"
          sx={{ alignSelf: "flex-start" }}
        >
          Change Password
        </Button>
      </Stack>
    </Box>
  );
};

export default ChangePassword;
