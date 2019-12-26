const tokens = require('../tokens');

/** @type {import('express').RequestHandler} */
module.exports = (req, res, next) => {
    const { token } = req.cookies;

    try {
        const username = tokens.verifiedSubject(token);
        req.username = username;
        return next();
    } catch (e) {
        res.status(401);
        return res.redirect(`http://auth.clean-auth.demo/?message=${encodeURIComponent('Invalid authentication token')}`);
    }
};
