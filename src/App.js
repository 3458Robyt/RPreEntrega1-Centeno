import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import Cart from './Cart';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <Router>
      <NavBar cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<ItemListContainer addToCart={addToCart} />} />
        <Route path="/category/:categoryId" element={<ItemListContainer addToCart={addToCart} />} />
        <Route path="/category/:categoryId/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
      </Routes>
    </Router>
  );
};

export default App;
