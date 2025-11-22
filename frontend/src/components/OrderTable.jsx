import { useState } from "react";
import OrderEditAlert from "../alert_ui/OrderEditAlert";

export default function OrderTable({ dbName, orders = [], users = [], products = [], onUpdate, onDBChange }) {
  const [editingOrder, setEditingOrder] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDBSelect = (db) => {
    setShowDropdown(false);
    onDBChange && onDBChange(db);
  };

  // Helper function to get user name by ID
  const getUserName = (userId) => {
    const user = users.find(u => u._id === userId);
    return user ? user.name : `User ID: ${userId}`;
  };

  // Helper function to get product name by ID
  const getProductName = (productId) => {
    const product = products.find(p => p._id === productId);
    return product ? product.name : `Product ID: ${productId}`;
  };

  return (
    <div
      style={{
        marginTop: "30px",
        border: "1px solid #444",
        borderRadius: "8px",
        overflow: "hidden",
        backgroundColor: "#252421ff",
      }}
    >
      {/* Header Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 16px",
          borderBottom: "1px solid #444",
          backgroundColor: "#2e2c28",
          color: "white",
        }}
      >
        <h2 style={{ margin: 0, color: "#ffcc00" }}>Orders</h2>

        <div style={{ position: "relative" }}>
          <button
            onClick={() => setShowDropdown(!showDropdown)}
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
            {dbName.toUpperCase()} ▼
          </button>

          {showDropdown && (
            <div
              style={{
                position: "absolute",
                right: 0,
                top: "110%",
                backgroundColor: "#2e2c28",
                border: "1px solid #555",
                borderRadius: "4px",
                zIndex: 10,
                overflow: "hidden",
              }}
            >
              {["db1", "db2", "db3"].map((db) => (
                <div
                  key={db}
                  onClick={() => handleDBSelect(db)}
                  style={{
                    padding: "8px 12px",
                    cursor: "pointer",
                    color: "white",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#3e3c38")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#2e2c28")
                  }
                >
                  {db.toUpperCase()}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Table Section */}
      {orders.length === 0 ? (
        <p style={{ color: "#ccc", padding: "12px" }}>
          No orders found in {dbName}
        </p>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              backgroundColor: "#252421ff",
              fontFamily: "Arial, sans-serif",
              fontSize: "14px",
              color: "white",
            }}
          >
            <thead>
              <tr>
                {["ID", "User", "Product", "Quantity", "Action"].map(
                  (header) => (
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
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {orders.map((o, index) => {
                const userId = o.userId || o.user;
                const productId = o.productId || o.product;
                return (
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
                      {typeof userId === 'number' ? getUserName(userId) : userId}
                    </td>
                    <td style={{ padding: "8px", borderBottom: "1px solid #444" }}>
                      {typeof productId === 'number' ? getProductName(productId) : productId}
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
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {editingOrder && (
        <OrderEditAlert
          order={editingOrder}
          users={users}
          products={products}
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
