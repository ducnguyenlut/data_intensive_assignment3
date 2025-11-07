import { useState } from "react";
import ProductEditAlert from "../alert_ui/ProductEditAlert";

export default function ProductTable({ dbName, products = [], onUpdate }) {
  const [editingProduct, setEditingProduct] = useState(null);

  return (
    <div style={{ marginTop: "30px" }}>
      <h2 style={{ color: "white" }}>Products from {dbName}</h2>

      {products.length === 0 ? (
        <p style={{ color: "#ccc" }}>No products found in {dbName}</p>
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
                {["ID", "Name", "Price (€)", "Stock", "Action"].map((header) => (
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
              {products.map((p, index) => (
                <tr
                  key={p._id}
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
                    {p._id}
                  </td>
                  <td style={{ padding: "8px", borderBottom: "1px solid #444" }}>
                    {p.name}
                  </td>
                  <td style={{ padding: "8px", borderBottom: "1px solid #444" }}>
                    {p.price}
                  </td>
                  <td style={{ padding: "8px", borderBottom: "1px solid #444" }}>
                    {p.stock}
                  </td>
                  <td style={{ padding: "8px", borderBottom: "1px solid #444" }}>
                    <button
                      onClick={() => setEditingProduct(p)}
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

      {editingProduct && (
        <ProductEditAlert
          product={editingProduct}
          onSave={(updated) => {
            onUpdate(updated);
            setEditingProduct(null);
          }}
          onClose={() => setEditingProduct(null)}
        />
      )}
    </div>
  );
}
