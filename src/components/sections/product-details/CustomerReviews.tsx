import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { alpha } from "@mui/material";

import Iconify from "components/base/Iconify";
import user1 from "assets/profiles/user1.webp";
import user2 from "assets/profiles/user2.webp";
import user3 from "assets/profiles/user3.webp";

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Kristin Watson",
    avatar: user1,
    rating: 5,
    date: "2 mins ago",
    comment:
      "Duis at ullamcorper nulla, eu dictum eros. Pellentesque quam metus, sagittis nec luctus at, pellentesque at lacus. The cabbage was super fresh, crisp, and delicious!",
    verified: true,
  },
  {
    id: 2,
    name: "Jane Cooper",
    avatar: user2,
    rating: 5,
    date: "30 Apr, 2026",
    comment:
      "Keep the soil evenly moist for the healthiest cabbage. Wonderful organic quality and fast delivery. Very pleased with this purchase!",
    verified: true,
  },
  {
    id: 3,
    name: "Jacob Jones",
    avatar: user3,
    rating: 4,
    date: "24 Apr, 2026",
    comment:
      "Vivamus eget euismod magna. Nam sed lacinia nibh, et lacinia lacus. Fresh produce delivered right to my doorstep in top condition.",
    verified: true,
  },
];

const CustomerReviews = () => {
  return (
    <Stack direction="column" sx={{ gap: 3.5, width: 1, maxWidth: 900 }}>
      {/* Write a Review Button */}
      <Box sx={{ display: "flex", justifyContent: { xs: "stretch", sm: "flex-end" }, width: 1, pb: 1 }}>
        <Button
          variant="contained"
          size="medium"
          startIcon={<Iconify icon="solar:pen-new-square-linear" sx={{ fontSize: 18 }} />}
          sx={{ px: 2.5, py: 1, width: { xs: 1, sm: "auto" } }}
        >
          Write a Review
        </Button>
      </Box>

      {/* Reviews List */}
      <Stack direction="column" sx={{ gap: 3 }}>
        {reviews.map((rev, index) => (
          <Box key={rev.id}>
            <Stack
              sx={{
                alignItems: { xs: "flex-start", sm: "center" },
                justifyContent: "space-between",
                flexDirection: { xs: "column", sm: "row" },
                gap: 1,
                mb: 1.5,
              }}
            >
              <Stack sx={{ alignItems: "center", gap: 1.5 }}>
                <Avatar
                  src={rev.avatar}
                  alt={rev.name}
                  sx={{ width: 44, height: 44, border: 1, borderColor: "divider" }}
                />
                <Box>
                  <Stack sx={{ alignItems: "center", gap: 1 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      {rev.name}
                    </Typography>
                    {rev.verified && (
                      <Stack sx={{ alignItems: "center", gap: 0.35, color: "success.main" }}>
                        <Iconify icon="solar:verified-check-bold" sx={{ fontSize: 15 }} />
                        <Typography variant="caption" sx={{ color: "success.main", fontWeight: 600 }}>
                          Verified
                        </Typography>
                      </Stack>
                    )}
                  </Stack>
                  <Rating value={rev.rating} size="small" readOnly sx={{ mt: 0.25 }} />
                </Box>
              </Stack>

              <Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 500 }}>
                {rev.date}
              </Typography>
            </Stack>

            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                pl: { xs: 0, sm: 7 },
                lineHeight: 1.7,
              }}
            >
              {rev.comment}
            </Typography>

            {index < reviews.length - 1 && <Divider sx={{ mt: 3 }} />}
          </Box>
        ))}
      </Stack>

      {/* Load More Button */}
      <Box sx={{ display: "flex", justifyContent: "flex-start", pt: 1 }}>
        <Button
          size="medium"
          sx={(theme) => ({
            px: 3,
            py: 1,
            borderRadius: 8,
            fontWeight: 500,
            textTransform: "none",
            bgcolor: alpha(theme.palette.primary.main, 0.1),
            color: "primary.main",
            "&:hover": {
              bgcolor: alpha(theme.palette.primary.main, 0.18),
            },
          })}
        >
          Load More
        </Button>
      </Box>
    </Stack>
  );
};

export default CustomerReviews;
