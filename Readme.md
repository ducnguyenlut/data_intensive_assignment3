# Data Intensive Assignment 3

This project demonstrates a multi-database setup using MongoDB with Docker Compose. It includes basic operations for accessing, updating, and managing multiple databases. Make sure you have [Docker](https://www.docker.com/get-started) and [Docker Compose](https://docs.docker.com/compose/install/) installed on your system.

To get started, clone the repository:

``` bash
git clone https://github.com/ducnguyenlut/data_intensive_assignment3.git
cd data_intensive_assignment3
```

Then build and run the project using Docker Compose:
``` bash
docker-compose up --build
```

**Note**: To seed the databases with initial data, run the seed script:
``` bash
docker-compose exec backend node seed.js
```

Or if running outside Docker:
``` bash
cd backend
node seed.js
```

Using http://localhost:1000 to access database through web-browser

When you are done, stop and remove all running containers using:
``` bash
docker-compose down
```

The project structure is as follows:
``` bash
data_intensive_assignment3/
│
├─ backend/          # Node.js/Express backend
│   ├─ models/       # MongoDB schemas (User, Product, Category, Order, Review)
│   ├─ dummy-data.js # Seed data with replication and fragmentation
│   ├─ seed.js       # Database seeding script
│   └─ server.js     # Express API server
├─ frontend/         # React frontend with Vite
│   └─ src/
│       ├─ components/  # Table components for each collection
│       ├─ services/    # API service functions
│       └─ App.jsx      # Main application component
├─ docker-compose.yml
└─ README.md
```

## Features

- **3 MongoDB Databases**: db1, db2, and db3
- **5 Collections per Database**: Users, Products, Categories, Orders, Reviews
- **10 Items per Collection**: 5 replicated (same across all DBs) + 5 fragmented (different per DB)
- **Database Selection**: Global selector at the top, plus individual selectors per table
- **View Data**: All data is displayed in tables
- **Update Data**: Click "Edit" on any row to update data
- **Restore Databases**: Button to restore all databases to original state
