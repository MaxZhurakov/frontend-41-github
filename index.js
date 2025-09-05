import React, { useState } from "react";

function DreamShop() {
  const products = [
    { id: 1, name: "Ноутбук", price: 25000, inStock: true },
    { id: 2, name: "Смартфон", price: 15000, inStock: false },
    { id: 3, name: "Навушники", price: 2000, inStock: true },
    { id: 4, name: "Монітор", price: 7000, inStock: false },
  ];

  const [showOnlyInStock, setShowOnlyInStock] = useState(false);

  let visibleProducts = [...products];
  if (showOnlyInStock) {
    visibleProducts = visibleProducts.filter((p) => p.inStock);
  }
  visibleProducts.sort((a, b) => a.price - b.price);

  const inStockCount = products.filter((p) => p.inStock).length;

  return (
    <div style={{ padding: "20px" }}>
      <h1>🛍 DreamShop</h1>

      <button onClick={() => setShowOnlyInStock((prev) => !prev)}>
        {showOnlyInStock ? "Показати всі товари" : "Показати тільки в наявності"}
      </button>

      {visibleProducts.length === 0 ? (
        <p style={{ marginTop: "15px" }}>Наразі немає товарів</p>
      ) : (
        <ul style={{ marginTop: "15px" }}>
          {visibleProducts.map((product) => (
            <li key={product.id}>
              {product.name} —{" "}
              {product.inStock ? `${product.price} грн` : "Немає в наявності"}
            </li>
          ))}
        </ul>
      )}

      {inStockCount === 0 ? (
        <p style={{ color: "red" }}>Склад порожній</p>
      ) : (
        <p>Товарів у наявності: {inStockCount}</p>
      )}
    </div>
  );
}

export default DreamShop;
