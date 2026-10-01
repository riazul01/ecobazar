import { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import { alpha, useTheme } from "@mui/material";

import Iconify from "components/base/Iconify";
import ImageSlider from "components/sections/product-details/ImageSlider";
import ProductSummary from "components/sections/product-details/ProductSummary";
import type { ProductData } from "data/products";

interface ProductQuickViewModalProps {
  open: boolean;
  onClose: () => void;
  product: ProductData;
}

const ProductQuickViewModal = ({
  open,
  onClose,
  product,
}: ProductQuickViewModalProps) => {
  const theme = useTheme();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, handleKeyDown]);

  if (!open) return null;

  const productImages = [product.image, ...(product.images || [])];

  return createPortal(
    <Box
      role="dialog"
      aria-modal="true"
      aria-label={`${product.name} Quick View`}
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: theme.zIndex.modal,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: { xs: 2, sm: 3, md: 4 },
      }}
    >
      {/* Backdrop */}
      <Box
        onClick={onClose}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 1,
          height: 1,
          bgcolor: alpha(theme.palette.common.black, 0.5),
          transition: "opacity 0.25s ease",
          animation: "fadeIn 0.25s ease",
          "@keyframes fadeIn": {
            from: { opacity: 0 },
            to: { opacity: 1 },
          },
        }}
      />

      {/* Modal Dialog Body */}
      <Box
        sx={{
          position: "relative",
          bgcolor: "background.paper",
          borderRadius: 3,
          boxShadow: `0 24px 48px ${alpha(theme.palette.common.black, 0.2)}`,
          maxWidth: 1080,
          width: 1,
          maxHeight: "90vh",
          overflowY: "auto",
          p: { xs: 2.5, sm: 4 },
          zIndex: 1,
          animation: "scaleIn 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
          "@keyframes scaleIn": {
            from: { opacity: 0, transform: "scale(0.95)" },
            to: { opacity: 1, transform: "scale(1)" },
          },
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={onClose}
          aria-label="Close modal"
          sx={{
            position: "absolute",
            top: { xs: 12, sm: 16 },
            right: { xs: 12, sm: 16 },
            zIndex: 2,
            width: 36,
            height: 36,
            bgcolor: "grey.100",
            color: "text.primary",
            "&:hover": {
              bgcolor: "grey.200",
            },
          }}
        >
          <Iconify icon="material-symbols:close-rounded" sx={{ fontSize: 22 }} />
        </IconButton>

        {/* Modal Content */}
        <Grid container spacing={{ xs: 3, sm: 4, md: 5 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <ImageSlider
              images={productImages}
              productName={product.name}
              imageHeight={{ xs: 260, sm: 320, md: 360 }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <ProductSummary product={product} />
          </Grid>
        </Grid>
      </Box>
    </Box>,
    document.body,
  );
};

export default ProductQuickViewModal;
