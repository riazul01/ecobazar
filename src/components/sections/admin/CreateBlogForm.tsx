import { useState, type ChangeEvent } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Alert from "@mui/material/Alert";
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Iconify from "components/base/Iconify";
import customShadows from "theme/shadows";
import { Controller, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "firebase.ts";
import { useAuth } from "providers/AuthProvider";
import * as z from "zod";

const blogCategories = [
  { value: "Healthy", label: "Healthy & Nutrition" },
  { value: "Organic", label: "Organic Food & Farming" },
  { value: "Food & Diet", label: "Food & Diet" },
  { value: "Beverages", label: "Beverages & Drinks" },
  { value: "Cooking", label: "Cooking & Recipes" },
  { value: "Beauty & Health", label: "Beauty & Health" },
  { value: "Tips & Guides", label: "Tips & Guides" },
  { value: "Eco Lifestyle", label: "Eco Lifestyle" },
];

const BlogSchema = z.object({
  title: z.string().min(5, "Blog title must be at least 5 characters"),
  category: z.string().min(1, "Category is required"),
  author: z.string().min(2, "Author name is required"),
  authorRole: z.string().min(2, "Author role is required"),
  authorBio: z.string().optional(),
  readTime: z.string().min(1, "Read time is required"),
  desc: z.string().min(10, "Short summary/description is required"),
  content: z.string().min(20, "Article content is required"),
  quoteText: z.string().optional(),
  quoteAuthor: z.string().optional(),
});

type BlogFormValues = z.input<typeof BlogSchema>;

// Helper to compress image to base64
const compressImageToBase64 = (
  file: File,
  maxWidth = 1200,
  maxHeight = 800,
  quality = 0.8,
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target?.result as string;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          resolve(canvas.toDataURL("image/jpeg", quality));
        } else {
          resolve(event.target?.result as string);
        }
      };
      img.onerror = (err) => reject(err);
    };
    reader.onerror = (err) => reject(err);
  });
};

const formatCurrentPublishDate = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = months[now.getMonth()];
  const year = now.getFullYear();
  return `${day} ${month} ${year}`;
};

