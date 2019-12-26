const db = require('../db');
const tokens = require('../../tokens');

/** @type {import('express').RequestHandler} */
module.exports = async (req, res) => {
    const { username, password } = req.body;

    if (!await db.some((user) => user.username === username && user.password === password)) {
        return res.redirect(`http://auth.clean-auth.demo?message=${encodeURIComponent('Wrong credentials')}`);
    }
    const token = tokens.generate(username);
    res.cookie('token', token, { domain: '.clean-auth.demo', httpOnly: true });
    return res.redirect('http://main.clean-auth.demo');
};
