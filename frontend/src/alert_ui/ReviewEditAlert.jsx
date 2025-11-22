import { useState } from "react";

export default function ReviewEditAlert({ review, users = [], products = [], onSave, onClose }) {
  // Get current IDs, fallback to old format
  const currentUserId = review.userId || (typeof review.user === 'number' ? review.user : null);
  const currentProductId = review.productId || (typeof review.product === 'number' ? review.product : null);
  
  const [userId, setUserId] = useState(currentUserId || "");
  const [productId, setProductId] = useState(currentProductId || "");
  const [rating, setRating] = useState(review.rating);
  const [comment, setComment] = useState(review.comment);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save with IDs (numbers)
    onSave({ ...review, userId: Number(userId), productId: Number(productId), rating: Number(rating), comment });
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "#252421ff",
          padding: "20px",
          borderRadius: "8px",
          minWidth: "320px",
        }}
      >
        <h2 style={{ color: "white" }}>Edit Review</h2>

        <div style={{ marginBottom: "10px" }}>
          <label style={{ color: "white", display: "block", marginBottom: "5px" }}>User:</label>
          <select
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            style={{ width: "100%", padding: "5px", backgroundColor: "#2e2c28", color: "white", border: "1px solid #555" }}
            required
          >
            <option value="">Select a user</option>
            {users.map((user) => (
              <option key={user._id} value={user._id}>
                {user.name} (ID: {user._id})
              </option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label style={{ color: "white", display: "block", marginBottom: "5px" }}>Product:</label>
          <select
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            style={{ width: "100%", padding: "5px", backgroundColor: "#2e2c28", color: "white", border: "1px solid #555" }}
            required
          >
            <option value="">Select a product</option>
            {products.map((product) => (
              <option key={product._id} value={product._id}>
                {product.name} (ID: {product._id})
              </option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label style={{ color: "white", display: "block", marginBottom: "5px" }}>Rating:</label>
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            style={{ width: "100%", padding: "5px" }}
            min="1"
            max="5"
            required
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label style={{ color: "white", display: "block", marginBottom: "5px" }}>Comment:</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            style={{ width: "100%", padding: "5px", height: "80px" }}
            required
          />
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
          <button
            type="button"
            onClick={onClose}
            style={{
              padding: "5px 10px",
              backgroundColor: "#666",
              color: "white",
              border: "none",
              borderRadius: "4px",
            }}
          >
            Cancel
          </button>
          <button
            type="submit"
            style={{
              padding: "5px 10px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
            }}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
