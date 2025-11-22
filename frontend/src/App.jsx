import { useState, useEffect } from "react";
import "./App.css";

import { fetchUsers, updateUser } from "./services/userService";
import { fetchProducts, updateProduct } from "./services/productService";
import { fetchCategories, updateCategory } from "./services/categoryService";
import { fetchOrders, updateOrder } from "./services/orderService";
import { fetchReviews, updateReview } from "./services/reviewService";
import { restoreAllDatabases } from "./services/restoreService";

import UserTable from "./components/UserTable";
import ProductTable from "./components/ProductTable";
import CategoryTable from "./components/CategoryTable";
import OrderTable from "./components/OrderTable";
import ReviewTable from "./components/ReviewTable";

export default function App() {
  // Each table has its own independent data state
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [orders, setOrders] = useState([]);
  const [reviews, setReviews] = useState([]);

  // Each table has its own users/products for lookups (OrderTable and ReviewTable need these)
  const [orderTableUsers, setOrderTableUsers] = useState([]);
  const [orderTableProducts, setOrderTableProducts] = useState([]);
  const [reviewTableUsers, setReviewTableUsers] = useState([]);
  const [reviewTableProducts, setReviewTableProducts] = useState([]);

  const [orderDB, setOrderDB] = useState("db1");
  const [userDB, setUserDB] = useState("db1");
  const [productDB, setProductDB] = useState("db1");
  const [categoryDB, setCategoryDB] = useState("db1");
  const [reviewDB, setReviewDB] = useState("db1");

  // 🟢 Auto-load db1 at first render for all tables independently
  useEffect(() => {
    const loadInitialData = async () => {
      try {
        const [u, p, c, o, r, ou, op, ru, rp] = await Promise.all([
          fetchUsers("db1"),      // UserTable data
          fetchProducts("db1"),   // ProductTable data
          fetchCategories("db1"), // CategoryTable data
          fetchOrders("db1"),     // OrderTable data
          fetchReviews("db1"),    // ReviewTable data
          fetchUsers("db1"),      // OrderTable users lookup
          fetchProducts("db1"),   // OrderTable products lookup
          fetchUsers("db1"),      // ReviewTable users lookup
          fetchProducts("db1"),   // ReviewTable products lookup
        ]);
        setUsers(u);
        setProducts(p);
        setCategories(c);
        setOrders(o);
        setReviews(r);
        setOrderTableUsers(ou);
        setOrderTableProducts(op);
        setReviewTableUsers(ru);
        setReviewTableProducts(rp);
      } catch (err) {
        console.error("Error loading data:", err);
        setUsers([]);
        setProducts([]);
        setCategories([]);
        setOrders([]);
        setReviews([]);
        setOrderTableUsers([]);
        setOrderTableProducts([]);
        setReviewTableUsers([]);
        setReviewTableProducts([]);
      }
    };
    loadInitialData();
  }, []);


  const handleRestoreDB = async () => {
    try {
      // 1️⃣ Clear all tables immediately
      setUsers([]);
      setProducts([]);
      setCategories([]);
      setOrders([]);
      setReviews([]);
      setOrderTableUsers([]);
      setOrderTableProducts([]);
      setReviewTableUsers([]);
      setReviewTableProducts([]);

      // 2️⃣ Wait 0.5s
      await new Promise((resolve) => setTimeout(resolve, 500));

      // 3️⃣ Call restore API
      const messages = await restoreAllDatabases();
      console.log(messages);

      // 4️⃣ Reload all data for UI (db1 by default) - each table independently
      const [u, p, c, o, r, ou, op, ru, rp] = await Promise.all([
        fetchUsers("db1"),      // UserTable data
        fetchProducts("db1"),   // ProductTable data
        fetchCategories("db1"), // CategoryTable data
        fetchOrders("db1"),     // OrderTable data
        fetchReviews("db1"),   // ReviewTable data
        fetchUsers("db1"),     // OrderTable users lookup
        fetchProducts("db1"),  // OrderTable products lookup
        fetchUsers("db1"),     // ReviewTable users lookup
        fetchProducts("db1"),  // ReviewTable products lookup
      ]);
      setUsers(u);
      setProducts(p);
      setCategories(c);
      setOrders(o);
      setReviews(r);
      setOrderTableUsers(ou);
      setOrderTableProducts(op);
      setReviewTableUsers(ru);
      setReviewTableProducts(rp);

      // Reset all tables to db1
      setUserDB("db1");
      setProductDB("db1");
      setCategoryDB("db1");
      setOrderDB("db1");
      setReviewDB("db1");

      alert("All databases restored successfully!");
    } catch (err) {
      console.error("Failed to restore:", err);
      alert("Failed to restore all databases");
    }
  };


  // 🔵 Update helpers with synchronization
  const _updateUser = async (o) => {
    const saved = await updateUser(userDB, o);
    setUsers((prev) => prev.map((x) => (x._id === saved._id ? saved : x)));
    
    // Sync with OrderTable if viewing the same database
    if (orderDB === userDB) {
      const updatedUsers = await fetchUsers(userDB);
      setOrderTableUsers(updatedUsers);
    }
    
    // Sync with ReviewTable if viewing the same database
    if (reviewDB === userDB) {
      const updatedUsers = await fetchUsers(userDB);
      setReviewTableUsers(updatedUsers);
    }
  };

  const _updateProduct = async (o) => {
    const saved = await updateProduct(productDB, o);
    setProducts((prev) => prev.map((x) => (x._id === saved._id ? saved : x)));
    
    // Sync with OrderTable if viewing the same database
    if (orderDB === productDB) {
      const updatedProducts = await fetchProducts(productDB);
      setOrderTableProducts(updatedProducts);
    }
    
    // Sync with ReviewTable if viewing the same database
    if (reviewDB === productDB) {
      const updatedProducts = await fetchProducts(productDB);
      setReviewTableProducts(updatedProducts);
    }
  };

  const _updateCategory = async (o) => {
    const saved = await updateCategory(categoryDB, o);
    setCategories((prev) => prev.map((x) => (x._id === saved._id ? saved : x)));
    // Categories are not used as lookups in other tables, so no sync needed
  };

  const _updateOrder = async (o) => {
    const saved = await updateOrder(orderDB, o);
    setOrders((prev) => prev.map((x) => (x._id === saved._id ? saved : x)));
    // Orders don't affect other tables' lookups
  };

  const _updateReview = async (o) => {
    const saved = await updateReview(reviewDB, o);
    setReviews((prev) => prev.map((x) => (x._id === saved._id ? saved : x)));
    // Reviews don't affect other tables' lookups
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1 style={{ color: "white" }}> Duc Nguyen - Assignment 3</h1>
      
      {/* Restore Button */}
      <div style={{ marginBottom: "30px" }}>
        <button
          style={{ 
            padding: "10px 20px", 
            backgroundColor: "red", 
            color: "white", 
            border: "none", 
            cursor: "pointer",
            borderRadius: "4px",
            fontSize: "16px",
            transition: "background-color 0.3s",
          }}
          onClick={handleRestoreDB}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#c82333"}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "red"}
        >
          Restore All Databases
        </button>
      </div>

      <UserTable
        dbName={userDB}
        users={users}
        onUpdate={_updateUser}
        onDBChange={async (o) => {
          setUserDB(o);
          const data = await fetchUsers(o);
          setUsers(data);
        }}
      />

      <ProductTable
        dbName={productDB}
        products={products}
        onUpdate={_updateProduct}
        onDBChange={async (o) => {
          setProductDB(o);
          const data = await fetchProducts(o);
          setProducts(data);
        }}
      />

      <CategoryTable
        dbName={categoryDB}
        categories={categories}
        onUpdate={_updateCategory}
        onDBChange={async (o) => {
          setCategoryDB(o);
          const data = await fetchCategories(o);
          setCategories(data);
        }}
      />

      <OrderTable
        dbName={orderDB}
        orders={orders}
        users={orderTableUsers}
        products={orderTableProducts}
        onUpdate={_updateOrder}
        onDBChange={async (o) => {
          setOrderDB(o);
          // Only fetch data for OrderTable, don't affect other tables
          const [orderData, userData, productData] = await Promise.all([
            fetchOrders(o),
            fetchUsers(o),
            fetchProducts(o)
          ]);
          setOrders(orderData);
          setOrderTableUsers(userData);
          setOrderTableProducts(productData);
        }}
      />

      <ReviewTable
        dbName={reviewDB}
        reviews={reviews}
        users={reviewTableUsers}
        products={reviewTableProducts}
        onUpdate={_updateReview}
        onDBChange={async (o) => {
          setReviewDB(o);
          // Only fetch data for ReviewTable, don't affect other tables
          const [reviewData, userData, productData] = await Promise.all([
            fetchReviews(o),
            fetchUsers(o),
            fetchProducts(o)
          ]);
          setReviews(reviewData);
          setReviewTableUsers(userData);
          setReviewTableProducts(productData);
        }}
      />
    </div>
  );
}
