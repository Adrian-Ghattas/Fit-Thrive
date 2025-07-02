// src/components/Survey.js
import React, { useState } from "react";

export default function Survey() {
  const [form, setForm] = useState({ rating: "", feedback: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    width: "100%",
    padding: "10px 12px",
    fontSize: 14,
    borderRadius: 4,
    border: "1px solid #ccc",
    marginTop: 6,
    boxSizing: "border-box",
  };

  return (
    <div
      style={{
        maxWidth: 500,
        margin: "40px auto",
        padding: 20,
        border: "1px solid #ccc",
        borderRadius: 8,
        textAlign: "center",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
      }}
    >
      <h2 style={{ marginBottom: 20 }}>We’d love your feedback!</h2>

      {submitted ? (
        <p style={{ fontSize: 16, fontWeight: 500 }}>Thanks for sharing your thoughts 💬</p>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ textAlign: "left" }}>
            <label style={{ fontWeight: 500 }}>How was your experience?</label>
            <select
              name="rating"
              value={form.rating}
              onChange={handleChange}
              required
              style={inputStyle}
            >
              <option value="">Select</option>
              <option value="Great">Great</option>
              <option value="Okay">Okay</option>
              <option value="Bad">Bad</option>
            </select>
          </div>

          <div style={{ textAlign: "left" }}>
            <label style={{ fontWeight: 500 }}>Anything you'd like to share?</label>
            <textarea
              name="feedback"
              value={form.feedback}
              onChange={handleChange}
              rows={4}
              style={{ ...inputStyle, resize: "vertical" }}
              placeholder="Your feedback..."
            />
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: "#0077cc",
              color: "white",
              padding: "10px 16px",
              border: "none",
              borderRadius: 4,
              cursor: "pointer",
              fontWeight: 600,
              fontSize: 14,
              transition: "0.3s ease",
            }}
          >
            Submit Feedback
          </button>
        </form>
      )}
    </div>
  );
}
