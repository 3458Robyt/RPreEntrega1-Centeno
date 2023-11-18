import React from 'react';

const Cart = ({ cartItems }) => {
  return (
    <div className="container mt-4">
      <h2>Carrito de compras</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>No hay artículos en el carrito</p>
      )}
    </div>
  );
};

export default Cart;
