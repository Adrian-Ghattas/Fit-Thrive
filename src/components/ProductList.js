import React, { useState } from "react";
import productsData from "../data/products";

export default function ProductList({ onAddToCart }) {
  const [filters, setFilters] = useState({
    type: "All",
    maxPrice: 50,
    minRating: 0,
  });

  const productTypes = ["All", ...new Set(productsData.map(p => p.type))];

  const filtered = productsData.filter(product => {
    const matchType = filters.type === "All" || product.type === filters.type;
    const matchPrice = product.price <= filters.maxPrice;
    const matchRating = product.rating >= filters.minRating;
    return matchType && matchPrice && matchRating;
  });

  return (
    <div style={{ padding: 20 }}>
      <h2>Our Products</h2>

      {/* Filters */}
      <div style={{ marginBottom: 24, display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <div>
          <label>Type:</label><br />
          <select
            value={filters.type}
            onChange={e => setFilters({ ...filters, type: e.target.value })}
            style={{ minWidth: 120, padding: 6 }}
          >
            {productTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div>
          <label>Max Price: ${filters.maxPrice}</label><br />
          <input
            type="range"
            min="0"
            max="50"
            value={filters.maxPrice}
            onChange={e => setFilters({ ...filters, maxPrice: Number(e.target.value) })}
            style={{ width: 150 }}
          />
        </div>

        <div>
          <label>Min Rating: {filters.minRating}+</label><br />
          <input
            type="range"
            min="0"
            max="5"
            step="0.1"
            value={filters.minRating}
            onChange={e => setFilters({ ...filters, minRating: Number(e.target.value) })}
            style={{ width: 150 }}
          />
        </div>
      </div>

      {/* Product Grid */}
      <div
        className="product-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {filtered.length > 0 ? filtered.map(product => (
          <div
            key={product.id}
            style={{
              backgroundColor: "#f5f5f5",
              borderRadius: "12px",
              padding: "16px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "100%",
              cursor: "pointer",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-8px)"}
            onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: 150,
                objectFit: "cover",
                borderRadius: 8,
                marginBottom: 10,
              }}
            />
            <h3 style={{ margin: "8px 0" }}>{product.name}</h3>
            <p style={{ minHeight: 50, fontSize: 14 }}>{product.description}</p>
            <p style={{ fontWeight: "700", fontSize: "1.1rem" }}>${product.price.toFixed(2)}</p>
            <p>⭐ {product.rating}</p>
            <button
              style={{
                marginTop: "auto",
                backgroundColor: "#0052cc",
                color: "white",
                border: "none",
                padding: "10px 16px",
                borderRadius: 6,
                fontWeight: "600",
                cursor: "pointer",
              }}
              onClick={() => onAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        )) : (
          <p style={{ gridColumn: "1 / -1" }}>No products match your filters.</p>
        )}
      </div>

      {/* Responsive Grid CSS (optional if you want to move to CSS file) */}
      <style>
        {`
          @media (max-width: 900px) {
            .product-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (max-width: 600px) {
            .product-grid {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </div>
  );
}
