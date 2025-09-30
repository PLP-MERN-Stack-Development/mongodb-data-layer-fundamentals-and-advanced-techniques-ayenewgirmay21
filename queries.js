// queries.js
// Run with mongosh after switching to plp_bookstore

use plp_bookstore;

// ---------------------
// Task 2: Basic CRUD
// ---------------------

// Find all books in a specific genre (e.g., Fantasy)
db.books.find({ genre: "Fantasy" });

// Find books published after a certain year (e.g., 2000)
db.books.find({ published_year: { $gt: 2000 } });

// Find books by a specific author (e.g., Dan Brown)
db.books.find({ author: "Dan Brown" });

// Update the price of a specific book (e.g., "1984")
db.books.updateOne(
  { title: "1984" },
  { $set: { price: 12.49 } }
);

// Delete a book by its title (e.g., "The Catcher in the Rye")
db.books.deleteOne({ title: "The Catcher in the Rye" });


// ---------------------
// Task 3: Advanced Queries
// ---------------------

// Find books that are in stock and published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } });

// Projection: return only title, author, and price
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 });

// Sorting by price ascending
db.books.find().sort({ price: 1 });

// Sorting by price descending
db.books.find().sort({ price: -1 });

// Pagination: 5 books per page (example: page 2)
db.books.find().skip(5).limit(5);


// ---------------------
// Task 4: Aggregation Pipelines
// ---------------------

// Average price of books by genre
db.books.aggregate([
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
]);

// Author with the most books
db.books.aggregate([
  { $group: { _id: "$author", bookCount: { $sum: 1 } } },
  { $sort: { bookCount: -1 } },
  { $limit: 1 }
]);

// Group by publication decade
db.books.aggregate([
  {
    $group: {
      _id: { decade: { $multiply: [{ $floor: { $divide: ["$published_year", 10] } }, 10] } },
      count: { $sum: 1 }
    }
  },
  { $sort: { "_id.decade": 1 } }
]);


// ---------------------
// Task 5: Indexing
// ---------------------

// Create index on title
db.books.createIndex({ title: 1 });

// Compound index on author and published_year
db.books.createIndex({ author: 1, published_year: 1 });

// Explain query performance with index
db.books.find({ title: "1984" }).explain("executionStats");
