import React from "react";

export default async function Products({ promise }) {
  const products = await promise;
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <img src={`${product.image}`} alt={`${product.title}`} />
          </li>
        ))}
      </ul>
    </div>
  );
}
