import { useRef, useState } from "react";
import type { Swiper as SwiperClass } from "swiper";
import { SwiperSlide } from "swiper/react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ReactSwiper from "components/base/ReactSwiper";
import Iconify from "components/base/Iconify";
import useResizeObserver from "hooks/useResizeObserver";
import { IconButton } from "@mui/material";

interface HasId {
  id: string | number;
}

interface ProductSliderProps<T> {
  title: string;
  SliderCard: React.ComponentType<{ data: T }>;
  data: T[];
}

const TestimonialSlider = <T extends HasId>({
  title,
  SliderCard,
  data,
}: ProductSliderProps<T>) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);
  const containerSize = useResizeObserver(containerRef);
  const [isSlideBegin, setIsSlideBegin] = useState(true);
  const [isSlideEnd, setIsSlideEnd] = useState(false);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <Box ref={containerRef} sx={{ width: 1 }}>
      <Stack
        sx={{ mb: 3, alignItems: "center", justifyContent: "space-between" }}
      >
        <Typography variant="h4">{title}</Typography>

        <Stack
          spacing={{ xs: 1, sm: 1.5 }}
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          <IconButton
            onClick={handlePrev}
            sx={(theme) => ({
              bgcolor: isSlideBegin
                ? `${theme.palette.common.white} !important`
                : `${theme.palette.primary.main} !important`,
              border: 1,
              borderColor: isSlideBegin ? "divider" : "transparent",
            })}
          >
            <Iconify
              icon="fluent:arrow-left-32-filled"
              sx={{
                color: isSlideBegin ? "text.primary" : "white",
                fontSize: "h5.fontSize",
              }}
            />
          </IconButton>
          <IconButton
            onClick={handleNext}
            sx={(theme) => ({
              bgcolor: isSlideEnd
                ? `${theme.palette.common.white} !important`
                : `${theme.palette.primary.main} !important`,
              border: 1,
              borderColor: isSlideEnd ? "divider" : "transparent",
            })}
          >
            <Iconify
              icon="fluent:arrow-right-32-filled"
              sx={{
                color: isSlideEnd ? "text.primary" : "white",
                fontSize: "h5.fontSize",
              }}
            />
          </IconButton>
        </Stack>
      </Stack>

      <ReactSwiper
        slidesPerView={containerSize > 1020 ? 3 : containerSize > 720 ? 2 : 1}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
          setIsSlideBegin(swiper.isBeginning);
          setIsSlideEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsSlideBegin(swiper.isBeginning);
          setIsSlideEnd(swiper.isEnd);
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <SliderCard data={item} />
          </SwiperSlide>
        ))}
      </ReactSwiper>
    </Box>
  );
};

export default TestimonialSlider;
