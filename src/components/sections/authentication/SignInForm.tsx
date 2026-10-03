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
import Alert from "@mui/material/Alert";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Iconify from "components/base/Iconify";
import customShadows from "theme/shadows";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { accountPaths, paths } from "routes/paths";
import { useAuth } from "providers/AuthProvider";
import { useNavigate, useLocation } from "react-router";
import { getFriendlyErrorMessage } from "utils/firebaseErrors";
import * as z from "zod";

const SignInFormSchema = z.object({
  email: z.email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  remember: z.boolean(),
});

type SignInFormValues = z.infer<typeof SignInFormSchema>;

const SignInForm = () => {
  const { signIn, resetPassword } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [authError, setAuthError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Forgot password dialog state
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotEmailError, setForgotEmailError] = useState("");
  const [resetSuccess, setResetSuccess] = useState<string | null>(null);
  const [resetError, setResetError] = useState<string | null>(null);
  const [isResetting, setIsResetting] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormValues>({
    mode: "onBlur",
    defaultValues: { email: "", password: "", remember: false },
    resolver: zodResolver(SignInFormSchema),
  });

  const from =
    (location.state as { from?: { pathname?: string } })?.from?.pathname ||
    accountPaths.dashboard;

  const onSubmit = async (userData: SignInFormValues) => {
    setAuthError(null);
    setIsSubmitting(true);
    try {
      await signIn(userData.email, userData.password, userData.remember);
      navigate(from, { replace: true });
    } catch (err) {
      setAuthError(getFriendlyErrorMessage(err));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenForgotDialog = (e: React.MouseEvent) => {
    e.preventDefault();
    setResetSuccess(null);
    setResetError(null);
    setForgotEmailError("");
    setForgotPasswordOpen(true);
  };

  const handleSendResetEmail = async () => {
    if (!forgotEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(forgotEmail)) {
      setForgotEmailError("Please enter a valid email address");
      return;
    }
    setForgotEmailError("");
    setResetError(null);
    setIsResetting(true);
    try {
      await resetPassword(forgotEmail);
      setResetSuccess(
        "Password reset email sent! Check your inbox for instructions.",
      );
    } catch (err) {
      setResetError(getFriendlyErrorMessage(err));
    } finally {
      setIsResetting(false);
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
        Sign In
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
            onClick={handleOpenForgotDialog}
            sx={{ color: "text.secondary", cursor: "pointer" }}
          >
            Forgot password?
          </Typography>
        </Stack>

        <Button
          variant="contained"
          type="submit"
          disabled={isSubmitting}
          fullWidth
          sx={{ mb: 3 }}
        >
          {isSubmitting ? "Signing in..." : "Sign In"}
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

      {/* Forgot Password Dialog */}
      <Dialog
        open={forgotPasswordOpen}
        onClose={() => setForgotPasswordOpen(false)}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle sx={{ pb: 1 }}>Reset Password</DialogTitle>
        <DialogContent sx={{ pt: 1 }}>
          <Typography variant="body2" sx={{ mb: 2, color: "text.secondary" }}>
            Enter your email address and we'll send you a link to reset your
            password.
          </Typography>
          {resetSuccess && (
            <Alert severity="success" sx={{ mb: 2 }}>
              {resetSuccess}
            </Alert>
          )}
          {resetError && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {resetError}
            </Alert>
          )}
          <TextField
            variant="filled"
            type="email"
            placeholder="Email address"
            value={forgotEmail}
            onChange={(e) => {
              setForgotEmail(e.target.value);
              setForgotEmailError("");
            }}
            error={!!forgotEmailError}
            helperText={forgotEmailError}
            fullWidth
            autoFocus
          />
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button
            variant="text"
            onClick={() => setForgotPasswordOpen(false)}
            sx={{ color: "text.secondary" }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleSendResetEmail}
            disabled={isResetting}
          >
            {isResetting ? "Sending..." : "Send Reset Link"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default SignInForm;
