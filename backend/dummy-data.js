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

// Orders reference Users and Products by ID (mixing IDs between tables)
// Replicated orders (1-5) use same user/product IDs across all DBs
// Fragmented orders (6-10) use different user/product IDs per DB
const orders = {
  db1: [
    // replicated - same user/product IDs across all DBs
    { _id: 1, userId: 1, productId: 1, quantity: 1 },  // Alice -> Laptop
    { _id: 2, userId: 2, productId: 2, quantity: 2 },  // Bob -> Phone
    { _id: 3, userId: 3, productId: 3, quantity: 1 },  // Carol -> Shirt
    { _id: 4, userId: 4, productId: 4, quantity: 1 },  // David -> Shoes
    { _id: 5, userId: 5, productId: 5, quantity: 3 },  // Eve -> Book
    // fragmented - different user/product IDs per DB
    { _id: 6, userId: 6, productId: 6, quantity: 1 },  // Frank -> Tablet
    { _id: 7, userId: 7, productId: 7, quantity: 2 },  // Grace -> Jacket
    { _id: 8, userId: 8, productId: 8, quantity: 4 },  // Hank -> Notebook
    { _id: 9, userId: 9, productId: 9, quantity: 1 },  // Ivy -> Basketball
    { _id: 10, userId: 10, productId: 10, quantity: 1 }  // Jack -> Vacuum Cleaner
  ],
  db2: [
    // replicated - same user/product IDs across all DBs
    { _id: 1, userId: 1, productId: 1, quantity: 1 },  // Alice -> Laptop
    { _id: 2, userId: 2, productId: 2, quantity: 2 },  // Bob -> Phone
    { _id: 3, userId: 3, productId: 3, quantity: 1 },  // Carol -> Shirt
    { _id: 4, userId: 4, productId: 4, quantity: 1 },  // David -> Shoes
    { _id: 5, userId: 5, productId: 5, quantity: 3 },  // Eve -> Book
    // fragmented - different user/product IDs per DB
    { _id: 6, userId: 6, productId: 6, quantity: 1 },  // Liam -> Monitor
    { _id: 7, userId: 7, productId: 7, quantity: 2 },  // Mia -> Sneakers
    { _id: 8, userId: 8, productId: 8, quantity: 5 },  // Noah -> Pen
    { _id: 9, userId: 9, productId: 9, quantity: 1 },  // Olivia -> Tennis Racket
    { _id: 10, userId: 10, productId: 10, quantity: 1 }  // Pete -> Mixer
  ],
  db3: [
    // replicated - same user/product IDs across all DBs
    { _id: 1, userId: 1, productId: 1, quantity: 1 },  // Alice -> Laptop
    { _id: 2, userId: 2, productId: 2, quantity: 2 },  // Bob -> Phone
    { _id: 3, userId: 3, productId: 3, quantity: 1 },  // Carol -> Shirt
    { _id: 4, userId: 4, productId: 4, quantity: 1 },  // David -> Shoes
    { _id: 5, userId: 5, productId: 5, quantity: 3 },  // Eve -> Book
    // fragmented - different user/product IDs per DB
    { _id: 6, userId: 6, productId: 6, quantity: 1 },  // Quinn -> Camera
    { _id: 7, userId: 7, productId: 7, quantity: 2 },  // Ruby -> Hat
    { _id: 8, userId: 8, productId: 8, quantity: 10 },  // Sam -> Paper
    { _id: 9, userId: 9, productId: 9, quantity: 1 },  // Tina -> Football
    { _id: 10, userId: 10, productId: 10, quantity: 1 }  // Uma -> Oven
  ]
};

