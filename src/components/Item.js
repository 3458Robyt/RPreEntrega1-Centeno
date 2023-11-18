import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  return (
    <div className="item">
      <Link to={`/category/${item.category}/item/${item.id}`}>
        <h3>{item.title}</h3>
      </Link>
      <img src={item.image} alt={item.title} style={{ width: '200px' }} />
      <p>Precio: ${item.price}</p>
    </div>
  );
};

export default Item;
