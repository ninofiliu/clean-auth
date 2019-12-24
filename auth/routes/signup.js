const db = require('../db');

const authOrigin = 'http://localhost:3002';
const successRedirect = (() => {
    const url = new URL(authOrigin);
    url.searchParams.append('message', 'User successfully created');
    return url.href;
})();

/** @type {import('express').RequestHandler} */
module.exports = async (req, res) => {
    const { username, password } = req.body;

    if (await db.some((user) => user.username === username)) {
        return res.send('User already exists');
    }
    await db.push({ username, password });
    return res.redirect(successRedirect);
};
