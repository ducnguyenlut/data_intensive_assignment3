import { useState } from "react";

export default function OrderEditAlert({ order, users = [], products = [], onSave, onClose }) {
  // Get current IDs, fallback to old format
  const currentUserId = order.userId || (typeof order.user === 'number' ? order.user : null);
  const currentProductId = order.productId || (typeof order.product === 'number' ? order.product : null);
  
  const [userId, setUserId] = useState(currentUserId || "");
  const [productId, setProductId] = useState(currentProductId || "");
  const [quantity, setQuantity] = useState(order.quantity);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save with IDs (numbers)
    onSave({ ...order, userId: Number(userId), productId: Number(productId), quantity: Number(quantity) });
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
        <h2 style={{ color: "white" }}>Edit Order</h2>

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
          <label style={{ color: "white", display: "block", marginBottom: "5px" }}>Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            style={{ width: "100%", padding: "5px" }}
            min="1"
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