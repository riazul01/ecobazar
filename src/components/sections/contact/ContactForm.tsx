import { Stack, Typography } from "@mui/material";
import customShadows from "theme/shadows";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

export const ContactFormSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters"),
  email: z.email("Enter a valid email"),
  subject: z.string().trim().min(3, "Subject must be at least 3 characters"),
  message: z.string().trim().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof ContactFormSchema>;

const ContactForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    mode: "onBlur",
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log(data);
  };

  return (
    <Stack
      direction="column"
      sx={{
        flex: 1,
        borderRadius: 2,
        boxShadow: customShadows[0],
        p: { xs: 3, md: 5 },
      }}
    >
      <Typography variant="h4" sx={{ mb: 1 }}>
        Just Say Hello!
      </Typography>
      <Typography sx={{ mb: 3, color: "text.secondary" }}>
        Whether you have questions about our organic products, our dedicated{" "}
        <br /> team is always here to provide friendly and reliable support.
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="filled"
                  placeholder="Your Name"
                  error={!!errors.name}
                  helperText={errors.name?.message}
                  fullWidth
                  required
                />
              )}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  type="email"
                  variant="filled"
                  placeholder="Email Address"
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  fullWidth
                  required
                />
              )}
            />
          </Grid>

          <Grid size={12}>
            <Controller
              name="subject"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="filled"
                  placeholder="Subject"
                  error={!!errors.subject}
                  helperText={errors.subject?.message}
                  fullWidth
                  required
                />
              )}
            />
          </Grid>

          <Grid size={12}>
            <Controller
              name="message"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="filled"
                  placeholder="Message"
                  multiline
                  rows={5}
                  error={!!errors.message}
                  helperText={errors.message?.message}
                  fullWidth
                  required
                />
              )}
            />
          </Grid>

          <Grid size={12}>
            <Button
              type="submit"
              variant="contained"
              sx={{ width: 200, mt: 1 }}
            >
              Send Message
            </Button>
          </Grid>
        </Grid>
      </form>
    </Stack>
  );
};

export default ContactForm;
