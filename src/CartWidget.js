import React from 'react';
import { BsCart } from 'react-icons/bs';
import Badge from 'react-bootstrap/Badge';

const CartWidget = () => {
  return (
    <div className="cart-widget bg-white">
      <BsCart className="cart-icon" />
      <Badge pill bg="primary" className="cart-notification">
        3
      </Badge>
    </div>
  );
};


export default CartWidget;
