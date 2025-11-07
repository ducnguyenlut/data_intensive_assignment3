// Replicated + Fragmented Dummy Data for 3 MongoDB Databases
// Each DB: users, products, categories, orders, reviews
// Same structure, half same data (id 1–5), half different (id 6–10)

const users = {
  db1: [
    // replicated
    { _id: 1, name: "Alice", email: "alice@shopmail.com", age: 25 },
    { _id: 2, name: "Bob", email: "bob@shopmail.com", age: 30 },
    { _id: 3, name: "Carol", email: "carol@shopmail.com", age: 22 },
    { _id: 4, name: "David", email: "david@shopmail.com", age: 28 },
    { _id: 5, name: "Eve", email: "eve@shopmail.com", age: 35 },
    // fragmented
    { _id: 6, name: "Frank", email: "frank@shopmail.com", age: 40 },
    { _id: 7, name: "Grace", email: "grace@shopmail.com", age: 21 },
    { _id: 8, name: "Hank", email: "hank@shopmail.com", age: 33 },
    { _id: 9, name: "Ivy", email: "ivy@shopmail.com", age: 27 },
    { _id: 10, name: "Jack", email: "jack@shopmail.com", age: 29 }
  ],
  db2: [
    // replicated
    { _id: 1, name: "Alice", email: "alice@shopmail.com", age: 25 },
    { _id: 2, name: "Bob", email: "bob@shopmail.com", age: 30 },
    { _id: 3, name: "Carol", email: "carol@shopmail.com", age: 22 },
    { _id: 4, name: "David", email: "david@shopmail.com", age: 28 },
    { _id: 5, name: "Eve", email: "eve@shopmail.com", age: 35 },
    // fragmented
    { _id: 6, name: "Liam", email: "liam@shopmail.com", age: 24 },
    { _id: 7, name: "Mia", email: "mia@shopmail.com", age: 31 },
    { _id: 8, name: "Noah", email: "noah@shopmail.com", age: 22 },
    { _id: 9, name: "Olivia", email: "olivia@shopmail.com", age: 28 },
    { _id: 10, name: "Pete", email: "pete@shopmail.com", age: 35 }
  ],
  db3: [
    // replicated
    { _id: 1, name: "Alice", email: "alice@shopmail.com", age: 25 },
    { _id: 2, name: "Bob", email: "bob@shopmail.com", age: 30 },
    { _id: 3, name: "Carol", email: "carol@shopmail.com", age: 22 },
    { _id: 4, name: "David", email: "david@shopmail.com", age: 28 },
    { _id: 5, name: "Eve", email: "eve@shopmail.com", age: 35 },
    // fragmented
    { _id: 6, name: "Quinn", email: "quinn@shopmail.com", age: 26 },
    { _id: 7, name: "Ruby", email: "ruby@shopmail.com", age: 29 },
    { _id: 8, name: "Sam", email: "sam@shopmail.com", age: 34 },
    { _id: 9, name: "Tina", email: "tina@shopmail.com", age: 27 },
    { _id: 10, name: "Uma", email: "uma@shopmail.com", age: 32 }
  ]
};

const products = {
  db1: [
    // replicated
    { _id: 1, name: "Laptop", price: 1000, stock: 120 },
    { _id: 2, name: "Phone", price: 600, stock: 200 },
    { _id: 3, name: "Shirt", price: 25, stock: 350 },
    { _id: 4, name: "Shoes", price: 80, stock: 210 },
    { _id: 5, name: "Book", price: 20, stock: 500 },
    // fragmented
    { _id: 6, name: "Tablet", price: 300, stock: 150 },
    { _id: 7, name: "Jacket", price: 50, stock: 320 },
    { _id: 8, name: "Notebook", price: 10, stock: 700 },
    { _id: 9, name: "Basketball", price: 30, stock: 250 },
    { _id: 10, name: "Vacuum Cleaner", price: 180, stock: 80 }
  ],
  db2: [
    // replicated
    { _id: 1, name: "Laptop", price: 1000, stock: 99 },
    { _id: 2, name: "Phone", price: 600, stock: 190 },
    { _id: 3, name: "Shirt", price: 25, stock: 340 },
    { _id: 4, name: "Shoes", price: 80, stock: 220 },
    { _id: 5, name: "Book", price: 20, stock: 480 },
    // fragmented
    { _id: 6, name: "Monitor", price: 250, stock: 140 },
    { _id: 7, name: "Sneakers", price: 70, stock: 330 },
    { _id: 8, name: "Pen", price: 2, stock: 900 },
    { _id: 9, name: "Tennis Racket", price: 120, stock: 60 },
    { _id: 10, name: "Mixer", price: 100, stock: 75 }
  ],
  db3: [
    // replicated
    { _id: 1, name: "Laptop", price: 1000, stock: 150 },
    { _id: 2, name: "Phone", price: 600, stock: 300 },
    { _id: 3, name: "Shirt", price: 25, stock: 400 },
    { _id: 4, name: "Shoes", price: 80, stock: 190 },
    { _id: 5, name: "Book", price: 20, stock: 470 },
    // fragmented
    { _id: 6, name: "Camera", price: 450, stock: 90 },
    { _id: 7, name: "Hat", price: 20, stock: 280 },
    { _id: 8, name: "Paper", price: 5, stock: 1000 },
    { _id: 9, name: "Football", price: 35, stock: 200 },
    { _id: 10, name: "Oven", price: 230, stock: 60 }
  ]
};

