import { useState } from 'react';
import initialState from '../initialState';

const useStore = () => {

  const [state, setState] = useState(initialState);

  const addToCart = data => {
    setState({
      ...state,
      cart: [...state.cart, data],
    });
  }

  const removeFromCart = data => {
    setState({
      ...state,
      cart: state.cart.filter(items => items.id !== data.id),
    });
  };

  const addToBuyer = data => {
    setState({
      ...state,
      buyer: [...state.buyer, data]
    })
  }

  const addNewOrder = data => {
    setState({
      ...state,
      oreders: [...state.orders, data]
    })
  }

  return {
    state,
    addToCart,
    removeFromCart,
    addToBuyer,
    addNewOrder
  };
};

export default useStore;