import React from "react";
import Logo from "./Logo";

export default function Navbar({ cartCount, onNavigate }) {
  return (
    <nav style={navStyle}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }} onClick={() => onNavigate("products")}>
        <Logo size={36} />
        <h1 style={logoTextStyle}>FitThrive</h1>
      </div>

      <div>
        <button className="nav-button" onClick={() => onNavigate("products")}>Products</button>
        <button className="nav-button" onClick={() => onNavigate("cart")}>
          Cart ({cartCount})
        </button>
        <button className="nav-button" onClick={() => onNavigate("survey")}>Survey</button>
      </div>
    </nav>
  );
}

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#000",  // pure black background
  padding: "14px 24px",
  position: "sticky",
  top: 0,
  zIndex: 1000,
  boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
};

const logoTextStyle = {
  margin: 0,
  color: "white",
  fontWeight: "900",
  fontSize: "1.8rem",
  fontFamily: "'Montserrat', sans-serif",  // bold, modern font (add in index.css)
  letterSpacing: "3px",
  userSelect: "none",
};