const categories = {
  db1: [
    { _id: 1, name: "Electronics", description: "Devices like phones and laptops", popularity: 95 },
    { _id: 2, name: "Clothing", description: "Men and women fashion wear", popularity: 88 },
    { _id: 3, name: "Books", description: "Printed and digital books", popularity: 80 },
    { _id: 4, name: "Sports", description: "Sportswear and equipment", popularity: 70 },
    { _id: 5, name: "Home", description: "Home decor and furniture", popularity: 85 },
    { _id: 6, name: "Office", description: "Office supplies and stationery", popularity: 60 },
    { _id: 7, name: "Kitchen", description: "Cooking and dining tools", popularity: 77 },
    { _id: 8, name: "Outdoors", description: "Camping and hiking gear", popularity: 68 },
    { _id: 9, name: "Beauty", description: "Skincare and cosmetics", popularity: 90 },
    { _id: 10, name: "Toys", description: "Children’s toys and games", popularity: 75 }
  ],
  db2: [
    { _id: 1, name: "Electronics", description: "Devices like phones and laptops", popularity: 95 },
    { _id: 2, name: "Clothing", description: "Men and women fashion wear", popularity: 88 },
    { _id: 3, name: "Books", description: "Printed and digital books", popularity: 80 },
    { _id: 4, name: "Sports", description: "Sportswear and equipment", popularity: 70 },
    { _id: 5, name: "Home", description: "Home decor and furniture", popularity: 85 },
    { _id: 6, name: "Garden", description: "Plants and outdoor decoration", popularity: 65 },
    { _id: 7, name: "Pets", description: "Food and accessories for pets", popularity: 72 },
    { _id: 8, name: "Furniture", description: "Indoor furniture items", popularity: 78 },
    { _id: 9, name: "Toys", description: "Children’s toys and games", popularity: 75 },
    { _id: 10, name: "Music", description: "Instruments and accessories", popularity: 66 }
  ],
  db3: [
    { _id: 1, name: "Electronics", description: "Devices like phones and laptops", popularity: 95 },
    { _id: 2, name: "Clothing", description: "Men and women fashion wear", popularity: 88 },
    { _id: 3, name: "Books", description: "Printed and digital books", popularity: 80 },
    { _id: 4, name: "Sports", description: "Sportswear and equipment", popularity: 70 },
    { _id: 5, name: "Home", description: "Home decor and furniture", popularity: 85 },
    { _id: 6, name: "Fitness", description: "Gym and workout equipment", popularity: 82 },
    { _id: 7, name: "Photography", description: "Cameras and accessories", popularity: 74 },
    { _id: 8, name: "Stationery", description: "Writing and art materials", popularity: 63 },
    { _id: 9, name: "Tools", description: "Hardware and power tools", popularity: 71 },
    { _id: 10, name: "Games", description: "Video games and consoles", popularity: 79 }
  ]
};

