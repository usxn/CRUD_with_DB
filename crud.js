const express = require('express');
const router = express.Router();
const db = require('./connection'); // Change to './connection' if your file is lowercase

// Insert data to DB
router.post('/testInsert', (req, res) => {
    const name = req.body.name;
    const marks = Number(req.body.marks);
    const query = 'INSERT INTO testtable1 (name, marks) VALUES (?, ?)';

    db.query(query, [name, marks], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: err.message });
        }
        console.log('1 record inserted');
        res.status(201).json({ message: '1 record inserted', insertId: result.insertId });
    });
});

// Get data from DB
router.get('/testSelect', (req, res) => {
    const query = 'SELECT * FROM testtable1';

    db.query(query, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: err.message });
        }
        console.log(result);
        res.json(result);
    });
});

// Update data record in DB
router.post('/testUpdate', (req, res) => {
    const id = Number(req.body.id);
    const name = req.body.name;
    const marks = Number(req.body.marks);
    const query = 'UPDATE testtable1 SET name = ?, marks = ? WHERE id = ?';

    db.query(query, [name, marks, id], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: err.message });
        }
        console.log('Record updated');
        res.json({ message: 'Record updated', affectedRows: result.affectedRows });
    });
});

// Delete data record in DB
router.post('/testDelete', (req, res) => {
    const id = Number(req.body.id);
    const query = 'DELETE FROM testtable1 WHERE id = ?';

    db.query(query, [id], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: err.message });
        }
        console.log('Record deleted');
        res.json({ message: 'Record deleted', affectedRows: result.affectedRows });
    });
});

module.exports = router;