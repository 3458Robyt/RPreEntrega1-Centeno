import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ItemListContainer = ({ addToCart }) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let apiUrl = 'https://fakestoreapi.com/products';
        if (categoryId) {
          apiUrl += `/category/${categoryId}`;
        }

        const response = await fetch(apiUrl);
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, [categoryId]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container mt-4">
      <h2>Catálogo</h2>
      {categoryId && <h3>Categoría: {categoryId}</h3>}
      <div className="item-list">
        {products.map((product) => (
          <div key={product.id} className="item">
            <Link
              to={`/category/${product.category}/item/${product.id}`} // Genera el link con la URL adecuada
            >
              <h3>{product.title}</h3>
            </Link>
            <img src={product.image} alt={product.title} style={{ width: '200px' }} />
            <p>Precio: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
