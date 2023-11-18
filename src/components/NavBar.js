import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = ({ cartItems }) => {
  const categories = ['electronics', 'jewelery', "men's clothing", "women's clothing"];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">Mi Tienda</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            {categories.map((category) => {
              console.log('Category:', category); 
              return (
                <li className="nav-item" key={category}>
                  <Link to={`/category/${category}`} className="nav-link">{category}</Link>
                </li>
              );
            })}
          </ul>
          <CartWidget cartItemCount={cartItems.length} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
