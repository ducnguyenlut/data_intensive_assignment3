const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to 3 MongoDB databases
const db1 = mongoose.createConnection('mongodb://mongodb:27017/db1');
const db2 = mongoose.createConnection('mongodb://mongodb:27017/db2');
const db3 = mongoose.createConnection('mongodb://mongodb:27017/db3');

// Create models for each DB
const userSchema = require('./models/User');
const productSchema = require('./models/Product');
const categorySchema = require('./models/Category');
const orderSchema = require('./models/Order');
const reviewSchema = require('./models/Review');

const models = {
    db1: {
        User: db1.model('User', userSchema),
        Product: db1.model('Product', productSchema),
        Category: db1.model('Category', categorySchema),
        Order: db1.model('Order', orderSchema),
        Review: db1.model('Review', reviewSchema),
    },
    db2: {
        User: db2.model('User', userSchema),
        Product: db2.model('Product', productSchema),
        Category: db2.model('Category', categorySchema),
        Order: db2.model('Order', orderSchema),
        Review: db2.model('Review', reviewSchema),
    },
    db3: {
        User: db3.model('User', userSchema),
        Product: db3.model('Product', productSchema),
        Category: db3.model('Category', categorySchema),
        Order: db3.model('Order', orderSchema),
        Review: db3.model('Review', reviewSchema),
    }
};

// Middleware to select DB from params
function selectDB(req, res, next) {
    const dbName = req.params.db;
    if (!models[dbName]) return res.status(400).send('Invalid database');
    req.db = models[dbName];
    next();
}

// --------- ROUTES ----------
app.get('/:db/:collection', selectDB, async (req, res) => {
    const dbName = req.params.db;
    const collection = req.params.collection;

    console.log("Request DB:", dbName);
    console.log("Request collection:", collection);
    console.log("Available models in this DB:", Object.keys(req.db));

    const collectionMap = {
        users: 'User',
        products: 'Product',
        categories: 'Category',
        orders: 'Order',
        reviews: 'Review'
    };

    const ModelName = collectionMap[collection];
    if (!ModelName) {
        console.log("Invalid collection:", collection);
        return res.status(400).send('Invalid collection');
    }

    const Model = req.db[ModelName];

    try {
        const data = await Model.find();
        console.log(`Found ${data.length} documents in ${dbName}.${ModelName}`);
        res.json(data);
    } catch (err) {
        console.error("Error fetching data:", err);
        res.status(500).send("Server error");
    }
});


// Update a single item by _id
app.put('/:db/:collection/:id', selectDB, async (req, res) => {
    const collection = req.params.collection;
    const id = req.params.id;
    const updateData = req.body;

    // const Model = req.db[collection.charAt(0).toUpperCase() + collection.slice(1)];
    const collectionMap = {
        users: 'User',
        products: 'Product',
        categories: 'Category',
        orders: 'Order',
        reviews: 'Review'
    };
    const Model = req.db[collectionMap[collection]];
    
    if (!Model) return res.status(400).send('Invalid collection');

    const updated = await Model.findByIdAndUpdate(id, updateData, { new: true });
    if (!updated) return res.status(404).send('Item not found');
    res.json(updated);
});

// Test route
app.get('/', (req, res) => res.send('Backend server is running'));

// Start server
const PORT = 2000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
