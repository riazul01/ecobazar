import { useState } from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import FormHelperText from "@mui/material/FormHelperText";
import Iconify from "components/base/Iconify";
import customShadows from "theme/shadows";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { accountPaths, paths } from "routes/paths";
import { useAuth } from "providers/AuthProvider";
import { useNavigate } from "react-router";
import { getFriendlyErrorMessage } from "utils/firebaseErrors";
import * as z from "zod";

const SignUpFormSchema = z
  .object({
    email: z.email("Enter a valid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Please confirm your password"),
    acceptTerms: z.boolean().refine((val) => val === true, {
      message: "You must accept the terms and conditions",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type SignUpFormValues = z.infer<typeof SignUpFormSchema>;

const SignUpForm = () => {
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const [authError, setAuthError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormValues>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
    resolver: zodResolver(SignUpFormSchema),
  });

  const onSubmit = async (userData: SignUpFormValues) => {
    setAuthError(null);
    setIsSubmitting(true);
    try {
      await signUp(userData.email, userData.password);
      navigate(accountPaths.settings, { replace: true });
    } catch (err) {
      setAuthError(getFriendlyErrorMessage(err));
    } finally {
      setIsSubmitting(false);
    }
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
        Create Account
      </Typography>

      {authError && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {authError}
        </Alert>
      )}

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

        <Controller
          name="confirmPassword"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              variant="filled"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
              sx={{ mb: 2 }}
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
          )}
        />

        <Controller
          name="acceptTerms"
          control={control}
          render={({ field }) => (
            <Box sx={{ mb: 2.5 }}>
              <FormControlLabel
                control={<Checkbox {...field} checked={field.value} />}
                label="Accept all terms & Conditions"
              />
              {errors.acceptTerms && (
                <FormHelperText error sx={{ ml: 1.5 }}>
                  {errors.acceptTerms.message}
                </FormHelperText>
              )}
            </Box>
          )}
        />

        <Button
          variant="contained"
          type="submit"
          disabled={isSubmitting}
          fullWidth
          sx={{ mb: 3 }}
        >
          {isSubmitting ? "Creating Account..." : "Create Account"}
        </Button>

        <Typography
          variant="body2"
          sx={{ pb: 1, color: "text.secondary", textAlign: "center" }}
        >
          Already have account?{" "}
          <Typography
            variant="body2"
            component={Link}
            href={paths.signIn}
            sx={{ fontWeight: 500, color: "text.primary" }}
          >
            SignIn
          </Typography>
        </Typography>
      </form>
    </Box>
  );
};

export default SignUpForm;
