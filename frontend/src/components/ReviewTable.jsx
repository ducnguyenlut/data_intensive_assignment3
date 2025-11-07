import { useState } from "react";
import ReviewEditAlert from "../alert_ui/ReviewEditAlert";

export default function ReviewTable({ dbName, reviews = [], onUpdate }) {
  const [editingReview, setEditingReview] = useState(null);

  return (
    <div style={{ marginTop: "30px" }}>
      <h2 style={{ color: "white" }}>Reviews from {dbName}</h2>
      {reviews.length === 0 ? (
        <p style={{ color: "#ccc" }}>No reviews found in {dbName}</p>
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
                {["ID", "User", "Product", "Rating", "Comment", "Action"].map(
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
              {reviews.map((r, index) => (
                <tr
                  key={r._id}
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
                    {r._id}
                  </td>
                  <td style={{ padding: "8px", borderBottom: "1px solid #444" }}>
                    {r.user}
                  </td>
                  <td style={{ padding: "8px", borderBottom: "1px solid #444" }}>
                    {r.product}
                  </td>
                  <td style={{ padding: "8px", borderBottom: "1px solid #444" }}>
                    {r.rating}
                  </td>
                  <td style={{ padding: "8px", borderBottom: "1px solid #444" }}>
                    {r.comment}
                  </td>
                  <td style={{ padding: "8px", borderBottom: "1px solid #444" }}>
                    <button
                      onClick={() => setEditingReview(r)}
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

      {editingReview && (
        <ReviewEditAlert
          review={editingReview}
          onSave={(updated) => {
            onUpdate(updated);
            setEditingReview(null);
          }}
          onClose={() => setEditingReview(null)}
        />
      )}
    </div>
  );
}
