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

  return (
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
        gap: 16,
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2>We’d love your feedback!</h2>

      {submitted ? (
        <p>Thanks for sharing your thoughts 💬</p>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <label>
            How was your experience?
            <select
              name="rating"
              value={form.rating}
              onChange={handleChange}
              required
              style={{ padding: 8, marginTop: 4 }}
            >
              <option value="">Select</option>
              <option value="Great">Great</option>
              <option value="Okay">Okay</option>
              <option value="Bad">Bad</option>
            </select>
          </label>

          <label>
            Anything you'd like to share?
            <textarea
              name="feedback"
              value={form.feedback}
              onChange={handleChange}
              rows={4}
              style={{ padding: 8, marginTop: 4 }}
              placeholder="Your feedback..."
            />
          </label>

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
            }}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
