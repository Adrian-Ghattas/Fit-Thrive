// src/components/Logo.js
import React from "react";

export default function Logo({ size = 40 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="FitThrive logo"
      role="img"
      style={{ verticalAlign: "middle" }}
    >
      <circle cx="32" cy="32" r="30" stroke="black" strokeWidth="4" />
      <path
        d="M20 44 L32 20 L44 44 Z"
        fill="black"
      />
    </svg>
  );
}
