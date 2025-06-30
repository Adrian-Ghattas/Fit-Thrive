import React, { useState } from "react";

export default function Checkout({ cart, onBack, onComplete }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "40px auto",
        padding: 20,
        border: "1px solid #ccc",
        borderRadius: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {step === 1 && (
        <>
          <h2>Review Your Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul style={{ listStyle: "none", padding: 0, width: "100%" }}>
              {cart.map((item, i) => (
                <li key={i} style={{ marginBottom: 8 }}>
                  {item.name} - ${item.price.toFixed(2)}
                </li>
              ))}
            </ul>
          )}
          <p style={{ fontWeight: "bold" }}>
            Total: ${cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
          </p>
          <button onClick={nextStep} disabled={cart.length === 0}>
            Proceed to Shipping
          </button>
          <button onClick={onBack} style={{ marginTop: 10 }}>
            Back to Cart
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <h2>Shipping Information</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              nextStep();
            }}
            style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            <input
              type="text"
              name="address"
              placeholder="Shipping Address"
              value={formData.address}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            <div style={{ display: "flex", gap: 10, width: "100%", justifyContent: "center" }}>
              <button type="button" onClick={prevStep}>
                Back
              </button>
              <button type="submit">Proceed to Payment</button>
            </div>
          </form>
        </>
      )}

      {step === 3 && (
        <>
          <h2>Payment Details</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onComplete();
            }}
            style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              value={formData.cardNumber}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            <input
              type="text"
              name="expiry"
              placeholder="Expiry Date (MM/YY)"
              value={formData.expiry}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              value={formData.cvv}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            <div style={{ display: "flex", gap: 10, width: "100%", justifyContent: "center" }}>
              <button type="button" onClick={prevStep}>
                Back
              </button>
              <button type="submit">Complete Purchase</button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

const inputStyle = {
  width: "90%",
  maxWidth: 300,
  padding: "10px",
  margin: "10px 0",
  borderRadius: 4,
  border: "1px solid #ccc",
  fontSize: "1rem",
};
