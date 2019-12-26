const db = require('../db');

/** @type {import('express').RequestHandler} */
module.exports = (req, res) => {
    const { username, password } = req.body;

    if (!db.some((user) => user.username === username && user.password === password)) {
        return res.send('Wrong credentials');
    }
    const token = 'will be replaced by a jwt';
    res.cookie('token', token, { domain: '.clean-auth.demo', httpOnly: true });
    return res.redirect('http://main.clean-auth.demo');
};
