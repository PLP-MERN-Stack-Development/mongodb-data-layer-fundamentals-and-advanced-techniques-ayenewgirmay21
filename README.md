# 📚 PLP Bookstore – MongoDB Assignment (Week 1)

## 🚀 Objective

This project demonstrates the fundamentals of MongoDB, including:

* Creating a database and collection
* Performing CRUD operations
* Running advanced queries (filtering, projection, sorting, pagination)
* Using aggregation pipelines
* Implementing indexing for performance

---

## 🛠️ Setup Instructions

### 1. Install MongoDB

Choose one of the following:

* **Option A: Local** – Install [MongoDB Community Edition](https://www.mongodb.com/try/download/community)
* **Option B: Cloud** – Create a free cluster on [MongoDB Atlas](https://www.mongodb.com/atlas/database)

### 2. Clone This Repository

```bash
git clone <your-repo-link>
cd plp_bookstore
```

### 3. Start MongoDB

* If installed locally:

  ```bash
  mongod
  ```
* If using Atlas: Connect with your connection string in **mongosh**.

### 4. Insert Sample Data

Run the insert script to create the database, collection, and documents:

```bash
mongosh < insert_books.js
```

This will:

* Create a database called **plp_bookstore**
* Create a collection called **books**
* Insert 10 sample book documents

### 5. Run Queries

Execute all queries:

```bash
mongosh < queries.js
```

---

## 📂 Files in Repository

* **insert_books.js** → Script to insert sample books into the database
* **queries.js** → Contains all CRUD operations, advanced queries, aggregations, and indexing
* **README.md** → This documentation file with setup and usage instructions
* **screenshot.png** → Screenshot of MongoDB Compass/Atlas showing the `books` collection and documents

---

## ✅ How to Verify

After running the insert script, open MongoDB Shell:

```bash
mongosh
use plp_bookstore
db.books.find().pretty()
```

You should see the 10 inserted book documents.

---

## 📸 Screenshot

Add a screenshot of your MongoDB Compass or Atlas showing:

* Database: **plp_bookstore**
* Collection: **books**
* At least a few documents

Save it as **screenshot.png** in this repository.
