import API_URL from '../config';

export async function fetchUsers(dbName) {
  const res = await fetch(`${API_URL}/${dbName}/users`);
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}

export async function updateUser(dbName, user) {
  const res = await fetch(`${API_URL}/${dbName}/users/${user._id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  if (!res.ok) throw new Error("Failed to update user");
  return res.json();
}