import {
  createContext,
  useContext,
  useState,
  useMemo,
  type ReactNode,
} from "react";

export interface CartItem {
  id: string | number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  unit?: string;
  weight?: number | string;
}

interface CartContextType {
  cartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  items: CartItem[];
  addToCart: (
    item: Omit<CartItem, "quantity">,
    quantity?: number,
    openDrawer?: boolean,
  ) => void;
  removeFromCart: (id: string | number) => void;
  updateQuantity: (id: string | number, quantity: number) => void;
  clearCart: () => void;
  subtotal: number;
  totalCount: number;
}

const initialCartItems: CartItem[] = [
  {
    id: 1,
    name: "Fresh Green Apple",
    price: 14.99,
    quantity: 2,
    image:
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=600&q=80",
    unit: "kg",
    weight: "1 kg",
  },
  {
    id: 2,
    name: "Chinese Cabbage",
    price: 12.0,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=600&q=80",
    unit: "kg",
    weight: "1 kg",
  },
  {
    id: 3,
    name: "Fresh Orange",
    price: 9.5,
    quantity: 3,
    image:
      "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=600&q=80",
    unit: "kg",
    weight: "1 kg",
  },
];

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [items, setItems] = useState<CartItem[]>(initialCartItems);

  const openCart = () => setCartOpen(true);
  const closeCart = () => setCartOpen(false);
  const toggleCart = () => setCartOpen((prev) => !prev);

  const addToCart = (
    newItem: Omit<CartItem, "quantity">,
    quantity: number = 1,
    openDrawer: boolean = false,
  ) => {
    setItems((prevItems) => {
      const existing = prevItems.find(
        (item) => String(item.id) === String(newItem.id),
      );
      if (existing) {
        return prevItems.map((item) =>
          String(item.id) === String(newItem.id)
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }
      return [...prevItems, { ...newItem, quantity }];
    });
    if (openDrawer) {
      setCartOpen(true);
    }
  };

  const removeFromCart = (id: string | number) => {
    setItems((prevItems) =>
      prevItems.filter((item) => String(item.id) !== String(id)),
    );
  };

  const updateQuantity = (id: string | number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setItems((prevItems) =>
      prevItems.map((item) =>
        String(item.id) === String(id) ? { ...item, quantity } : item,
      ),
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const subtotal = useMemo(() => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [items]);

  const totalCount = useMemo(() => {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }, [items]);

  return (
    <CartContext.Provider
      value={{
        cartOpen,
        openCart,
        closeCart,
        toggleCart,
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        subtotal,
        totalCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export default CartProvider;
