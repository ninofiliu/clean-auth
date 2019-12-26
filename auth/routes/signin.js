const db = require('../db');
const tokens = require('../../tokens');

/** @type {import('express').RequestHandler} */
module.exports = (req, res) => {
    const { username, password } = req.body;

    if (!db.some((user) => user.username === username && user.password === password)) {
        return res.send('Wrong credentials');
    }
    const token = tokens.generate(username);
    res.cookie('token', token, { domain: '.clean-auth.demo', httpOnly: true });
    return res.redirect('http://main.clean-auth.demo');
};
