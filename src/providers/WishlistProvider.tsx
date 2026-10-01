import {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  type ReactNode,
} from "react";
import products, { type ProductData } from "data/products";

const WISHLIST_STORAGE_KEY = "ecobazar_wishlist";

// Default initial items if no localStorage exists
const initialWishlistData: ProductData[] = [
  products[0], // Green Apple
  products[1], // Chinese Cabbage
  products[2], // Fresh Indian Malta
].filter(Boolean);

interface WishlistContextType {
  wishlistItems: ProductData[];
  wishlistCount: number;
  addToWishlist: (product: ProductData) => void;
  removeFromWishlist: (id: string | number) => void;
  toggleWishlist: (product: ProductData) => boolean;
  isInWishlist: (id: string | number) => boolean;
  clearWishlist: () => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlistItems, setWishlistItems] = useState<ProductData[]>(() => {
    try {
      const stored = localStorage.getItem(WISHLIST_STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // Fallback
    }
    return initialWishlistData;
  });

  useEffect(() => {
    try {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlistItems));
    } catch {
      // Storage failure handling
    }
  }, [wishlistItems]);

  const addToWishlist = (product: ProductData) => {
    setWishlistItems((prev) => {
      if (prev.some((item) => String(item.id) === String(product.id))) {
        return prev;
      }
      return [...prev, product];
    });
  };

  const removeFromWishlist = (id: string | number) => {
    setWishlistItems((prev) =>
      prev.filter((item) => String(item.id) !== String(id)),
    );
  };

  const isInWishlist = (id: string | number) => {
    return wishlistItems.some((item) => String(item.id) === String(id));
  };

  const toggleWishlist = (product: ProductData): boolean => {
    const exists = isInWishlist(product.id);
    if (exists) {
      removeFromWishlist(product.id);
      return false;
    } else {
      addToWishlist(product);
      return true;
    }
  };

  const clearWishlist = () => {
    setWishlistItems([]);
  };

  const wishlistCount = useMemo(() => wishlistItems.length, [wishlistItems]);

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        wishlistCount,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        isInWishlist,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};

export default WishlistProvider;
