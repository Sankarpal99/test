// models/userModel.js
const db = require('../db');

const User = {
  getAll: (callback) => {
    const query = 'SELECT * FROM info'; // Changed to 'info'
    db.query(query, (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  create: (userData, callback) => {
    const query = 'INSERT INTO info (name, age) VALUES (?, ?)'; // Changed to 'info'
    db.query(query, [userData.name, userData.age], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results.insertId);
    });
  },
  delete: (id, callback) => {
    const query = 'DELETE FROM info WHERE id = ?';
    db.query(query, [id], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  rename: (id, newName, callback) => {
    const query = 'UPDATE info SET name = ? WHERE id = ?';
    db.query(query, [newName, id], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  },
};


module.exports = User;