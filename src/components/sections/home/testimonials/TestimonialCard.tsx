import { Avatar, CardContent, Rating, Stack, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import Iconify from "components/base/Iconify";
import customShadows from "theme/shadows";
import type { Testimonial } from "data/testimonials";

interface TestimonialCardProps {
  data: Testimonial;
}

const TestimonialCard = ({ data }: TestimonialCardProps) => {
  return (
    <Card sx={{ p: 3, borderRadius: 2, boxShadow: customShadows[2] }}>
      <CardContent sx={{ p: "0px !important" }}>
        <Iconify
          icon="entypo:quote"
          sx={{ color: "primary.main", fontSize: 36, opacity: 0.3 }}
        />
        <Typography variant="body2" sx={{ mb: 2 }}>
          {data.message}
        </Typography>
        <Stack sx={{ alignItems: "center", justifyContent: "space-between" }}>
          <Stack spacing={1.5} sx={{ alignItems: "center" }}>
            <Avatar src={data.avatar} sx={{ width: 56, height: 56 }} />
            <div>
              <Typography variant="subtitle1">Robert Fox</Typography>
              <Typography variant="body2" color="text.secondary">
                {data.role}
              </Typography>
            </div>
          </Stack>
          <Rating
            name="testimonial-rating"
            size="small"
            defaultValue={data.rating}
            precision={0.5}
            readOnly
          />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
