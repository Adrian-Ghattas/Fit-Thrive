// src/App.js
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Checkout from "./components/Checkout";
import Survey from "./components/Survey";

export default function App() {
  const [page, setPage] = useState("products"); // products, cart, checkout, survey
  const [cart, setCart] = useState([]);

  const addToCart = (product) => setCart(prev => [...prev, product]);
  const removeFromCart = (index) => setCart(prev => prev.filter((_, i) => i !== index));
  const clearCart = () => setCart([]);

  return (
    <>
      <Navbar cartCount={cart.length} onNavigate={setPage} />
      <main className="container" style={{ minHeight: "80vh" }}>
        {page === "products" && <ProductList onAddToCart={addToCart} />}

        {page === "cart" && (
  <div
    style={{
      maxWidth: 500,
      margin: "40px auto",
      padding: 20,
      border: "1px solid #ccc",
      borderRadius: 8,
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 16,
    }}
  >
    <h2>Your Cart</h2>

    {cart.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      <>
        <ul style={{ listStyle: "none", padding: 0, width: "100%", textAlign: "left" }}>
          {cart.map((item, i) => (
            <li
              key={i}
              style={{
                marginBottom: 12,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>{item.name} - ${item.price.toFixed(2)}</span>
              <button
                onClick={() => removeFromCart(i)}
                style={{
                  backgroundColor: "#cc0000",
                  color: "white",
                  border: "none",
                  borderRadius: 4,
                  padding: "4px 8px",
                  cursor: "pointer",
                  fontSize: 12,
                }}
                aria-label={`Remove ${item.name} from cart`}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>

        <p style={{ fontWeight: 600, fontSize: "1.1rem" }}>
          Total: ${cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
        </p>

        <div style={{ display: "flex", gap: 12 }}>
          <button onClick={() => setPage("checkout")}>Proceed to Checkout</button>
          <button onClick={() => setPage("products")}>Back to Products</button>
        </div>
      </>
    )}
  </div>
)}


        {page === "checkout" && (
          <Checkout
            cart={cart}
            onBack={() => setPage("cart")}
            onComplete={() => {
              alert("Purchase complete! Returning to products.");
              clearCart();
              setPage("products");
            }}
          />
        )}

        {page === "survey" && <Survey />}
      </main>
      <footer>
        <p>© 2025 FitThrive. All rights reserved.</p>
      </footer>
    </>
  );
}

const removeBtnStyle = {
  marginLeft: 12,
  backgroundColor: "#cc0000",
  fontSize: 12,
  padding: "4px 8px",
  borderRadius: 4,
  color: "white",
  border: "none",
  cursor: "pointer",
};
