const db = require('../database/db');
const addSchool = (req, res) => {
    const { name, address, latitude, longitude } = req.body;
    if (!name || !address || latitude == null || longitude == null) {
        return res.status(400).json({ error: 'All fields (name, address, latitude, longitude) are required.' });
    }
    const query = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
    db.query(query, [name, address, latitude, longitude], (err, results) => {
        if (err) return res.status(500).json({ error: 'Database error', details: err });
        res.status(201).json({ message: 'School added successfully', schoolId: results.insertId });
    });
};

module.exports = addSchool;
