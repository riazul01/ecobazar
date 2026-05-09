import type { PropsWithChildren } from "react";
import Box from "@mui/material/Box";
import Topbar from "./topbar/Topbar";
import Header from "./header/Header";
import Navbar from "./navbar/Navbar";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <Box component="main" sx={{ minHeight: "100vh" }}>
      <Topbar />
      <Header />
      <Navbar />
      {children}
    </Box>
  );
};

export default MainLayout;
