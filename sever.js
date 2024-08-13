const express = require('express');
const mysql = require('mysql2'); // or use pg for PostgreSQL

const app = express();
app.use(express.json());

// Database connection details
const db = mysql.createConnection({
    host: 'database-1.c128808wm0zi.ap-south-1.rds.amazonaws.com',
    user: 'admin',
    password: 'mllab123',
    database: 'users'
});

// Test the database connection
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to the database.');
});

// POST method to add a record
app.post('/add', (req, res) => {
    const { name, age } = req.body;

    const query = 'INSERT INTO info (name, age) VALUES (?, ?)';
    db.query(query, [name, age], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Record added successfully!', id: results.insertId });
    });
});

app.get("/users", (req, res) => {
    const query = "SELECT * FROM info";
  
    db.query(query, (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(200).json(results);
    });
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});