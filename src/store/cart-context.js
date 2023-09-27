import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: item => {},
  removeItem: id => {},
  totallyRemoveItem: item => {},
  clearCart: () => {},
});

export default CartContext;
