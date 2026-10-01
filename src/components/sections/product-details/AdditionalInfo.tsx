import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";

const specs = [
  { label: "Weight", value: "1 kg (approx. 2.2 lbs)" },
  {
    label: "Color & Appearance",
    value: "Vibrant pale-green & crisp white leaves",
  },
  { label: "Type", value: "100% Organic Leafy Vegetable" },
  { label: "Category", value: "Fresh Farm Greens" },
  {
    label: "Stock Status",
    value: "Available in Stock (1,200 units ready to ship)",
  },
  { label: "Shelf Life", value: "7 to 10 Days when refrigerated" },
  {
    label: "Recommended Storage",
    value: "Keep chilled between 2°C - 4°C in vegetable crisper",
  },
  {
    label: "Farm Origin",
    value: "EcoGreens Valley Farm, Certified Organic Lands",
  },
  {
    label: "Certifications",
    value: "USDA Organic, Non-GMO Project Verified, GlobalGAP",
  },
];

const AdditionalInfo = () => {
  return (
    <TableContainer
      sx={{
        maxWidth: 800,
        width: 1,
      }}
    >
      <Table aria-label="Product specifications table">
        <TableBody>
          {specs.map((spec) => (
            <TableRow
              key={spec.label}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{
                  width: { xs: 160, sm: 220 },
                  fontWeight: 600,
                  color: "text.primary",
                  py: 1.5,
                  pl: 0,
                  pr: 2,
                  borderColor: "divider",
                }}
              >
                {spec.label}:
              </TableCell>
              <TableCell
                sx={{
                  color: "text.secondary",
                  py: 1.5,
                  pl: 1,
                  pr: 0,
                  borderColor: "divider",
                }}
              >
                {spec.value}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdditionalInfo;
