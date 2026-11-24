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
      {products.map(product => (
        <div key={product._id}>
          <p>{product.image}</p>
          <p>{product.name}</p>
          <p>{product.info}</p>
          <p>Rs.{product.price}</p>
        </div>
      ))}
    </div>
  )
}
