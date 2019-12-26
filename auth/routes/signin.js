const db = require('../db');

/** @type {import('express').RequestHandler} */
module.exports = (req, res) => {
    const { username, password } = req.body;

    if (!db.some((user) => user.username === username && user.password === password)) {
        return res.send('Wrong credentials');
    }
    const token = 'will be replaced by a jwt';
    res.cookie('token', token, { domain: 'localhost:3001', httpOnly: true });
    return res.redirect('http://localhost:3001');
};
