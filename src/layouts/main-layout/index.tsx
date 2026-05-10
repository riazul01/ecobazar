import type { PropsWithChildren } from "react";
import Box from "@mui/material/Box";
import Topbar from "./topbar/Topbar";
import Header from "./header/Header";
import Navbar from "./navbar/Navbar";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <Box component="main" sx={{ minHeight: "100vh" }}>
      <Topbar />
      <Header />
      <Navbar />
      {children}
      <Newsletter />
      <Footer />
    </Box>
  );
};

export default MainLayout;
