export interface Currency {
  id: string | number;
  name: string;
  code: string;
  symbol: string;
}

export const currencies: Currency[] = [
  {
    id: 1,
    name: "US Dollar",
    code: "USD",
    symbol: "$",
  },
  {
    id: 2,
    name: "Euro",
    code: "EUR",
    symbol: "€",
  },
  {
    id: 3,
    name: "Bangladeshi Taka",
    code: "BDT",
    symbol: "৳",
  },
  {
    id: 4,
    name: "Chinese Yuan",
    code: "CNY",
    symbol: "¥",
  },
];
