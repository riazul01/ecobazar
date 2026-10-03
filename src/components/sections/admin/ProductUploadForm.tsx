import { useState, type ChangeEvent } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Alert from "@mui/material/Alert";
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Rating from "@mui/material/Rating";
import Divider from "@mui/material/Divider";
import Iconify from "components/base/Iconify";
import customShadows from "theme/shadows";
import { Controller, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "firebase.ts";
import * as z from "zod";

const categories = [
  { value: "fruits", label: "Fresh Fruits" },
  { value: "vegetables", label: "Fresh Vegetables" },
  { value: "meat", label: "Meat & Fish" },
  { value: "snacks", label: "Snacks" },
  { value: "beverages", label: "Beverages" },
  { value: "beauty", label: "Beauty & Health" },
  { value: "bakery", label: "Bakery & Pastry" },
  { value: "cooking", label: "Cooking Essentials" },
  { value: "diabetic", label: "Diabetic Food" },
  { value: "detergents", label: "Detergents & Cleaning" },
  { value: "oil", label: "Oil & Ghee" },
];

const subCategories = [
  { value: "popular", label: "Popular" },
  { value: "hot-deals", label: "Hot Deals" },
  { value: "top-rated", label: "Top Rated" },
  { value: "best-seller", label: "Best Seller" },
  { value: "featured", label: "Featured" },
  { value: "new-arrivals", label: "New Arrivals" },
];

const units = ["kg", "g", "pc", "pack", "bag", "liter", "ml", "box"];

const ProductSchema = z.object({
  name: z.string().min(2, "Product name is required"),
  category: z.string().min(1, "Category is required"),
  subCategory: z.string().min(1, "Sub-category is required"),
  price: z.coerce.number().positive("Price must be greater than 0"),
  discountInPercent: z.coerce.number().min(0).max(99),
  weight: z.coerce.number().positive("Weight/Quantity must be greater than 0"),
  unit: z.string().min(1, "Unit is required"),
  stockCount: z.coerce.number().int().min(0),
  inStock: z.boolean(),
  brandName: z.string().min(1, "Brand name is required"),
  brandLink: z.string().optional(),
  desc: z.string().min(5, "Product description is required"),
});

type ProductFormValues = z.input<typeof ProductSchema>;

// Compress image to base64 for Firestore storage
const compressImageToBase64 = (
  file: File,
  maxWidth = 800,
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

const ProductUploadForm = () => {
  const [mainImage, setMainImage] = useState<string>("");
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>(["organic", "fresh"]);
  const [currentTagInput, setCurrentTagInput] = useState<string>("");
  const [imageUrlInput, setImageUrlInput] = useState<string>("");

  const [galleryUrlInput, setGalleryUrlInput] = useState<string>("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductFormValues>({
    mode: "onBlur",
    defaultValues: {
      name: "",
      category: "fruits",
      subCategory: "popular",
      price: 10,
      discountInPercent: 0,
      weight: 1,
      unit: "kg",
      stockCount: 100,
      inStock: true,
      brandName: "Ecobazar Farm",
      brandLink: "",
      desc: "",
    },
    resolver: zodResolver(ProductSchema),
  });

  const watchedValues = useWatch({ control });

  const handleMainImageChange = async (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      const base64 = await compressImageToBase64(file);
      setMainImage(base64);
    } catch (err) {
      console.error("Image compression error:", err);
    }
  };

  const handleAddImageUrl = () => {
    if (imageUrlInput.trim()) {
      setMainImage(imageUrlInput.trim());
      setImageUrlInput("");
    }
  };

  const handleAddGalleryImages = async (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;
    const newImages: string[] = [];
    for (let i = 0; i < files.length; i++) {
      try {
        const base64 = await compressImageToBase64(files[i], 600, 600, 0.75);
        newImages.push(base64);
      } catch (err) {
        console.error("Gallery image compression error:", err);
      }
    }
    setGalleryImages((prev) => [...prev, ...newImages].slice(0, 6));
  };

  const handleAddGalleryUrl = () => {
    const trimmed = galleryUrlInput.trim();
    if (trimmed) {
      if (galleryImages.length >= 6) {
        setErrorMessage("Maximum 6 gallery images allowed.");
        return;
      }
      setGalleryImages((prev) => [...prev, trimmed]);
      setGalleryUrlInput("");
    }
  };

  const handleRemoveGalleryImage = (index: number) => {
    setGalleryImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAddTag = () => {
    const trimmed = currentTagInput.trim().toLowerCase();
    if (trimmed && !tags.includes(trimmed)) {
      setTags([...tags, trimmed]);
      setCurrentTagInput("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const onSubmit = async (data: ProductFormValues) => {
    setSuccessMessage(null);
    setErrorMessage(null);

    if (!mainImage) {
      setErrorMessage("Please upload or provide a main product image.");
      return;
    }

    setIsSubmitting(true);
    try {
      const productPayload = {
        name: data.name,
        category: data.category,
        subCategory: data.subCategory,
        price: Number(data.price),
        discountInPercent: Number(data.discountInPercent) || 0,
        weight: Number(data.weight),
        unit: data.unit,
        rating: 5,
        ratingCount: 1,
        image: mainImage,
        images: galleryImages.length > 0 ? galleryImages : [mainImage],
        desc: data.desc,
        tags: tags,
        inStock: Boolean(data.inStock),
        stockCount: Number(data.stockCount) || 0,
        sales: 0,
        brandName: data.brandName,
        brandLink: data.brandLink || "",
        createdAt: serverTimestamp(),
      };

      await addDoc(collection(db, "products"), productPayload);

      setSuccessMessage(
        `Product "${data.name}" uploaded successfully to Cloud Firestore!`,
      );

      // Reset form
      reset();
      setMainImage("");
      setImageUrlInput("");
      setGalleryImages([]);
      setGalleryUrlInput("");
      setTags(["organic", "fresh"]);
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "Failed to upload product. Please check your permissions.";
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const numPrice = Number(watchedValues.price) || 0;
  const numDiscount = Number(watchedValues.discountInPercent) || 0;
  const discountedPrice = numPrice ? numPrice - (numPrice * numDiscount) / 100 : 0;

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
            Upload New Product
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
            Add new fresh groceries and organic items to the store catalog.
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
                Basic Information
              </Typography>

              <Grid container spacing={2.5} sx={{ mb: 3 }}>
                <Grid size={12}>
                  <Box>
                    <Typography variant="body2" sx={{ mb: 0.75, fontWeight: 500 }}>
                      Product Name <Box component="span" sx={{ color: "error.main" }}>*</Box>
                    </Typography>
                    <Controller
                      name="name"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          placeholder="e.g. Fresh Red Strawberries"
                          variant="filled"
                          error={!!errors.name}
                          helperText={errors.name?.message}
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
                          {categories.map((cat) => (
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
                      Sub Category / Badge <Box component="span" sx={{ color: "error.main" }}>*</Box>
                    </Typography>
                    <Controller
                      name="subCategory"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          select
                          variant="filled"
                          error={!!errors.subCategory}
                          helperText={errors.subCategory?.message}
                          fullWidth
                        >
                          {subCategories.map((sub) => (
                            <MenuItem key={sub.value} value={sub.value}>
                              {sub.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      )}
                    />
                  </Box>
                </Grid>
              </Grid>

              <Typography variant="h5" sx={{ mb: 2.5, fontWeight: 500 }}>
                Pricing & Stock
              </Typography>

              <Grid container spacing={2.5} sx={{ mb: 3 }}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Box>
                    <Typography variant="body2" sx={{ mb: 0.75, fontWeight: 500 }}>
                      Regular Price ($) <Box component="span" sx={{ color: "error.main" }}>*</Box>
                    </Typography>
                    <Controller
                      name="price"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          type="number"
                          placeholder="0.00"
                          variant="filled"
                          slotProps={{
                            input: {
                              startAdornment: (
                                <InputAdornment position="start">
                                  $
                                </InputAdornment>
                              ),
                            },
                          }}
                          error={!!errors.price}
                          helperText={errors.price?.message}
                          fullWidth
                        />
                      )}
                    />
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <Box>
                    <Typography variant="body2" sx={{ mb: 0.75, fontWeight: 500 }}>
                      Discount Percentage (%)
                    </Typography>
                    <Controller
                      name="discountInPercent"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          type="number"
                          placeholder="0"
                          variant="filled"
                          slotProps={{
                            input: {
                              endAdornment: (
                                <InputAdornment position="end">%</InputAdornment>
                              ),
                            },
                          }}
                          error={!!errors.discountInPercent}
                          helperText={errors.discountInPercent?.message}
                          fullWidth
                        />
                      )}
                    />
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, sm: 4 }}>
                  <Box>
                    <Typography variant="body2" sx={{ mb: 0.75, fontWeight: 500 }}>
                      Weight / Quantity <Box component="span" sx={{ color: "error.main" }}>*</Box>
                    </Typography>
                    <Controller
                      name="weight"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          type="number"
                          placeholder="1"
                          variant="filled"
                          error={!!errors.weight}
                          helperText={errors.weight?.message}
                          fullWidth
                        />
                      )}
                    />
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, sm: 4 }}>
                  <Box>
                    <Typography variant="body2" sx={{ mb: 0.75, fontWeight: 500 }}>
                      Unit <Box component="span" sx={{ color: "error.main" }}>*</Box>
                    </Typography>
                    <Controller
                      name="unit"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          select
                          variant="filled"
                          error={!!errors.unit}
                          helperText={errors.unit?.message}
                          fullWidth
                        >
                          {units.map((unit) => (
                            <MenuItem key={unit} value={unit}>
                              {unit}
                            </MenuItem>
                          ))}
                        </TextField>
                      )}
                    />
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, sm: 4 }}>
                  <Box>
                    <Typography variant="body2" sx={{ mb: 0.75, fontWeight: 500 }}>
                      Stock Count <Box component="span" sx={{ color: "error.main" }}>*</Box>
                    </Typography>
                    <Controller
                      name="stockCount"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          type="number"
                          placeholder="100"
                          variant="filled"
                          error={!!errors.stockCount}
                          helperText={errors.stockCount?.message}
                          fullWidth
                        />
                      )}
                    />
                  </Box>
                </Grid>

                <Grid size={12}>
                  <Controller
                    name="inStock"
                    control={control}
                    render={({ field }) => (
                      <FormControlLabel
                        control={
                          <Switch
                            checked={Boolean(field.value)}
                            onChange={(e) => field.onChange(e.target.checked)}
                            color="success"
                          />
                        }
                        label="Product is In Stock and Available"
                      />
                    )}
                  />
                </Grid>
              </Grid>

              <Typography variant="h5" sx={{ mb: 2.5, fontWeight: 500 }}>
                Brand & Details
              </Typography>

              <Grid container spacing={2.5} sx={{ mb: 3 }}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Box>
                    <Typography variant="body2" sx={{ mb: 0.75, fontWeight: 500 }}>
                      Brand Name <Box component="span" sx={{ color: "error.main" }}>*</Box>
                    </Typography>
                    <Controller
                      name="brandName"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          placeholder="e.g. FarmFresh"
                          variant="filled"
                          error={!!errors.brandName}
                          helperText={errors.brandName?.message}
                          fullWidth
                        />
                      )}
                    />
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <Box>
                    <Typography variant="body2" sx={{ mb: 0.75, fontWeight: 500 }}>
                      Brand Link (Optional)
                    </Typography>
                    <Controller
                      name="brandLink"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          placeholder="https://..."
                          variant="filled"
                          error={!!errors.brandLink}
                          helperText={errors.brandLink?.message}
                          fullWidth
                        />
                      )}
                    />
                  </Box>
                </Grid>

                <Grid size={12}>
                  <Box>
                    <Typography variant="body2" sx={{ mb: 0.75, fontWeight: 500 }}>
                      Product Description <Box component="span" sx={{ color: "error.main" }}>*</Box>
                    </Typography>
                    <Controller
                      name="desc"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          placeholder="Describe the freshness, origin, taste, and quality of the product..."
                          variant="filled"
                          multiline
                          rows={3}
                          error={!!errors.desc}
                          helperText={errors.desc?.message}
                          fullWidth
                        />
                      )}
                    />
                  </Box>
                </Grid>

                <Grid size={12}>
                  <Typography variant="body2" sx={{ mb: 0.75, fontWeight: 500 }}>
                    Product Tags
                  </Typography>
                  <Stack spacing={1} sx={{ mb: 1.5, alignItems: "center" }}>
                    <TextField
                      size="small"
                      variant="filled"
                      placeholder="Add tag (e.g. organic, vegan)"
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

              {/* Images Section */}
              <Typography variant="h5" sx={{ mb: 2.5, fontWeight: 500 }}>
                Product Images
              </Typography>

              <Grid container spacing={2.5} sx={{ mb: 4 }}>
                <Grid size={12}>
                  <Typography variant="body2" sx={{ mb: 0.75, fontWeight: 500 }}>
                    Main Product Image <Box component="span" sx={{ color: "error.main" }}>*</Box>
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
                        onChange={handleMainImageChange}
                      />
                    </Button>

                    <Stack
                      spacing={1}
                      sx={{ flex: 1, width: 1, alignItems: "center" }}
                    >
                      <TextField
                        size="small"
                        variant="filled"
                        placeholder="Or paste image URL (https://...)"
                        value={imageUrlInput}
                        onChange={(e) => setImageUrlInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            handleAddImageUrl();
                          }
                        }}
                        fullWidth
                      />
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={handleAddImageUrl}
                        disabled={!imageUrlInput.trim()}
                        sx={{ height: 40, whiteSpace: "nowrap", flexShrink: 0, px: 2 }}
                      >
                        Set URL
                      </Button>
                    </Stack>
                  </Stack>
                </Grid>

                <Grid size={12}>
                  <Typography variant="body2" sx={{ mb: 0.75, fontWeight: 500 }}>
                    Additional Gallery Images (Optional)
                  </Typography>
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ alignItems: "center", mb: 2 }}>
                    <Button
                      variant="outlined"
                      component="label"
                      size="small"
                      startIcon={<Iconify icon="solar:gallery-add-bold" />}
                      sx={{ height: 40, whiteSpace: "nowrap", flexShrink: 0, px: 2 }}
                    >
                      Choose Files
                      <input
                        type="file"
                        hidden
                        multiple
                        accept="image/jpeg,image/png,image/webp"
                        onChange={handleAddGalleryImages}
                      />
                    </Button>

                    <Stack
                      spacing={1}
                      sx={{ flex: 1, width: 1, alignItems: "center" }}
                    >
                      <TextField
                        size="small"
                        variant="filled"
                        placeholder="Or paste gallery image URL (https://...)"
                        value={galleryUrlInput}
                        onChange={(e) => setGalleryUrlInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            handleAddGalleryUrl();
                          }
                        }}
                        fullWidth
                      />
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={handleAddGalleryUrl}
                        disabled={!galleryUrlInput.trim()}
                        sx={{ height: 40, whiteSpace: "nowrap", flexShrink: 0, px: 2 }}
                      >
                        Add URL
                      </Button>
                    </Stack>
                  </Stack>

                  {galleryImages.length > 0 && (
                    <Stack
                      spacing={1.5}
                      sx={{ flexWrap: "wrap", gap: 1 }}
                    >
                      {galleryImages.map((img, index) => (
                        <Box
                          key={index}
                          sx={{
                            position: "relative",
                            width: 72,
                            height: 72,
                            borderRadius: 1.5,
                            border: 1,
                            borderColor: "divider",
                            overflow: "hidden",
                          }}
                        >
                          <img
                            src={img}
                            alt={`gallery-${index}`}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                          <IconButton
                            size="small"
                            onClick={() => handleRemoveGalleryImage(index)}
                            sx={{
                              position: "absolute",
                              top: 2,
                              right: 2,
                              bgcolor: "rgba(0,0,0,0.6)",
                              color: "white",
                              p: 0.25,
                              "&:hover": { bgcolor: "error.main" },
                            }}
                          >
                            <Iconify icon="mdi:close" sx={{ fontSize: 14 }} />
                          </IconButton>
                        </Box>
                      ))}
                    </Stack>
                  )}
                </Grid>
              </Grid>

              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={isSubmitting}
                startIcon={<Iconify icon="solar:box-bold" />}
                sx={{ px: 4, py: 1.5 }}
              >
                {isSubmitting ? "Uploading Product..." : "Publish Product"}
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
            {/* Ecobazar Authentic Product Card */}
            <Card
              sx={{
                outline: 1,
                outlineColor: "divider",
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: customShadows[1],
                bgcolor: "background.paper",
                mb: 2.5,
              }}
            >
              {/* Media Section */}
              <Box
                sx={{
                  position: "relative",
                  height: 240,
                  bgcolor: "grey.50",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                {mainImage ? (
                  <CardMedia
                    component="img"
                    image={mainImage}
                    alt={watchedValues.name || "Product preview"}
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
                    sx={{ alignItems: "center", color: "text.disabled" }}
                  >
                    <Iconify icon="solar:gallery-wide-bold" sx={{ fontSize: 52 }} />
                    <Typography variant="caption" sx={{ fontWeight: 500 }}>
                      No image uploaded yet
                    </Typography>
                  </Stack>
                )}

                {/* Badges */}
                {numDiscount > 0 && (
                  <Chip
                    label={`${numDiscount}% OFF`}
                    size="small"
                    color="error"
                    sx={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      fontWeight: 700,
                      boxShadow: "0 2px 6px rgba(234, 75, 72, 0.3)",
                    }}
                  />
                )}

                <Chip
                  label={
                    subCategories.find((s) => s.value === watchedValues.subCategory)
                      ?.label || watchedValues.subCategory || "Popular"
                  }
                  size="small"
                  sx={{
                    position: "absolute",
                    top: 12,
                    left: 12,
                    textTransform: "capitalize",
                    bgcolor: "rgba(255, 255, 255, 0.9)",
                    backdropFilter: "blur(4px)",
                    fontWeight: 600,
                    fontSize: "0.75rem",
                    border: 1,
                    borderColor: "divider",
                  }}
                />
              </Box>

              {/* Gallery Mini Thumbnails Row */}
              {galleryImages.length > 0 && (
                <Stack
                  spacing={1}
                  sx={{
                    p: 1.25,
                    borderBottom: 1,
                    borderColor: "divider",
                    bgcolor: "grey.50",
                    overflowX: "auto",
                  }}
                >
                  {galleryImages.map((img, idx) => (
                    <Box
                      key={idx}
                      onClick={() => setMainImage(img)}
                      title="Click to preview on card"
                      sx={{
                        width: 42,
                        height: 42,
                        borderRadius: 1,
                        overflow: "hidden",
                        border: 2,
                        borderColor: mainImage === img ? "primary.main" : "divider",
                        cursor: "pointer",
                        flexShrink: 0,
                        transition: "all 0.15s ease",
                        "&:hover": { borderColor: "primary.main" },
                      }}
                    >
                      <img
                        src={img}
                        alt={`gallery-thumb-${idx}`}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </Box>
                  ))}
                </Stack>
              )}

              {/* Card Content */}
              <CardContent sx={{ p: 2 }}>
                <Stack direction="column" spacing={1} sx={{ alignItems: "center", textAlign: "center", width: 1 }}>
                  {/* Category */}
                  <Typography
                    variant="caption"
                    sx={{
                      color: "primary.main",
                      fontWeight: 600,
                      textTransform: "capitalize",
                      letterSpacing: 0.5,
                    }}
                  >
                    {categories.find((c) => c.value === watchedValues.category)
                      ?.label || watchedValues.category || "Fresh Fruits"}
                  </Typography>

                  {/* Product Title */}
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 500,
                      color: "primary.dark",
                      lineHeight: 1.3,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {watchedValues.name || "Fresh Organic Product"}
                  </Typography>

                  {/* Rating */}
                  <Stack spacing={1} sx={{ alignItems: "center" }}>
                    <Rating size="small" value={5} precision={0.5} readOnly />
                    <Typography
                      variant="body2"
                      sx={{ color: "neutral.lighter", fontWeight: 500 }}
                    >
                      (1)
                    </Typography>
                  </Stack>

                  {/* Weight & Unit */}
                  <Typography variant="subtitle2" sx={{ color: "neutral.lighter", fontWeight: 400 }}>
                    {`${Number(watchedValues.weight) || 1} ${watchedValues.unit || "kg"}`}
                  </Typography>

                  {/* Price */}
                  <Stack spacing={1} sx={{ alignItems: "center" }}>
                    <Typography
                      component="ins"
                      variant="h6"
                      sx={{ textDecoration: "none", fontWeight: 500, color: "text.primary" }}
                    >
                      ${discountedPrice.toFixed(2)}
                    </Typography>
                    {numDiscount > 0 && (
                      <Typography
                        component="del"
                        variant="h6"
                        sx={{
                          color: "grey.400",
                          fontWeight: 400,
                        }}
                      >
                        ${numPrice.toFixed(2)}
                      </Typography>
                    )}
                  </Stack>
                </Stack>
              </CardContent>

              {/* Card Actions */}
              <CardActions disableSpacing sx={{ p: 1.5, pt: 0 }}>
                <Button
                  variant="contained"
                  size="medium"
                  startIcon={
                    <Iconify
                      icon="material-symbols:shopping-cart-outline-rounded"
                      sx={{ fontSize: 18 }}
                    />
                  }
                  sx={{ height: 40, border: "none", whiteSpace: "nowrap" }}
                  fullWidth
                >
                  Add to Cart
                </Button>
              </CardActions>
            </Card>

            {/* Product Specifications & Meta Summary Card */}
            <Paper
              elevation={0}
              sx={{
                p: 2.5,
                border: 1,
                borderColor: "divider",
                borderRadius: 2,
                boxShadow: customShadows[1],
                bgcolor: "background.paper",
              }}
            >
              <Typography variant="subtitle2" sx={{ mb: 1.5, fontWeight: 600 }}>
                Catalog Specifications
              </Typography>

              <Stack direction="column" spacing={1.25}>
                <Stack sx={{ justifyContent: "space-between", alignItems: "center" }}>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Stock Availability:
                  </Typography>
                  <Chip
                    size="small"
                    label={
                      watchedValues.inStock
                        ? `In Stock (${Number(watchedValues.stockCount) || 0})`
                        : "Out of Stock"
                    }
                    color={watchedValues.inStock ? "success" : "error"}
                    variant="outlined"
                    sx={{ fontWeight: 600, height: 24, fontSize: "0.75rem" }}
                  />
                </Stack>

                <Divider sx={{ my: 0.5 }} />

                <Stack sx={{ justifyContent: "space-between" }}>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Brand:
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {watchedValues.brandName || "Ecobazar Farm"}
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

                {watchedValues.desc && (
                  <>
                    <Divider sx={{ my: 0.5 }} />
                    <Box>
                      <Typography variant="body2" sx={{ color: "text.secondary", mb: 0.5 }}>
                        Description Snippet:
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: "text.primary",
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          lineHeight: 1.4,
                        }}
                      >
                        {watchedValues.desc}
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

export default ProductUploadForm;
