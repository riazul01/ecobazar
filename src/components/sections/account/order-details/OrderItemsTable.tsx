import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Image from "components/base/Image";

export interface OrderItem {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

interface OrderItemsTableProps {
  items: OrderItem[];
}

const OrderItemsTable = ({ items }: OrderItemsTableProps) => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        p: 0,
        overflow: "auto",
        borderRadius: 0,
      }}
    >
      <Table
        sx={{
          minWidth: 720,
        }}
      >
        <TableHead>
          <TableRow
            sx={{
              bgcolor: "grey.100",
            }}
          >
            {["PRODUCT", "PRICE", "QUANTITY", "SUBTOTAL"].map((item, index) => (
              <TableCell
                align={index === 3 ? "right" : "left"}
                sx={{ py: 1.5 }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{ color: "text.secondary" }}
                >
                  {item}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {items.map((item) => (
            <TableRow
              key={item.id}
              sx={{
                "& td": {
                  borderBottom: 1,
                  borderColor: "divider",
                  py: 2,
                },

                "&:last-child td": {
                  borderBottom: 0,
                },
              }}
            >
              <TableCell>
                <Stack spacing={2.5} sx={{ alignItems: "center" }}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    sx={{
                      width: 64,
                      height: 64,
                      objectFit: "cover",
                      borderRadius: 2,
                      flexShrink: 0,
                    }}
                  />

                  <Typography variant="body1">{item.name}</Typography>
                </Stack>
              </TableCell>

              <TableCell>
                <Typography variant="body1">
                  ${item.price.toFixed(2)}
                </Typography>
              </TableCell>

              <TableCell>
                <Typography variant="body1">x{item.quantity}</Typography>
              </TableCell>

              <TableCell align="right">
                <Typography variant="subtitle1">
                  ${(item.price * item.quantity).toFixed(2)}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderItemsTable;
