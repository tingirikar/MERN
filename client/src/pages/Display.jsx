import { useState, useEffect } from "react";

export default function Display() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await fetch("http://localhost:3000/products");
      const data = await response.json();
      setProducts(data);
    }
    loadProducts();
  }, []);

  return (
    <div>
      <p>Products</p>
      {products.map(product => (
        <div key={product._id} style={{ border: '1px solid black' }}>
          <p>{product.image}</p>
          <p>{product.name}</p>
          <p>{product.info}</p>
          <p>Rs.{product.price}</p>
        </div>
      ))}
    </div>
  )
}
