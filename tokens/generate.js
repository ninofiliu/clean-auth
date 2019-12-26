const jwt = require('jsonwebtoken');
const privateKey = require('./privateKey');

module.exports = (username) => jwt.sign({}, privateKey, {
    algorithm: 'RS256',
    issuer: 'clean-auth.demo',
    subject: username,
});
