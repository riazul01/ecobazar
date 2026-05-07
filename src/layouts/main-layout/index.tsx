import type { PropsWithChildren } from "react";
import Box from "@mui/material/Box";
import Topbar from "./topbar/Topbar";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <Box component="main" sx={{ minHeight: "100vh" }}>
      <Topbar />
      {children}
    </Box>
  );
};

export default MainLayout;
