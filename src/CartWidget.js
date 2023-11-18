import React from 'react';
import { BsCartFill } from 'react-icons/bs';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';

const CartWidget = ({ cartItemCount }) => {
  return (
    <div className="cart-widget">
      <Link to="/cart">
        <BsCartFill className="cart-icon" style={{ color: 'white' }} />
        {cartItemCount > 0 && (
          <Badge pill bg="dark" className="cart-notification">
            {cartItemCount}
          </Badge>
        )}
      </Link>
    </div>
  );
};

export default CartWidget;
