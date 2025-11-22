import API_URL from '../config';

export async function fetchCategories(dbName) {
  const res = await fetch(`${API_URL}/${dbName}/categories`);
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
}

export async function updateCategory(dbName, category) {
  const res = await fetch(`${API_URL}/${dbName}/categories/${category._id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(category),
  });
  if (!res.ok) throw new Error("Failed to update category");
  return res.json();
}