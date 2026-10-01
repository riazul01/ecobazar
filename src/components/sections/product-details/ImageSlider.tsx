import { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Image from "components/base/Image";

interface ImageSliderProps {
  images?: string[];
  badge?: string;
  productName?: string;
  imageHeight?: number | string | Record<string, number | string>;
}

const defaultImages = [
  "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=800&q=80",
];

const ImageSlider = ({
  images = defaultImages,
  badge = "100% Organic",
  productName = "Chinese Cabbage",
  imageHeight = { xs: 300, sm: 400, md: 460 },
}: ImageSliderProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <Stack direction="column" sx={{ gap: 2, width: 1 }}>
      {/* Main Image Display */}
      <Box
        sx={{
          position: "relative",
          width: 1,
          height: imageHeight,
          borderRadius: 3,
          overflow: "hidden",
          bgcolor: "grey.50",
          border: 1,
          borderColor: "divider",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src={images[selectedImage] || images[0]}
          alt={productName}
          sx={{
            width: 1,
            height: 1,
            objectFit: "cover",
          }}
        />

        {badge && (
          <Chip
            label={badge}
            size="small"
            color="primary"
            sx={{
              position: "absolute",
              top: 16,
              left: 16,
              fontWeight: 600,
              fontSize: "0.75rem",
              borderRadius: 1.5,
              color: "common.white",
            }}
          />
        )}
      </Box>

      {/* Thumbnails Row */}
      <Stack
        sx={{
          gap: { xs: 1.5, sm: 2 },
          overflowX: "auto",
          py: 0.5,
        }}
      >
        {images.map((img, index) => {
          const isSelected = selectedImage === index;
          return (
            <Box
              key={index}
              component="button"
              type="button"
              onClick={() => setSelectedImage(index)}
              aria-label={`View image ${index + 1}`}
              sx={(theme) => ({
                width: { xs: 72, sm: 88 },
                height: { xs: 72, sm: 88 },
                borderRadius: 2,
                overflow: "hidden",
                cursor: "pointer",
                p: 0,
                outline: "none",
                border: 2,
                borderColor: isSelected ? "primary.main" : "divider",
                bgcolor: "grey.50",
                flexShrink: 0,
                transition: theme.transitions.create(["border-color", "box-shadow"]),
                "&:hover": {
                  borderColor: isSelected ? "primary.main" : "primary.light",
                },
                "&:focus-visible": {
                  borderColor: "primary.main",
                  boxShadow: `0 0 0 2px ${theme.palette.primary.light}`,
                },
              })}
            >
              <Image
                src={img}
                alt={`${productName} thumbnail ${index + 1}`}
                sx={{ width: 1, height: 1, objectFit: "cover" }}
              />
            </Box>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default ImageSlider;
