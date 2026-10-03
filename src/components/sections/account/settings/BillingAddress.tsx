import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
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

const BillingAddressSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  companyName: z.string().optional(),
  streetAddress: z.string().min(1, "Street address is required"),
  country: z.string().min(1, "Country is required"),
  state: z.string().min(1, "State is required"),
  zipCode: z.string().min(1, "Zip code is required"),
  email: z.email("Enter a valid email"),
  phone: z.string().min(1, "Phone number is required"),
});

type BillingAddressValues = z.infer<typeof BillingAddressSchema>;

const countries = ["United States", "Canada", "United Kingdom", "Australia"];

const states = ["Washington DC", "California", "New York", "Texas", "Florida"];

const BillingAddress = () => {
  const { profile, user, updateBillingAddress } = useAuth();

  const [saveSuccess, setSaveSuccess] = useState<string | null>(null);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const initialBilling = profile?.billingAddress;

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BillingAddressValues>({
    mode: "onBlur",
    defaultValues: {
      firstName: initialBilling?.firstName ?? profile?.firstName ?? "",
      lastName: initialBilling?.lastName ?? profile?.lastName ?? "",
      companyName: initialBilling?.companyName ?? "",
      streetAddress: initialBilling?.streetAddress ?? "",
      country: initialBilling?.country ?? "United States",
      state: initialBilling?.state ?? "Washington DC",
      zipCode: initialBilling?.zipCode ?? "",
      email: initialBilling?.email ?? profile?.email ?? user?.email ?? "",
      phone: initialBilling?.phone ?? profile?.phone ?? "",
    },
    resolver: zodResolver(BillingAddressSchema),
  });

  useEffect(() => {
    if (profile || user) {
      const billing = profile?.billingAddress;
      reset({
        firstName: billing?.firstName ?? profile?.firstName ?? "",
        lastName: billing?.lastName ?? profile?.lastName ?? "",
        companyName: billing?.companyName ?? "",
        streetAddress: billing?.streetAddress ?? "",
        country: billing?.country ?? "United States",
        state: billing?.state ?? "Washington DC",
        zipCode: billing?.zipCode ?? "",
        email: billing?.email ?? profile?.email ?? user?.email ?? "",
        phone: billing?.phone ?? profile?.phone ?? "",
      });
    }
  }, [profile, user, reset]);

  const onSubmit = async (data: BillingAddressValues) => {
    setSaveSuccess(null);
    setSaveError(null);
    setIsSubmitting(true);
    try {
      await updateBillingAddress(data);
      setSaveSuccess("Billing address saved successfully!");
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
        Billing Address
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

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        sx={{ p: 3 }}
      >
        <Stack direction="column" sx={{ gap: 2 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => (
                  <Box>
                    <Typography variant="body2" sx={{ mb: 0.75 }}>
                      First name
                    </Typography>

                    <TextField
                      {...field}
                      variant="filled"
                      error={!!errors.firstName}
                      helperText={errors.firstName?.message}
                      fullWidth
                    />
                  </Box>
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                  <Box>
                    <Typography variant="body2" sx={{ mb: 0.75 }}>
                      Last name
                    </Typography>

                    <TextField
                      {...field}
                      variant="filled"
                      error={!!errors.lastName}
                      helperText={errors.lastName?.message}
                      fullWidth
                    />
                  </Box>
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                name="companyName"
                control={control}
                render={({ field }) => (
                  <Box>
                    <Typography variant="body2" sx={{ mb: 0.75 }}>
                      Company Name{" "}
                      <Typography
                        component="span"
                        variant="inherit"
                        sx={{ color: "text.secondary" }}
                      >
                        (optional)
                      </Typography>
                    </Typography>

                    <TextField
                      {...field}
                      variant="filled"
                      error={!!errors.companyName}
                      helperText={errors.companyName?.message}
                      fullWidth
                    />
                  </Box>
                )}
              />
            </Grid>
          </Grid>

          {/* Street Address */}
          <Controller
            name="streetAddress"
            control={control}
            render={({ field }) => (
              <Box>
                <Typography variant="body2" sx={{ mb: 0.75 }}>
                  Street Address
                </Typography>

                <TextField
                  {...field}
                  variant="filled"
                  error={!!errors.streetAddress}
                  helperText={errors.streetAddress?.message}
                  fullWidth
                />
              </Box>
            )}
          />

          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                name="country"
                control={control}
                render={({ field }) => (
                  <Box>
                    <Typography variant="body2" sx={{ mb: 0.75 }}>
                      Country / Region
                    </Typography>

                    <TextField
                      {...field}
                      select
                      variant="filled"
                      error={!!errors.country}
                      helperText={errors.country?.message}
                      fullWidth
                      slotProps={{
                        select: {
                          IconComponent: () => (
                            <Iconify
                              icon="solar:alt-arrow-down-linear"
                              sx={{ mr: 1.5 }}
                            />
                          ),
                        },
                      }}
                    >
                      {countries.map((country) => (
                        <MenuItem key={country} value={country}>
                          {country}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Box>
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                name="state"
                control={control}
                render={({ field }) => (
                  <Box>
                    <Typography variant="body2" sx={{ mb: 0.75 }}>
                      States
                    </Typography>

                    <TextField
                      {...field}
                      select
                      variant="filled"
                      error={!!errors.state}
                      helperText={errors.state?.message}
                      fullWidth
                      slotProps={{
                        select: {
                          IconComponent: () => (
                            <Iconify
                              icon="solar:alt-arrow-down-linear"
                              sx={{ mr: 1.5 }}
                            />
                          ),
                        },
                      }}
                    >
                      {states.map((state) => (
                        <MenuItem key={state} value={state}>
                          {state}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Box>
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Controller
                name="zipCode"
                control={control}
                render={({ field }) => (
                  <Box>
                    <Typography variant="body2" sx={{ mb: 0.75 }}>
                      Zip Code
                    </Typography>

                    <TextField
                      {...field}
                      variant="filled"
                      error={!!errors.zipCode}
                      helperText={errors.zipCode?.message}
                      fullWidth
                    />
                  </Box>
                )}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 1 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Box>
                    <Typography variant="body2" sx={{ mb: 0.75 }}>
                      Email
                    </Typography>

                    <TextField
                      {...field}
                      type="email"
                      variant="filled"
                      error={!!errors.email}
                      helperText={errors.email?.message}
                      fullWidth
                    />
                  </Box>
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <Box>
                    <Typography variant="body2" sx={{ mb: 0.75 }}>
                      Phone
                    </Typography>

                    <TextField
                      {...field}
                      variant="filled"
                      error={!!errors.phone}
                      helperText={errors.phone?.message}
                      fullWidth
                    />
                  </Box>
                )}
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            variant="contained"
            disabled={isSubmitting}
            sx={{ width: 200 }}
          >
            {isSubmitting ? "Saving..." : "Save Changes"}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default BillingAddress;
