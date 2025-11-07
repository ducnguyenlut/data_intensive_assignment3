import { useState } from "react";
import CategoryEditAlert from "../alert_ui/CategoryEditAlert";

export default function CategoryTable({ dbName, categories = [], onUpdate }) {
  const [editingCategory, setEditingCategory] = useState(null);

  return (
    <div style={{ marginTop: "30px" }}>
      <h2 style={{ color: "white" }}>Categories from {dbName}</h2>

      {categories.length === 0 ? (
        <p style={{ color: "#ccc" }}>No categories found in {dbName}</p>
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
                {["ID", "Name", "Description", "Popularity", "Action"].map(
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
              {categories.map((c, index) => (
                <tr
                  key={c._id}
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
                    {c._id}
                  </td>
                  <td style={{ padding: "8px", borderBottom: "1px solid #444" }}>
                    {c.name}
                  </td>
                  <td style={{ padding: "8px", borderBottom: "1px solid #444" }}>
                    {c.description}
                  </td>
                  <td style={{ padding: "8px", borderBottom: "1px solid #444" }}>
                    {c.popularity}
                  </td>
                  <td style={{ padding: "8px", borderBottom: "1px solid #444" }}>
                    <button
                      onClick={() => setEditingCategory(c)}
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

      {editingCategory && (
        <CategoryEditAlert
          category={editingCategory}
          onSave={(updated) => {
            onUpdate(updated);
            setEditingCategory(null);
          }}
          onClose={() => setEditingCategory(null)}
        />
      )}
    </div>
  );
}