// Orders and Reviews are kept simple, still independent (no need for real references)
const orders = {
  db1: [
    { _id: 1, user: "Alice", product: "Laptop", quantity: 1 },
    { _id: 2, user: "Bob", product: "Phone", quantity: 2 },
    { _id: 3, user: "Carol", product: "Shirt", quantity: 1 },
    { _id: 4, user: "David", product: "Shoes", quantity: 1 },
    { _id: 5, user: "Eve", product: "Book", quantity: 3 },
    { _id: 6, user: "Frank", product: "Tablet", quantity: 1 },
    { _id: 7, user: "Grace", product: "Jacket", quantity: 2 },
    { _id: 8, user: "Hank", product: "Notebook", quantity: 4 },
    { _id: 9, user: "Ivy", product: "Basketball", quantity: 1 },
    { _id: 10, user: "Jack", product: "Vacuum Cleaner", quantity: 1 }
  ],
  db2: [
    { _id: 1, user: "Alice", product: "Laptop", quantity: 1 },
    { _id: 2, user: "Bob", product: "Phone", quantity: 2 },
    { _id: 3, user: "Carol", product: "Shirt", quantity: 1 },
    { _id: 4, user: "David", product: "Shoes", quantity: 1 },
    { _id: 5, user: "Eve", product: "Book", quantity: 3 },
    { _id: 6, user: "Liam", product: "Monitor", quantity: 1 },
    { _id: 7, user: "Mia", product: "Sneakers", quantity: 2 },
    { _id: 8, user: "Noah", product: "Pen", quantity: 5 },
    { _id: 9, user: "Olivia", product: "Tennis Racket", quantity: 1 },
    { _id: 10, user: "Pete", product: "Mixer", quantity: 1 }
  ],
  db3: [
    { _id: 1, user: "Alice", product: "Laptop", quantity: 1 },
    { _id: 2, user: "Bob", product: "Phone", quantity: 2 },
    { _id: 3, user: "Carol", product: "Shirt", quantity: 1 },
    { _id: 4, user: "David", product: "Shoes", quantity: 1 },
    { _id: 5, user: "Eve", product: "Book", quantity: 3 },
    { _id: 6, user: "Quinn", product: "Camera", quantity: 1 },
    { _id: 7, user: "Ruby", product: "Hat", quantity: 2 },
    { _id: 8, user: "Sam", product: "Paper", quantity: 10 },
    { _id: 9, user: "Tina", product: "Football", quantity: 1 },
    { _id: 10, user: "Uma", product: "Oven", quantity: 1 }
  ]
};

const reviews = {
  db1: [
    { _id: 1, user: "Alice", product: "Laptop", rating: 5, comment: "Fantastic performance!" },
    { _id: 2, user: "Bob", product: "Phone", rating: 4, comment: "Works great!" },
    { _id: 3, user: "Carol", product: "Shirt", rating: 3, comment: "Good quality." },
    { _id: 4, user: "David", product: "Shoes", rating: 5, comment: "Very comfortable!" },
    { _id: 5, user: "Eve", product: "Book", rating: 4, comment: "Nice story." },
    { _id: 6, user: "Frank", product: "Tablet", rating: 3, comment: "Decent for the price." },
    { _id: 7, user: "Grace", product: "Jacket", rating: 5, comment: "Perfect for winter!" },
    { _id: 8, user: "Hank", product: "Notebook", rating: 4, comment: "Good paper quality." },
    { _id: 9, user: "Ivy", product: "Basketball", rating: 5, comment: "Bounces well!" },
    { _id: 10, user: "Jack", product: "Vacuum Cleaner", rating: 5, comment: "Cleans efficiently!" }
  ],
  db2: [
    { _id: 1, user: "Alice", product: "Laptop", rating: 5, comment: "Great device." },
    { _id: 2, user: "Bob", product: "Phone", rating: 4, comment: "Solid battery life." },
    { _id: 3, user: "Carol", product: "Shirt", rating: 3, comment: "Comfortable fit." },
    { _id: 4, user: "David", product: "Shoes", rating: 5, comment: "Stylish and comfy!" },
    { _id: 5, user: "Eve", product: "Book", rating: 4, comment: "Good read." },
    { _id: 6, user: "Liam", product: "Monitor", rating: 5, comment: "Crisp and bright display!" },
    { _id: 7, user: "Mia", product: "Sneakers", rating: 4, comment: "Lightweight and trendy." },
    { _id: 8, user: "Noah", product: "Pen", rating: 3, comment: "Smooth writing." },
    { _id: 9, user: "Olivia", product: "Tennis Racket", rating: 5, comment: "Excellent balance!" },
    { _id: 10, user: "Pete", product: "Mixer", rating: 4, comment: "Strong motor." }
  ],
  db3: [
    { _id: 1, user: "Alice", product: "Laptop", rating: 5, comment: "Fantastic device!" },
    { _id: 2, user: "Bob", product: "Phone", rating: 4, comment: "Smooth performance." },
    { _id: 3, user: "Carol", product: "Shirt", rating: 3, comment: "Soft and nice color." },
    { _id: 4, user: "David", product: "Shoes", rating: 5, comment: "Excellent design." },
    { _id: 5, user: "Eve", product: "Book", rating: 4, comment: "Inspiring." },
    { _id: 6, user: "Quinn", product: "Camera", rating: 5, comment: "Great image quality!" },
    { _id: 7, user: "Ruby", product: "Hat", rating: 4, comment: "Comfortable material." },
    { _id: 8, user: "Sam", product: "Paper", rating: 3, comment: "Decent for printing." },
    { _id: 9, user: "Tina", product: "Football", rating: 5, comment: "Durable and light." },
    { _id: 10, user: "Uma", product: "Oven", rating: 4, comment: "Heats evenly." }
  ]
};

module.exports = { users, products, categories, orders, reviews };