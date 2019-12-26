const express = require('express');
const cookieParser = require('cookie-parser');
const auth = require('./auth');

const app = express();
app.use(cookieParser());
app.use(auth);

app.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`));

const hostname = 'main.clean-auth.demo';
app.listen(80, hostname, () => console.log(`Main server listening at http://${hostname}`));
