/** @type {import('express').RequestHandler} */
module.exports = (req, res) => {
    res.clearCookie('token', { domain: '.clean-auth.demo', httpOnly: true });
    res.redirect('http://auth.clean-auth.demo');
};
