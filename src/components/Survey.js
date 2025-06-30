// src/components/Survey.js
import React, { useState } from "react";

export default function Survey() {
  const [rating, setRating] = useState("");
  const [comments, setComments] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container" style={{ maxWidth: 600, marginTop: 40 }}>
        <p style={{ fontSize: 18, fontWeight: 600, color: "#0052cc" }}>
          Thank you for your feedback! We appreciate your time.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="container" style={{ maxWidth: 600, marginTop: 40 }}>
      <h2>Help Us Improve</h2>

      <label>
        How would you rate your experience?
        <select value={rating} onChange={e => setRating(e.target.value)} required>
          <option value="">Select</option>
          {[1, 2, 3, 4, 5].map(n => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
      </label>

      <label>
        Additional Comments:
        <textarea
          value={comments}
          onChange={e => setComments(e.target.value)}
          rows={5}
          placeholder="Your comments here..."
        />
      </label>

      <button type="submit">Submit Feedback</button>
    </form>
  );
}
