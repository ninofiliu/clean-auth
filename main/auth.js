/** @type {import('express').RequestHandler} */
module.exports = (req, res, next) => {
    const { token } = req.cookies;

    if (token !== 'will be replaced by a jwt') {
        res.status(401);
        return res.send('Invalid authentication token');
    }

    return next();
};
