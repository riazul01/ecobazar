import type { PropsWithChildren } from "react";
import Box from "@mui/material/Box";
import Topbar from "./topbar/Topbar";
import Header from "./header/Header";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <Box component="main" sx={{ minHeight: "100vh" }}>
      <Topbar />
      <Header />
      {children}
    </Box>
  );
};

export default MainLayout;
