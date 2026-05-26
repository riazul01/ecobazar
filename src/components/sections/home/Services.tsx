import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SectionWrapper from "components/sections/SectionWrapper";
import Iconify from "components/base/Iconify";
import { services } from "data/services";

const Services = () => {
  return (
    <SectionWrapper sx={{ mb: 8 }}>
      <Box
        sx={{
          p: 0.5,
          border: 1,
          borderColor: "divider",
          borderRadius: 2.5,
          bgcolor: "white",
        }}
      >
        <Box
          sx={{
            py: 3,
            width: 1,
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            gap: 4,
            bgcolor: "grey.50",
            borderRadius: 2,
          }}
        >
          {services.map((item) => (
            <Stack
              key={item.id}
              spacing={2}
              direction="column"
              sx={{
                alignItems: "center",
                "&:hover .icon-wrapper": {
                  bgcolor: "primary.main",
                  transform: "scale(1.05)",
                },
                "&:hover .icon-wrapper svg": {
                  color: "white",
                },
              }}
            >
              <Stack
                className="icon-wrapper"
                sx={(theme) => ({
                  height: 75,
                  width: 75,
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: alpha(theme.palette.primary.light, 0.2),
                  borderRadius: "50%",
                  transition: theme.transitions.create(
                    ["background-color", "transform"],
                    {
                      duration: theme.transitions.duration.shorter,
                    },
                  ),
                })}
              >
                <Iconify
                  icon={item.icon}
                  sx={(theme) => ({
                    color: "primary.main",
                    fontSize: "h2.fontSize",
                    transition: theme.transitions.create("color"),
                  })}
                />
              </Stack>
              <Box>
                <Typography variant="body1" sx={{ textAlign: "center" }}>
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mt: 0.75,
                    color: "text.secondary",
                    textAlign: "center",
                  }}
                >
                  {item.subtitle}
                </Typography>
              </Box>
            </Stack>
          ))}
        </Box>
      </Box>
    </SectionWrapper>
  );
};

export default Services;
