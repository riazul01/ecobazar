import { useState } from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Iconify from "components/base/Iconify";
import customShadows from "theme/shadows";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { paths } from "routes/paths";
import * as z from "zod";

const SignInFormSchema = z.object({
  email: z.email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  remember: z.boolean(),
});

type SignInFormValues = z.infer<typeof SignInFormSchema>;

const SignInForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormValues>({
    mode: "onBlur",
    defaultValues: { email: "", password: "", remember: false },
    resolver: zodResolver(SignInFormSchema),
  });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (userData: SignInFormValues) => {
    console.log(userData);
  };

  return (
    <Box
      sx={{
        width: 1,
        maxWidth: 520,
        borderRadius: 2,
        boxShadow: customShadows[1],
        px: { xs: 2, sm: 3 },
        py: 3,
        mx: "auto",
      }}
    >
      <Typography variant="h2" sx={{ mb: 3, textAlign: "center" }}>
        Sign In
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              variant="filled"
              type="email"
              placeholder="Email"
              error={!!errors.email}
              helperText={errors.email?.message}
              sx={{ mb: 1.5 }}
              fullWidth
              required
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              variant="filled"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              error={!!errors.password}
              helperText={errors.password?.message}
              sx={{ mb: 2 }}
              slotProps={{
                input: {
                  endAdornment: field.value.length > 0 && (
                    <InputAdornment position="end">
                      <IconButton
                        size="small"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <Iconify
                          icon={
                            showPassword ? "codicon:eye" : "codicon:eye-closed"
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
          )}
        />

        <Stack
          sx={{
            mb: 2.5,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Controller
            name="remember"
            control={control}
            render={({ field }) => (
              <FormControlLabel
                control={<Checkbox {...field} checked={field.value} />}
                label="Remember me"
              />
            )}
          />
          <Typography
            variant="body2"
            component={Link}
            href="#!"
            sx={{ color: "text.secondary" }}
          >
            Forgot password?
          </Typography>
        </Stack>

        <Button variant="contained" type="submit" fullWidth sx={{ mb: 3 }}>
          Sign In
        </Button>

        <Typography
          variant="body2"
          sx={{ pb: 1, color: "text.secondary", textAlign: "center" }}
        >
          Don’t have account?{" "}
          <Typography
            variant="body2"
            component={Link}
            href={paths.signUp}
            sx={{ fontWeight: 500, color: "text.primary" }}
          >
            Register
          </Typography>
        </Typography>
      </form>
    </Box>
  );
};

export default SignInForm;
