const db = require('../db');

/** @type {import('express').RequestHandler} */
module.exports = async (req, res) => {
    const { username, password } = req.body;

    if (await db.some((user) => user.username === username)) {
        return res.send('User already exists');
    }
    await db.push({ username, password });
    return res.redirect(`http://auth.clean-auth.demo/?message=${encodeURIComponent('User successfully created')}`);
};
