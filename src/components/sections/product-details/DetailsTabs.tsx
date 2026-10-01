import { useState, type SyntheticEvent } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Descriptions from "./Descriptions";
import AdditionalInfo from "./AdditionalInfo";
import CustomerReviews from "./CustomerReviews";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`product-tabpanel-${index}`}
      aria-labelledby={`product-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 4 }}>{children}</Box>}
    </div>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `product-tab-${index}`,
    "aria-controls": `product-tabpanel-${index}`,
  };
};

const DetailsTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 1, my: 6 }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Product details tabs"
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          sx={{
            "& .MuiTab-root": {
              fontSize: { xs: "0.95rem", sm: "1.05rem" },
              fontWeight: 500,
              textTransform: "none",
              py: 2,
              px: { xs: 2, sm: 3 },
              color: "text.secondary",
              transition: (theme) => theme.transitions.create("color"),
              "&:hover": {
                color: "text.primary",
              },
              "&.Mui-selected": {
                color: "text.primary",
              },
            },
            "& .MuiTabs-indicator": {
              height: 3,
              borderRadius: 0,
              bgcolor: "primary.main",
            },
          }}
        >
          <Tab label="Descriptions" {...a11yProps(0)} />
          <Tab label="Additional Information" {...a11yProps(1)} />
          <Tab label="Customer Feedback (128)" {...a11yProps(2)} />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <Descriptions />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <AdditionalInfo />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <CustomerReviews />
      </CustomTabPanel>
    </Box>
  );
};

export default DetailsTabs;
