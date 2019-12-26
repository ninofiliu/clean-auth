const fs = require('fs');

module.exports = fs.readFileSync(`${__dirname}/privateKey.pem`);
