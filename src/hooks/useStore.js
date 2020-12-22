import { useEffect, useState } from 'react';
import axios from 'axios';
import initialState from '../initialState';

const API = 'http://localhost:1337/products';

const useStore = () => {

  const [state, setState] = useState(initialState);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getDataFromAPI = async () => {
      const result = await axios.get(API);
      setProducts(result.data);
    }

    getDataFromAPI();
  }, [])

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
    products,
    addToCart,
    removeFromCart,
    addToBuyer,
    addNewOrder
  };
};

export default useStore;