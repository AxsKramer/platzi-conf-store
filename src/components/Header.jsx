import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../assets/styles/Header.css';

const Header = () => {
  
  const { state } = useContext(AppContext);

  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">Platzi Store Hooks</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket" />
        </Link>
        {state.cart.length > 0 && <div className="Header-alert">{state.cart.length}</div>}
      </div>
    </div>
  );
}

export default Header;