// Reviews reference Users and Products by ID (mixing IDs between tables)
// Replicated reviews (1-5) use same user/product IDs across all DBs
// Fragmented reviews (6-10) use different user/product IDs per DB
const reviews = {
  db1: [
    // replicated - same user/product IDs across all DBs
    { _id: 1, userId: 1, productId: 1, rating: 5, comment: "Fantastic performance!" },  // Alice -> Laptop
    { _id: 2, userId: 2, productId: 2, rating: 4, comment: "Works great!" },  // Bob -> Phone
    { _id: 3, userId: 3, productId: 3, rating: 3, comment: "Good quality." },  // Carol -> Shirt
    { _id: 4, userId: 4, productId: 4, rating: 5, comment: "Very comfortable!" },  // David -> Shoes
    { _id: 5, userId: 5, productId: 5, rating: 4, comment: "Nice story." },  // Eve -> Book
    // fragmented - different user/product IDs per DB
    { _id: 6, userId: 6, productId: 6, rating: 3, comment: "Decent for the price." },  // Frank -> Tablet
    { _id: 7, userId: 7, productId: 7, rating: 5, comment: "Perfect for winter!" },  // Grace -> Jacket
    { _id: 8, userId: 8, productId: 8, rating: 4, comment: "Good paper quality." },  // Hank -> Notebook
    { _id: 9, userId: 9, productId: 9, rating: 5, comment: "Bounces well!" },  // Ivy -> Basketball
    { _id: 10, userId: 10, productId: 10, rating: 5, comment: "Cleans efficiently!" }  // Jack -> Vacuum Cleaner
  ],
  db2: [
    // replicated - same user/product IDs across all DBs
    { _id: 1, userId: 1, productId: 1, rating: 5, comment: "Great device." },  // Alice -> Laptop
    { _id: 2, userId: 2, productId: 2, rating: 4, comment: "Solid battery life." },  // Bob -> Phone
    { _id: 3, userId: 3, productId: 3, rating: 3, comment: "Comfortable fit." },  // Carol -> Shirt
    { _id: 4, userId: 4, productId: 4, rating: 5, comment: "Stylish and comfy!" },  // David -> Shoes
    { _id: 5, userId: 5, productId: 5, rating: 4, comment: "Good read." },  // Eve -> Book
    // fragmented - different user/product IDs per DB
    { _id: 6, userId: 6, productId: 6, rating: 5, comment: "Crisp and bright display!" },  // Liam -> Monitor
    { _id: 7, userId: 7, productId: 7, rating: 4, comment: "Lightweight and trendy." },  // Mia -> Sneakers
    { _id: 8, userId: 8, productId: 8, rating: 3, comment: "Smooth writing." },  // Noah -> Pen
    { _id: 9, userId: 9, productId: 9, rating: 5, comment: "Excellent balance!" },  // Olivia -> Tennis Racket
    { _id: 10, userId: 10, productId: 10, rating: 4, comment: "Strong motor." }  // Pete -> Mixer
  ],
  db3: [
    // replicated - same user/product IDs across all DBs
    { _id: 1, userId: 1, productId: 1, rating: 5, comment: "Fantastic device!" },  // Alice -> Laptop
    { _id: 2, userId: 2, productId: 2, rating: 4, comment: "Smooth performance." },  // Bob -> Phone
    { _id: 3, userId: 3, productId: 3, rating: 3, comment: "Soft and nice color." },  // Carol -> Shirt
    { _id: 4, userId: 4, productId: 4, rating: 5, comment: "Excellent design." },  // David -> Shoes
    { _id: 5, userId: 5, productId: 5, rating: 4, comment: "Inspiring." },  // Eve -> Book
    // fragmented - different user/product IDs per DB
    { _id: 6, userId: 6, productId: 6, rating: 5, comment: "Great image quality!" },  // Quinn -> Camera
    { _id: 7, userId: 7, productId: 7, rating: 4, comment: "Comfortable material." },  // Ruby -> Hat
    { _id: 8, userId: 8, productId: 8, rating: 3, comment: "Decent for printing." },  // Sam -> Paper
    { _id: 9, userId: 9, productId: 9, rating: 5, comment: "Durable and light." },  // Tina -> Football
    { _id: 10, userId: 10, productId: 10, rating: 4, comment: "Heats evenly." }  // Uma -> Oven
  ]
};

module.exports = { users, products, categories, orders, reviews };