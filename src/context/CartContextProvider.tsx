import { PropsWithChildren, createContext, useReducer, Dispatch } from "react";

interface CartItem {
  id: number | string;
  category?: string;
  name: string;
  price: number | string;
  weight: number | string;
  unit: string;
  inStock: number;
  discount: number | string;
  rating: number | string;
  image: string;
  quantity: number;
}

interface CostDetails {
  subTotal: number;
  shippingCost: number;
  totalCost: number;
}

interface State {
  cartItems: CartItem[];
  costDetails: CostDetails;
}

type Action =
  | { type: "ADD_PRODUCT"; payload: CartItem }
  | { type: "REMOVE_PRODUCT"; payload: { id: number | string } }
  | { type: "CONTROL_QUANTITY"; payload: CartItem };

interface CartContextType {
  state: State;
  dispatch: Dispatch<Action>;
}

export const CartContext = createContext<CartContextType | null>(null);

const INITIAL_STATE: State = {
  cartItems: [],
  costDetails: {
    subTotal: 0,
    shippingCost: 0,
    totalCost: 0,
  },
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_PRODUCT": {
      if (state.cartItems.find((elem) => elem.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
      };
    }

    case "REMOVE_PRODUCT": {
      const cartItems = state.cartItems.filter(
        (elem) => elem.id !== action.payload.id,
      );
      return { ...state, cartItems };
    }

    case "CONTROL_QUANTITY": {
      const updatedItems = state.cartItems.map((elem) => {
        if (elem.id === action.payload.id) {
          return { ...elem, quantity: action.payload.quantity };
        }
        return elem;
      });
      return { ...state, cartItems: updatedItems };
    }

    default:
      return state;
  }
};

const CartContextProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;