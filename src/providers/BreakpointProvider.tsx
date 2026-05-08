import { use, useMemo, createContext, type PropsWithChildren } from "react";
import { useTheme, useMediaQuery } from "@mui/material";

export interface Breakpoints {
  isXs: boolean;
  isSm: boolean;
  isMd: boolean;
  isLg: boolean;
  isXl: boolean;
  downSm: boolean;
  downMd: boolean;
  downLg: boolean;
  downXl: boolean;
  activeBreakpoint: "xs" | "sm" | "md" | "lg" | "xl";
}

export const BreakpointContext = createContext({} as Breakpoints);

const BreakpointProvider = ({ children }: PropsWithChildren) => {
  const theme = useTheme();

  // exact breakpoints
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));
  const isSm = useMediaQuery(theme.breakpoints.only("sm"));
  const isMd = useMediaQuery(theme.breakpoints.only("md"));
  const isLg = useMediaQuery(theme.breakpoints.only("lg"));
  const isXl = useMediaQuery(theme.breakpoints.only("xl"));

  // down breakpoints
  const downSm = useMediaQuery(theme.breakpoints.down("sm"));
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  const downLg = useMediaQuery(theme.breakpoints.down("lg"));
  const downXl = useMediaQuery(theme.breakpoints.down("xl"));

  const activeBreakpoint = useMemo(() => {
    if (isXs) return "xs";
    if (isSm) return "sm";
    if (isMd) return "md";
    if (isLg) return "lg";
    return "xl";
  }, [isXs, isSm, isMd, isLg]);

  return (
    <BreakpointContext
      value={{
        isXs,
        isSm,
        isMd,
        isLg,
        isXl,
        downSm,
        downMd,
        downLg,
        downXl,
        activeBreakpoint,
      }}
    >
      {children}
    </BreakpointContext>
  );
};

export const useBreakpoints = () => use(BreakpointContext);

export default BreakpointProvider;
