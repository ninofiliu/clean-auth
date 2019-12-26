const jwt = require('jsonwebtoken');
const publicKey = require('./publicKey');

module.exports = (token) => {
    const { sub } = jwt.verify(token, publicKey, {
        algorithms: ['RS256'],
        issuer: 'clean-auth.demo',
    });
    return sub;
};
