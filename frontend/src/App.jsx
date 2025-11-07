import { useState } from "react";
import "./App.css";

import { fetchUsers, updateUser } from "./services/userService";
import { fetchProducts, updateProduct } from "./services/productService";
import { fetchCategories, updateCategory } from "./services/categoryService";
import { fetchOrders, updateOrder } from "./services/orderService";
import { fetchReviews, updateReview } from "./services/reviewService";

import UserTable from "./components/UserTable";
import ProductTable from "./components/ProductTable";
import CategoryTable from "./components/CategoryTable";
import OrderTable from "./components/OrderTable";
import ReviewTable from "./components/ReviewTable";

export default function App() {
  const [selectedDB, setSelectedDB] = useState("");
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [orders, setOrders] = useState([]);
  const [reviews, setReviews] = useState([]);

  const handleSelectDB = async (dbName) => {
    setSelectedDB(dbName);
    try {
      const [u, p, c, o, r] = await Promise.all([
        fetchUsers(dbName),
        fetchProducts(dbName),
        fetchCategories(dbName),
        fetchOrders(dbName),
        fetchReviews(dbName)
      ]);
      setUsers(u);
      setProducts(p);
      setCategories(c);
      setOrders(o);
      setReviews(r);
    } catch (err) {
      console.error("Error loading data:", err);
      setUsers([]); setProducts([]); setCategories([]); setOrders([]); setReviews([]);
    }
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Select Database</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        {["db1", "db2", "db3"].map((db) => (
          <button key={db} onClick={() => handleSelectDB(db)}>
            {db.toUpperCase()}
          </button>
        ))}
      </div>

      {selectedDB && (
        <>
          <UserTable
            dbName={selectedDB}
            users={users}
            onUpdate={async (u) => {
              const saved = await updateUser(selectedDB, u);
              setUsers(users.map(x => x._id === saved._id ? saved : x));
            }}
          />
          <ProductTable
            dbName={selectedDB}
            products={products}
            onUpdate={async (p) => {
              const saved = await updateProduct(selectedDB, p);
              setProducts(products.map(x => x._id === saved._id ? saved : x));
            }}
          />
          <CategoryTable
            dbName={selectedDB}
            categories={categories}
            onUpdate={async (c) => {
              const saved = await updateCategory(selectedDB, c);
              setCategories(categories.map(x => x._id === saved._id ? saved : x));
            }}
          />
          <OrderTable
            dbName={selectedDB}
            orders={orders}
            onUpdate={async (c) => {
              const saved = await updateOrder(selectedDB, c);
              setOrders(orders.map(x => x._id === saved._id ? saved : x));
            }}
          />
          <ReviewTable
            dbName={selectedDB}
            reviews={reviews}
            onUpdate={async (c) => {
              const saved = await updateReview(selectedDB, c);
              setReviews(reviews.map(x => x._id === saved._id ? saved : x));
            }}
          />
        </>
      )}
    </div>
  );
}