import { useState } from "react";
import OrderEditAlert from "../alert_ui/OrderEditAlert";

export default function OrderTable({ dbName, orders = [], onUpdate }) {
  const [editingOrder, setEditingOrder] = useState(null);

  return (
    <div style={{ marginTop: "30px" }}>
      <h2 style={{ color: "white" }}>Orders from {dbName}</h2>
      
      {orders.length === 0 ? (
        <p style={{ color: "#ccc" }}>No orders found in {dbName}</p>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "10px",
              backgroundColor: "#252421ff",
              fontFamily: "Arial, sans-serif",
              fontSize: "14px",
              color: "white",
            }}
          >
            <thead>
              <tr>
                {["ID", "User", "Product", "Quantity", "Action"].map((header) => (
                  <th
                    key={header}
                    style={{
                      borderBottom: "1px solid #444",
                      padding: "8px",
                      textAlign: "left",
                      color: "#ffcc00",
                    }}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {orders.map((o, index) => (
                <tr
                  key={o._id}
                  style={{
                    backgroundColor: index % 2 === 0 ? "#2e2c28" : "#35332f",
                    transition: "background-color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#3e3c38")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      index % 2 === 0 ? "#2e2c28" : "#35332f")
                  }
                >
                  <td style={{ padding: "8px", borderBottom: "1px solid #444" }}>
                    {o._id}
                  </td>
                  <td style={{ padding: "8px", borderBottom: "1px solid #444" }}>
                    {o.user}
                  </td>
                  <td style={{ padding: "8px", borderBottom: "1px solid #444" }}>
                    {o.product}
                  </td>
                  <td style={{ padding: "8px", borderBottom: "1px solid #444" }}>
                    {o.quantity}
                  </td>
                  <td style={{ padding: "8px", borderBottom: "1px solid #444" }}>
                    <button
                      onClick={() => setEditingOrder(o)}
                      style={{
                        backgroundColor: "#007bff",
                        color: "white",
                        border: "none",
                        padding: "6px 12px",
                        borderRadius: "4px",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = "#0056b3")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "#007bff")
                      }
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {editingOrder && (
        <OrderEditAlert
          order={editingOrder}
          onSave={(updated) => {
            onUpdate(updated);
            setEditingOrder(null);
          }}
          onClose={() => setEditingOrder(null)}
        />
      )}
    </div>
  );
}
