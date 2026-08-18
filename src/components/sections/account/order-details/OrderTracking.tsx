import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Iconify from "components/base/Iconify";

export interface OrderStep {
  id: number;
  label: string;
}

interface OrderTrackingProps {
  steps: OrderStep[];
  currentStep: number;
}

const OrderTracking = ({ steps, currentStep }: OrderTrackingProps) => {
  return (
    <Stack
      direction={{
        xs: "column",
        sm: "row",
      }}
      sx={{
        mt: 3,
        mb: 5,
        width: 1,
        alignItems: {
          xs: "flex-start",
          sm: "stretch",
        },
      }}
    >
      {steps.map((step, index) => {
        const completed = step.id < currentStep;
        const active = step.id === currentStep;
        const pending = step.id > currentStep;

        return (
          <Box
            key={step.id}
            sx={{
              flex: 1,
              position: "relative",
              width: {
                xs: 1,
                sm: "auto",
              },
              pb: {
                xs: index === steps.length - 1 ? 0 : 5,
                sm: 0,
              },
            }}
          >
            {/* Connector */}
            {index !== steps.length - 1 && (
              <Box
                sx={{
                  position: "absolute",
                  zIndex: 0,

                  top: {
                    xs: 22,
                    sm: 20,
                  },
                  left: {
                    xs: 21,
                    sm: "50%",
                  },

                  width: {
                    xs: 4,
                    sm: 1,
                  },
                  height: {
                    xs: 1,
                    sm: 6,
                  },

                  bgcolor: "grey.200",
                }}
              >
                {(completed || active) && (
                  <Box
                    sx={{
                      bgcolor: "primary.main",
                      borderRadius: 999,

                      width: {
                        xs: 1,
                        sm: completed ? 1 : "50%",
                      },

                      height: {
                        xs: completed ? 1 : "50%",
                        sm: 1,
                      },
                    }}
                  />
                )}
              </Box>
            )}

            <Stack
              direction={{
                xs: "row",
                sm: "column",
              }}
              spacing={2}
              sx={{
                position: "relative",
                alignItems: "center",
                zIndex: 1,
              }}
            >
              <Box
                sx={{
                  width: {
                    xs: 40,
                    sm: 44,
                  },
                  height: {
                    xs: 40,
                    sm: 44,
                  },
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "subtitle1.fontSize",
                  fontWeight: 500,
                  flexShrink: 0,
                  transition: (theme) =>
                    theme.transitions.create(
                      ["background-color", "border-color"],
                      {
                        duration: theme.transitions.duration.shorter,
                      },
                    ),

                  ...(completed && {
                    bgcolor: "primary.main",
                    color: "common.white",
                  }),

                  ...(active && {
                    bgcolor: "primary.main",
                    color: "common.white",
                  }),

                  ...(pending && {
                    bgcolor: "common.white",
                    color: "primary.main",
                    border: (theme) =>
                      `1.5px dashed ${theme.palette.primary.main}`,
                  }),
                }}
              >
                {completed ? (
                  <Iconify
                    icon="lucide:check"
                    sx={{
                      fontSize: {
                        xs: 20,
                        sm: 24,
                      },
                    }}
                  />
                ) : (
                  step.id.toString().padStart(2, "0")
                )}
              </Box>

              <Typography
                variant="subtitle1"
                sx={{
                  color: active || completed ? "primary.main" : "text.primary",
                  textAlign: {
                    xs: "left",
                    sm: "center",
                  },
                  lineHeight: 1.35,
                  maxWidth: {
                    sm: 120,
                  },
                }}
              >
                {step.label}
              </Typography>
            </Stack>
          </Box>
        );
      })}
    </Stack>
  );
};

export default OrderTracking;
