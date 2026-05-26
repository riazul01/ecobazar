import { forwardRef } from "react";
import { Box, type BoxProps } from "@mui/material";
import { Swiper, type SwiperProps } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

export interface ReactSwiperProps extends BoxProps {
  slidesPerView: number;
  children: React.ReactNode;
  onBeforeInit?: (swiper: SwiperClass) => void;
  onSlideChange?: (swiper: SwiperClass) => void;
  spaceBetween?: number;
}

const ReactSwiper = forwardRef<null | SwiperProps, ReactSwiperProps>(
  (
    {
      children,
      slidesPerView,
      onBeforeInit,
      onSlideChange,
      spaceBetween,
      ...rest
    },
    ref,
  ) => {
    return (
      <Box
        component={Swiper}
        ref={ref}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={spaceBetween ?? 30}
        slidesPerView={slidesPerView}
        onBeforeInit={onBeforeInit}
        onSlideChange={onSlideChange}
        sx={{ width: 1 }}
        {...rest}
      >
        {children}
      </Box>
    );
  },
);

export default ReactSwiper;
