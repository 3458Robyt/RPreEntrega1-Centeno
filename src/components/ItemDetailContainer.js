import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${itemId}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [itemId]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container mt-4">
      {product ? (
        <div className="item-details">
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} style={{ width: '200px' }} />
          <p>Precio: ${product.price}</p>
          <p>{product.description}</p>
        </div>
      ) : (
        <div>No se encontró el producto.</div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
