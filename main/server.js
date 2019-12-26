const express = require('express');
const cookieParser = require('cookie-parser');
const auth = require('./auth');

const app = express();
const port = 3001;

app.use(cookieParser());
app.use(auth);

app.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`));

app.listen(port, () => console.log(`Main server listening @ http://localhost:${port}`));
