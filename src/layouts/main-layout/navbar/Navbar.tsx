import { navLinks } from "data/nav-links";
import { useState } from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SectionWrapper from "components/sections/SectionWrapper";
import Iconify from "components/base/Iconify";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <Box sx={{ width: 1, bgcolor: "grey.900" }}>
        <SectionWrapper>
          <Toolbar sx={{ width: 1, justifyContent: "space-between" }}>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              {navLinks.map((item) => (
                <Typography
                  key={item.id}
                  variant="subtitle1"
                  component={Link}
                  href={item.path}
                  sx={{
                    mr: 4,
                    color: item.active ? "white" : "text.disabled",
                  }}
                >
                  {item.name}
                </Typography>
              ))}
            </Box>

            <Stack
              component={Link}
              href="tel:+8801234567890"
              sx={{ gap: 1, alignItems: "center" }}
            >
              <Iconify
                icon="ph:phone-call"
                sx={{ color: "white", fontSize: 28 }}
              />
              <Typography variant="subtitle1" sx={{ color: "white" }}>
                (219) 555-0114
              </Typography>
            </Stack>

            <IconButton
              size="large"
              onClick={toggleDrawer}
              sx={{ mr: -1, display: { xs: "flex", md: "none" } }}
            >
              <Iconify icon="gg:menu" sx={{ color: "white" }} />
            </IconButton>
          </Toolbar>
        </SectionWrapper>
      </Box>
      <Sidebar drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Navbar;
