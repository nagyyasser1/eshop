// Define interface for an item in the cart
export interface CartItem {
  id: number;
  count: number;
  attributes: any;
  // Add other properties specific to your cart items here
}

// Define interface for the initial state
export interface CartState {
  isCartOpen: boolean;
  cart: CartItem[];
  items: any[]; // Assuming items can have any structure for now
}
