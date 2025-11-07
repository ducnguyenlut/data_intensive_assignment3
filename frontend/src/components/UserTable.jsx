import { useState } from "react";
import UserEditAlert from "../alert_ui/UserEditAlert";

export default function UserTable({ dbName, users = [], onUpdate }) {
  const [editingUser, setEditingUser] = useState(null);

  return (
    <div style={{ marginTop: "30px" }}>
      <h2 style={{ color: "white" }}>Users from {dbName}</h2>

      {users.length === 0 ? (
        <p style={{ color: "#ccc" }}>No users found in {dbName}</p>
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
                {["ID", "Name", "Email", "Age", "Action"].map((header) => (
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
              {users.map((u, index) => (
                <tr
                  key={u._id}
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
                    {u._id}
                  </td>
                  <td style={{ padding: "8px", borderBottom: "1px solid #444" }}>
                    {u.name}
                  </td>
                  <td style={{ padding: "8px", borderBottom: "1px solid #444" }}>
                    {u.email}
                  </td>
                  <td style={{ padding: "8px", borderBottom: "1px solid #444" }}>
                    {u.age}
                  </td>
                  <td style={{ padding: "8px", borderBottom: "1px solid #444" }}>
                    <button
                      onClick={() => setEditingUser(u)}
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

      {editingUser && (
        <UserEditAlert
          user={editingUser}
          onSave={(updated) => {
            onUpdate(updated);
            setEditingUser(null);
          }}
          onClose={() => setEditingUser(null)}
        />
      )}
    </div>
  );
}