const CreateBlogForm = () => {
  const { profile, user } = useAuth();

  const authorDefaultName =
    profile?.firstName && profile?.lastName
      ? `${profile.firstName} ${profile.lastName}`
      : profile?.firstName || user?.displayName || "Ecobazar Editorial";

  const [coverImage, setCoverImage] = useState<string>("");
  const [coverUrlInput, setCoverUrlInput] = useState<string>("");
  const [authorAvatar, setAuthorAvatar] = useState<string>(
    profile?.avatar || user?.photoURL || "",
  );
  const [authorAvatarUrlInput, setAuthorAvatarUrlInput] = useState<string>("");

  const [tags, setTags] = useState<string[]>([
    "Healthy",
    "Organic",
    "Nutrition",
  ]);
  const [currentTagInput, setCurrentTagInput] = useState<string>("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BlogFormValues>({
    mode: "onBlur",
    defaultValues: {
      title: "",
      category: "Healthy",
      author: authorDefaultName,
      authorRole: "Food & Wellness Editor",
      authorBio:
        "Passionate about organic nutrition, sustainable agriculture, and healthy living for modern families.",
      readTime: "5 min read",
      desc: "",
      content: "",
      quoteText: "",
      quoteAuthor: authorDefaultName,
    },
    resolver: zodResolver(BlogSchema),
  });

  const watchedValues = useWatch({ control });

  const handleCoverImageChange = async (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      const base64 = await compressImageToBase64(file, 1200, 800, 0.82);
      setCoverImage(base64);
    } catch (err) {
      console.error("Cover image compression error:", err);
    }
  };

  const handleSetCoverUrl = () => {
    if (coverUrlInput.trim()) {
      setCoverImage(coverUrlInput.trim());
      setCoverUrlInput("");
    }
  };

  const handleAuthorAvatarChange = async (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      const base64 = await compressImageToBase64(file, 300, 300, 0.8);
      setAuthorAvatar(base64);
    } catch (err) {
      console.error("Author avatar compression error:", err);
    }
  };

  const handleSetAuthorAvatarUrl = () => {
    if (authorAvatarUrlInput.trim()) {
      setAuthorAvatar(authorAvatarUrlInput.trim());
      setAuthorAvatarUrlInput("");
    }
  };

  const handleAddTag = () => {
    const trimmed = currentTagInput.trim();
    if (trimmed && !tags.some((t) => t.toLowerCase() === trimmed.toLowerCase())) {
      setTags([...tags, trimmed]);
      setCurrentTagInput("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const onSubmit = async (data: BlogFormValues) => {
    setSuccessMessage(null);
    setErrorMessage(null);

    if (!coverImage) {
      setErrorMessage("Please upload or provide a cover image for the blog article.");
      return;
    }

    setIsSubmitting(true);
    try {
      const publishDateStr = formatCurrentPublishDate();

      // Split multiline content into paragraphs
      const contentParagraphs = data.content
        .split(/\n\s*\n/)
        .map((p) => p.trim())
        .filter((p) => p.length > 0);

      const blogPayload = {
        title: data.title,
        category: data.category,
        tags: tags.length > 0 ? tags : [data.category],
        author: data.author,
        authorRole: data.authorRole || "Author",
        authorAvatar: authorAvatar || "",
        authorBio: data.authorBio || "",
        comments: 0,
        publishDate: publishDateStr,
        readTime: data.readTime || "5 min read",
        desc: data.desc,
        content: contentParagraphs.length > 0 ? contentParagraphs : [data.content],
        quote: data.quoteText
          ? {
              text: data.quoteText,
              author: data.quoteAuthor || data.author,
            }
          : null,
        commentsList: [],
        image: coverImage,
        createdAt: serverTimestamp(),
      };

      await addDoc(collection(db, "blogs"), blogPayload);

      setSuccessMessage(
        `Blog article "${data.title}" published successfully to Cloud Firestore!`,
      );

      // Reset form
      reset();
      setCoverImage("");
      setCoverUrlInput("");
      setTags(["Healthy", "Organic", "Nutrition"]);
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "Failed to publish blog article. Please check your permissions.";
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const publishDate = formatCurrentPublishDate();
  const [dayNumber, monthName] = publishDate.split(" ");

  return (
    <Box sx={{ width: 1 }}>
      <Stack
        sx={{
          mb: 3,
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
        }}
      >
        <Box>
          <Typography variant="h3" sx={{ fontWeight: 600 }}>
            Create Blog Post
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
            Write and publish educational organic guides, health tips, and store news.
          </Typography>
        </Box>
        <Stack
          spacing={1}
          sx={{
            mt: { xs: 1.5, sm: 0 },
            alignItems: "center",
            px: 1.5,
            py: 0.6,
            borderRadius: 8,
            bgcolor: "rgba(0, 178, 7, 0.08)",
            border: 1,
            borderColor: "rgba(0, 178, 7, 0.2)",
          }}
        >
          <Iconify
            icon="solar:shield-check-bold"
            sx={{ color: "primary.main", fontSize: 18 }}
          />
          <Typography
            variant="caption"
            sx={{
              color: "primary.dark",
              fontWeight: 600,
              fontSize: "0.8rem",
            }}
          >
            Admin Authorized
          </Typography>
        </Stack>
      </Stack>

      {successMessage && (
        <Alert severity="success" sx={{ mb: 3 }}>
          {successMessage}
        </Alert>
      )}

      {errorMessage && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {errorMessage}
        </Alert>
      )}

      <Grid container spacing={3}>
        {/* Form Column */}
        <Grid size={{ xs: 12, lg: 8 }}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 2.5, sm: 3.5 },
              border: 1,
              borderColor: "divider",
              borderRadius: 2,
              boxShadow: customShadows[1],
            }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <Typography variant="h5" sx={{ mb: 2.5, fontWeight: 500 }}>
                Article Details
              </Typography>

              <Grid container spacing={2.5} sx={{ mb: 3 }}>
                <Grid size={12}>
                  <Box>
                    <Typography variant="body2" sx={{ mb: 0.75, fontWeight: 500 }}>
                      Blog Title <Box component="span" sx={{ color: "error.main" }}>*</Box>
                    </Typography>
                    <Controller
                      name="title"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          placeholder="e.g. 10 Wholesome Ways to Enjoy Fresh Seasonal Greens"
                          variant="filled"
                          error={!!errors.title}
                          helperText={errors.title?.message}
                          fullWidth
                        />
                      )}
                    />
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <Box>
                    <Typography variant="body2" sx={{ mb: 0.75, fontWeight: 500 }}>
                      Category <Box component="span" sx={{ color: "error.main" }}>*</Box>
                    </Typography>
                    <Controller
                      name="category"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          select
                          variant="filled"
                          error={!!errors.category}
                          helperText={errors.category?.message}
                          fullWidth
                        >
                          {blogCategories.map((cat) => (
                            <MenuItem key={cat.value} value={cat.value}>
                              {cat.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      )}
                    />
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <Box>
                    <Typography variant="body2" sx={{ mb: 0.75, fontWeight: 500 }}>
                      Estimated Read Time <Box component="span" sx={{ color: "error.main" }}>*</Box>
                    </Typography>
                    <Controller
                      name="readTime"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          placeholder="e.g. 5 min read"
                          variant="filled"
                          error={!!errors.readTime}
                          helperText={errors.readTime?.message}
                          fullWidth
                        />
                      )}
                    />
                  </Box>
                </Grid>

                <Grid size={12}>
                  <Box>
                    <Typography variant="body2" sx={{ mb: 0.75, fontWeight: 500 }}>
                      Short Summary / Excerpt <Box component="span" sx={{ color: "error.main" }}>*</Box>
                    </Typography>
                    <Controller
                      name="desc"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          placeholder="Provide a compelling 1-2 sentence overview for the article card..."
                          variant="filled"
                          multiline
                          rows={2}
                          error={!!errors.desc}
                          helperText={errors.desc?.message}
                          fullWidth
                        />
                      )}
                    />
                  </Box>
                </Grid>

                <Grid size={12}>
                  <Box>
                    <Typography variant="body2" sx={{ mb: 0.75, fontWeight: 500 }}>
                      Full Article Content <Box component="span" sx={{ color: "error.main" }}>*</Box>
                    </Typography>
                    <Controller
                      name="content"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          placeholder="Write the full body of the article here. Separate paragraphs with double newlines..."
                          variant="filled"
                          multiline
                          rows={7}
                          error={!!errors.content}
                          helperText={errors.content?.message}
                          fullWidth
                        />
                      )}
                    />
                  </Box>
                </Grid>

                <Grid size={12}>
                  <Typography variant="body2" sx={{ mb: 0.75, fontWeight: 500 }}>
                    Article Tags
                  </Typography>
                  <Stack spacing={1} sx={{ mb: 1.5, alignItems: "center" }}>
                    <TextField
                      size="small"
                      variant="filled"
                      placeholder="Add tag (e.g. Vegan, Healthy, Recipe)"
                      value={currentTagInput}
                      onChange={(e) => setCurrentTagInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          handleAddTag();
                        }
                      }}
                      sx={{ flex: 1 }}
                    />
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={handleAddTag}
                      disabled={!currentTagInput.trim()}
                      sx={{ height: 40, px: 2, whiteSpace: "nowrap", flexShrink: 0 }}
                    >
                      Add Tag
                    </Button>
                  </Stack>
                  <Stack sx={{ flexWrap: "wrap", gap: 1 }}>
                    {tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={`#${tag}`}
                        onDelete={() => handleRemoveTag(tag)}
                        size="small"
                        sx={{
                          bgcolor: "rgba(0, 178, 7, 0.08)",
                          color: "primary.dark",
                          border: 1,
                          borderColor: "rgba(0, 178, 7, 0.25)",
                          fontWeight: 500,
                          "& .MuiChip-label": {
                            color: "primary.dark",
                            px: 1,
                          },
                          "& .MuiChip-deleteIcon": {
                            color: "primary.main",
                            "&:hover": {
                              color: "error.main",
                            },
                          },
                        }}
                      />
                    ))}
                  </Stack>
                </Grid>
              </Grid>

              {/* Author & Quote Section */}
              <Typography variant="h5" sx={{ mb: 2.5, fontWeight: 500 }}>
                Author & Featured Quote
              </Typography>

              <Grid container spacing={2.5} sx={{ mb: 3 }}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Box>
                    <Typography variant="body2" sx={{ mb: 0.75, fontWeight: 500 }}>
                      Author Name <Box component="span" sx={{ color: "error.main" }}>*</Box>
                    </Typography>
                    <Controller
                      name="author"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          placeholder="e.g. Cameron Williamson"
                          variant="filled"
                          error={!!errors.author}
                          helperText={errors.author?.message}
                          fullWidth
                        />
                      )}
                    />
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <Box>
                    <Typography variant="body2" sx={{ mb: 0.75, fontWeight: 500 }}>
                      Author Role <Box component="span" sx={{ color: "error.main" }}>*</Box>
                    </Typography>
                    <Controller
                      name="authorRole"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          placeholder="e.g. Senior Nutritionist"
                          variant="filled"
                          error={!!errors.authorRole}
                          helperText={errors.authorRole?.message}
                          fullWidth
                        />
                      )}
                    />
                  </Box>
                </Grid>

                <Grid size={12}>
                  <Box>
                    <Typography variant="body2" sx={{ mb: 0.75, fontWeight: 500 }}>
                      Author Bio (Optional)
                    </Typography>
                    <Controller
                      name="authorBio"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          placeholder="A brief bio summarizing author background and expertise..."
                          variant="filled"
                          multiline
                          rows={2}
                          error={!!errors.authorBio}
                          helperText={errors.authorBio?.message}
                          fullWidth
                        />
                      )}
                    />
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, sm: 8 }}>
                  <Box>
                    <Typography variant="body2" sx={{ mb: 0.75, fontWeight: 500 }}>
                      Featured Quote / Highlight (Optional)
                    </Typography>
                    <Controller
                      name="quoteText"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          placeholder="e.g. Eating wholesome food today is an investment in your tomorrow."
                          variant="filled"
                          multiline
                          rows={2}
                          fullWidth
                        />
                      )}
                    />
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, sm: 4 }}>
                  <Box>
                    <Typography variant="body2" sx={{ mb: 0.75, fontWeight: 500 }}>
                      Quote Author
                    </Typography>
                    <Controller
                      name="quoteAuthor"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          placeholder="e.g. Cameron Williamson"
                          variant="filled"
                          fullWidth
                        />
                      )}
                    />
                  </Box>
                </Grid>
              </Grid>

              {/* Images Section */}
              <Typography variant="h5" sx={{ mb: 2.5, fontWeight: 500 }}>
                Article Images
              </Typography>

              <Grid container spacing={2.5} sx={{ mb: 4 }}>
                <Grid size={12}>
                  <Typography variant="body2" sx={{ mb: 0.75, fontWeight: 500 }}>
                    Featured Cover Image <Box component="span" sx={{ color: "error.main" }}>*</Box>
                  </Typography>
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ alignItems: "center" }}>
                    <Button
                      variant="outlined"
                      component="label"
                      size="small"
                      startIcon={<Iconify icon="solar:cloud-upload-bold" />}
                      sx={{ height: 40, whiteSpace: "nowrap", flexShrink: 0, px: 2 }}
                    >
                      Choose File
                      <input
                        type="file"
                        hidden
                        accept="image/jpeg,image/png,image/webp"
                        onChange={handleCoverImageChange}
                      />
                    </Button>

                    <Stack
                      spacing={1}
                      sx={{ flex: 1, width: 1, alignItems: "center" }}
                    >
                      <TextField
                        size="small"
                        variant="filled"
                        placeholder="Or paste cover image URL (https://...)"
                        value={coverUrlInput}
                        onChange={(e) => setCoverUrlInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            handleSetCoverUrl();
                          }
                        }}
                        fullWidth
                      />
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={handleSetCoverUrl}
                        disabled={!coverUrlInput.trim()}
                        sx={{ height: 40, whiteSpace: "nowrap", flexShrink: 0, px: 2 }}
                      >
                        Set URL
                      </Button>
                    </Stack>
                  </Stack>
                </Grid>

                <Grid size={12}>
                  <Typography variant="body2" sx={{ mb: 0.75, fontWeight: 500 }}>
                    Author Avatar Image (Optional)
                  </Typography>
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ alignItems: "center" }}>
                    <Button
                      variant="outlined"
                      component="label"
                      size="small"
                      startIcon={<Iconify icon="solar:user-circle-bold" />}
                      sx={{ height: 40, whiteSpace: "nowrap", flexShrink: 0, px: 2 }}
                    >
                      Choose File
                      <input
                        type="file"
                        hidden
                        accept="image/jpeg,image/png,image/webp"
                        onChange={handleAuthorAvatarChange}
                      />
                    </Button>

                    <Stack
                      spacing={1}
                      sx={{ flex: 1, width: 1, alignItems: "center" }}
                    >
                      <TextField
                        size="small"
                        variant="filled"
                        placeholder="Or paste author avatar URL (https://...)"
                        value={authorAvatarUrlInput}
                        onChange={(e) => setAuthorAvatarUrlInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            handleSetAuthorAvatarUrl();
                          }
                        }}
                        fullWidth
                      />
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={handleSetAuthorAvatarUrl}
                        disabled={!authorAvatarUrlInput.trim()}
                        sx={{ height: 40, whiteSpace: "nowrap", flexShrink: 0, px: 2 }}
                      >
                        Set URL
                      </Button>
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>

              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={isSubmitting}
                startIcon={<Iconify icon="solar:document-add-bold" />}
                sx={{ px: 4, py: 1.5 }}
              >
                {isSubmitting ? "Publishing Article..." : "Publish Blog Post"}
              </Button>
            </Box>
          </Paper>
        </Grid>

        {/* Live Card Preview Column */}
        <Grid size={{ xs: 12, lg: 4 }}>
          <Box
            sx={{
              position: { lg: "sticky" },
              top: { lg: 26 },
            }}
          >
            {/* Store Blog Card Preview */}
            <Card
              sx={{
                position: "relative",
                width: 1,
                border: 1,
                borderColor: "divider",
                borderRadius: 2,
                boxShadow: "none",
                bgcolor: "background.paper",
                mb: 2.5,
                overflow: "hidden",
              }}
            >
              {/* Media Section */}
              <Box sx={{ position: "relative", height: 240, bgcolor: "grey.50", overflow: "hidden" }}>
                {coverImage ? (
                  <CardMedia
                    component="img"
                    image={coverImage}
                    alt={watchedValues.title || "Blog cover preview"}
                    sx={{
                      width: 1,
                      height: 1,
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <Stack
                    direction="column"
                    spacing={1}
                    sx={{
                      width: 1,
                      height: 1,
                      alignItems: "center",
                      justifyContent: "center",
                      color: "text.disabled",
                    }}
                  >
                    <Iconify icon="solar:gallery-wide-outline" sx={{ fontSize: 48 }} />
                    <Typography variant="caption" sx={{ fontWeight: 400 }}>
                      No cover image uploaded
                    </Typography>
                  </Stack>
                )}

                {/* Date Badge */}
                <Stack
                  direction="column"
                  sx={{
                    height: 56,
                    width: 56,
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    bottom: 12,
                    left: 12,
                    borderRadius: 1.5,
                    bgcolor: "rgba(255, 255, 255, 0.95)",
                    backdropFilter: "blur(4px)",
                    border: 1,
                    borderColor: "divider",
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 500, lineHeight: 1 }}>
                    {dayNumber}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "text.secondary", textTransform: "uppercase", fontWeight: 400, fontSize: "0.65rem" }}
                  >
                    {monthName}
                  </Typography>
                </Stack>
              </Box>

              {/* Card Content */}
              <CardContent sx={{ p: 2.5, pb: 1 }}>
                <Stack direction="column" spacing={1.5}>
                  {/* Meta Details Row */}
                  <Stack spacing={2} sx={{ alignItems: "center", flexWrap: "wrap" }}>
                    <Stack spacing={0.5} sx={{ color: "text.disabled", alignItems: "center" }}>
                      <Iconify icon="ph:tag" sx={{ fontSize: 16 }} />
                      <Typography variant="caption" sx={{ fontWeight: 400 }}>
                        {tags[0] || watchedValues.category || "Healthy"}
                      </Typography>
                    </Stack>

                    <Stack spacing={0.5} sx={{ color: "text.disabled", alignItems: "center" }}>
                      <Iconify icon="ant-design:user-outlined" sx={{ fontSize: 16 }} />
                      <Typography variant="caption" sx={{ fontWeight: 400 }} noWrap>
                        By {watchedValues.author || "Admin"}
                      </Typography>
                    </Stack>

                    <Stack spacing={0.5} sx={{ color: "text.disabled", alignItems: "center" }}>
                      <Iconify icon="bytesize:message" sx={{ fontSize: 15 }} />
                      <Typography variant="caption" sx={{ fontWeight: 400 }}>
                        0 Comments
                      </Typography>
                    </Stack>
                  </Stack>

                  {/* Article Title */}
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: "primary.dark",
                      lineHeight: 1.3,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {watchedValues.title || "Your Engaging Blog Article Title"}
                  </Typography>

                  {/* Short Description */}
                  {watchedValues.desc && (
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        fontSize: "0.85rem",
                        lineHeight: 1.4,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {watchedValues.desc}
                    </Typography>
                  )}
                </Stack>
              </CardContent>

              {/* Card Actions */}
              <CardActions sx={{ p: 2.5, pt: 0 }}>
                <Button
                  size="small"
                  endIcon={<Iconify icon="material-symbols:arrow-forward-rounded" />}
                  sx={{
                    color: "primary.main",
                    fontWeight: 600,
                    p: 0,
                    minWidth: "auto",
                    pointerEvents: "none",
                    cursor: "default",
                    "&:hover": {
                      bgcolor: "transparent",
                      color: "primary.main",
                    },
                  }}
                >
                  Read More
                </Button>
              </CardActions>
            </Card>

            {/* Catalog Specifications & Meta Summary Card */}
            <Paper
              elevation={0}
              sx={{
                p: 2.5,
                border: 1,
                borderColor: "divider",
                borderRadius: 2,
                boxShadow: "none",
                bgcolor: "background.paper",
              }}
            >
              <Typography variant="subtitle2" sx={{ mb: 1.5, fontWeight: 600 }}>
                Article Metadata
              </Typography>

              <Stack direction="column" spacing={1.25}>
                <Stack sx={{ justifyContent: "space-between", alignItems: "center" }}>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Category:
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {watchedValues.category || "Healthy"}
                  </Typography>
                </Stack>

                <Divider sx={{ my: 0.5 }} />

                <Stack sx={{ justifyContent: "space-between" }}>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Read Time:
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {watchedValues.readTime || "5 min read"}
                  </Typography>
                </Stack>

                <Divider sx={{ my: 0.5 }} />

                <Stack sx={{ justifyContent: "space-between", alignItems: "flex-start" }}>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Tags ({tags.length}):
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, justifyContent: "flex-end", maxWidth: "65%" }}>
                    {tags.length > 0 ? (
                      tags.map((t) => (
                        <Chip
                          key={t}
                          label={`#${t}`}
                          size="small"
                          sx={{
                            height: 22,
                            fontSize: "0.7rem",
                            bgcolor: "grey.100",
                            color: "text.secondary",
                          }}
                        />
                      ))
                    ) : (
                      <Typography variant="caption" sx={{ color: "text.disabled" }}>
                        None
                      </Typography>
                    )}
                  </Box>
                </Stack>

                {watchedValues.quoteText && (
                  <>
                    <Divider sx={{ my: 0.5 }} />
                    <Box>
                      <Typography variant="body2" sx={{ color: "text.secondary", mb: 0.5 }}>
                        Featured Quote:
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: "text.primary",
                          fontStyle: "italic",
                          display: "block",
                        }}
                      >
                        &ldquo;{watchedValues.quoteText}&rdquo;
                      </Typography>
                    </Box>
                  </>
                )}
              </Stack>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CreateBlogForm;
