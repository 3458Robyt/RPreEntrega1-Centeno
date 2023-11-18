import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
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
